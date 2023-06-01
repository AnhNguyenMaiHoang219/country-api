import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CountryName {
  @Expose({ name: 'common' })
  common: string;

  constructor(common: string) {
    this.common = common;
  }
}
