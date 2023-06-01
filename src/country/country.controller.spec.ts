import { Test } from '@nestjs/testing';
import * as sinon from 'sinon';
import { CountryController } from './country.controller';
import { CountryService } from './country.service';
import { CountryClient } from './integration/country-client.service';
import { Country } from './contract/model/response/country';
import { CountriesResponse } from './contract/model/response/countries';
import { CountryDetailResponse } from './contract/model/response/country-detail';

describe('CountryController', () => {
  let countryController: CountryController;
  let countryService: CountryService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [CountryController],
      providers: [CountryService, CountryClient],
    }).compile();

    countryController = moduleRef.get<CountryController>(CountryController);
    countryService = moduleRef.get<CountryService>(CountryService);
  });

  describe('getAllCountries', () => {
    it('should return an countries response', async () => {
      const countries = [new Country('Vietnam', 'VN'), new Country('Finland', 'FI')];

      const countryResponse = new CountriesResponse(countries);

      jest
        .spyOn(countryService, 'getAllCountries')
        .mockImplementation(() => Promise.resolve(countryResponse));

      expect(await countryController.getAllCountries()).toBe(countryResponse);
    });
  });

  describe('getCountryByName', () => {
    it('should return an country by name', async () => {
      const countryDetailResponseVn = new CountryDetailResponse(
        'Vietnam',
        'VN',
        'Ha Noi',
        100000000,
        'red',
      );
      const countryDetailResponseFi = new CountryDetailResponse(
        'Finland',
        'FI',
        'Helsinki',
        5000000,
        'blue',
      );

      const getCountryByNameStub = sinon.stub(countryService, 'getCountryByName');

      getCountryByNameStub.withArgs('VietNam').returns(Promise.resolve(countryDetailResponseVn));
      getCountryByNameStub.withArgs('Finland').returns(Promise.resolve(countryDetailResponseFi));

      expect(await countryController.getCountryByName('VietNam')).toBe(countryDetailResponseVn);
      expect(await countryController.getCountryByName('Finland')).toBe(countryDetailResponseFi);
    });
  });
});
