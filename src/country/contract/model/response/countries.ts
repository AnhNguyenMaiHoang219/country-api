import { Country } from './country';
import { ApiProperty } from '@nestjs/swagger';

export class CountriesResponse {
  @ApiProperty({ name: 'countries', type: Country, isArray: true })
  countries: Country[];

  constructor(countries: Country[]) {
    this.countries = countries;
  }
}
