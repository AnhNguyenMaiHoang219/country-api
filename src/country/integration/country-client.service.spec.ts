import { CountryClient } from './country-client.service';
import { Country } from './model/country';
import { CountryName } from './model/country-name';

describe('CountryClient', () => {
  let countryClient: CountryClient;

  beforeEach(() => {
    countryClient = new CountryClient();
  });

  describe('getAllCountries', () => {
    it('should return an array of countries', async () => {
      const mockData = [
        new Country({
          name: new CountryName('Vietnam'),
          countryCode: 'VN',
        }),
        new Country({
          name: new CountryName('Finland'),
          countryCode: 'FI',
        }),
      ];

      jest
        .spyOn(countryClient, 'getAllCountries')
        .mockImplementation(() => Promise.resolve(mockData));

      const actualResult = await countryClient.getAllCountries();

      expect(actualResult).toBe(mockData);
    });
  });
});
