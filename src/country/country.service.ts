import { Injectable } from '@nestjs/common';
import { CountryClient } from './integration/country-client.service';
import { CountriesResponse } from './contract/model/response/countries';
import { CountryDetailResponse } from './contract/model/response/country-detail';

@Injectable()
export class CountryService {
  constructor(private readonly countryClient: CountryClient) {}

  public async getAllCountries(): Promise<CountriesResponse> {
    try {
      const countries = await this.countryClient.getAllCountries();
      const tranformeCountries = countries.map((country) => {
        return country.convertToContractCountry();
      });

      const countryResponse = new CountriesResponse(tranformeCountries);

      return countryResponse;
    } catch (error) {
      throw error;
    }
  }

  public async getCountryByName(countryName: string): Promise<CountryDetailResponse> {
    try {
      const countryByName = await this.countryClient.getCountryByName(countryName);

      const tranformeCountryByName = countryByName.convertToCountryDetailResponse();

      return tranformeCountryByName;
    } catch (error) {
      throw error;
    }
  }
}
