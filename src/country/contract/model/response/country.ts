import { Exclude, Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

@Exclude()
export class Country {
  @ApiProperty({ name: 'name', example: 'Vietnam' })
  @Expose({ name: 'name' })
  name: string;

  @ApiProperty({ name: 'country_code', example: 'VN' })
  @Expose({ name: 'country_code' })
  countryCode: string;

  constructor(name: string, countryCode: string) {
    this.name = name;
    this.countryCode = countryCode;
  }
}
