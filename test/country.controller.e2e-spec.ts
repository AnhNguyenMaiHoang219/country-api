import * as request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as nock from 'nock';
import { AppModule } from '@app/app.module';
import { readFile } from './util/test-util';

describe('CountryController', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('/GET - get all countries', () => {
    it(`should return 200 status with country list`, () => {
      const data = readFile('test-data/getAllCountries_200-response.json');

      nock('https://restcountries.com/v3.1/').get('/all').reply(200, data);

      return request(app.getHttpServer())
        .get('/countries')
        .expect(200)
        .expect({
          countries: [
            {
              name: 'Vietnam',
              country_code: 'VN',
            },
            {
              name: 'Finland',
              country_code: 'FI',
            },
            {
              name: 'United States',
              country_code: 'US',
            },
          ],
        });
    });
  });

  describe('/GET - get country by name', () => {
    it(`should return 200 and country details`, async () => {
      const countryName = 'Vietnam';
      const data = readFile('test-data/getCountryByName_200-response.json');

      nock('https://restcountries.com/v3.1/name')
        .get('/' + countryName)
        .reply(200, data);

      return request(app.getHttpServer())
        .get('/countries/' + countryName)
        .expect(200)
        .expect({
          name: 'Vietnam',
          country_code: 'VN',
          capital: 'Hanoi',
          population: 97338583,
          flag_file_url: 'https://flagcdn.com/w320/vn.png',
        });
    });
  });
});
