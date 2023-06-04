import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CountryDetailResponse {
  @ApiProperty({ name: 'name', example: 'Finland' })
  @Expose({ name: 'name' })
  name: string;

  @ApiProperty({ name: 'country_code', example: 'FI' })
  @Expose({ name: 'country_code' })
  countryCode: string;

  @ApiProperty({ name: 'capital', example: 'Helsinki' })
  @Expose({ name: 'capital' })
  capital: string;

  @ApiProperty({ name: 'population', example: '5530719' })
  @Expose({ name: 'population' })
  population: number;

  @ApiProperty({ name: 'flag_file_url', example: 'https://flagcdn.com/w320/fi.png' })
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
