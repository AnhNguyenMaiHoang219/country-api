import { Country } from './country';

export class CountriesResponse {
  countries: Country[];

  constructor(countries: Country[]) {
    this.countries = countries;
  }
}
