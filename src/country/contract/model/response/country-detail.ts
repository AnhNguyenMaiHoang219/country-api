import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CountryDetailResponse {
  @Expose({ name: 'name' })
  name: string;

  @Expose({ name: 'country_code' })
  countryCode: string;

  @Expose({ name: 'capital' })
  capital: string;

  @Expose({ name: 'population' })
  population: number;

  @Expose({ name: 'flag_file_url' })
  flagFileUrl: string;

  constructor(
    name: string,
    countryCode: string,
    capital: string,
    population: number,
    flagFileUrl: string,
  ) {
    this.name = name;
    this.countryCode = countryCode;
    this.capital = capital;
    this.population = population;
    this.flagFileUrl = flagFileUrl;
  }
}
