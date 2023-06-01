import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { plainToInstance } from 'class-transformer';
import { Country } from './model/country';

@Injectable()
export class CountryClient {
  public constructor() {}

  public async getAllCountries(): Promise<Country[]> {
    try {
      const response = await axios.get<Country[]>('https://restcountries.com/v3.1/all');

      return response.data.map((countryRaw: any) => {
        return plainToInstance(Country, countryRaw);
      });
    } catch (error) {
      throw error;
    }
  }

  public async getCountryByName(countryName: string): Promise<Country> {
    try {
      const responseCountry = await axios.get<Country[]>(
        'https://restcountries.com/v3.1/name/' + countryName,
      );

      if (responseCountry.data.length > 0) {
        return plainToInstance(Country, responseCountry.data[0]);
      }
    } catch (error) {
      throw error;
    }
  }
}
