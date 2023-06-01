import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class Country {
  @Expose({ name: 'name' })
  name: string;

  @Expose({ name: 'country_code' })
  countryCode: string;

  constructor(name: string, countryCode: string) {
    this.name = name;
    this.countryCode = countryCode;
  }
}
