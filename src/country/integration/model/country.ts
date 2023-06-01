import { Exclude, Expose, Type } from 'class-transformer';
import { CountryFlag } from './country-flag';
import { CountryName } from './country-name';
import { Country as ContractCountry } from '@app/country/contract/model/response/country';
import { CountryDetailResponse } from '@app/country/contract/model/response/country-detail';

@Exclude()
export class Country {
  @Expose({ name: 'name' })
  @Type(() => CountryName)
  name: CountryName;

  @Expose({ name: 'cca2' })
  countryCode: string;

  @Expose({ name: 'capital' })
  capitals: string[];

  @Expose({ name: 'population' })
  population: number;

  @Expose({ name: 'flags' })
  @Type(() => CountryFlag)
  flag: CountryFlag;

  constructor(partial: Partial<Country> = {}) {
    Object.assign(this, partial);
  }

  public convertToContractCountry(): ContractCountry {
    return new ContractCountry(this.name.common, this.countryCode);
  }

  public convertToCountryDetailResponse(): CountryDetailResponse {
    return new CountryDetailResponse(
      this.name.common,
      this.countryCode,
      this.capitals[0],
      this.population,
      this.flag.png,
    );
  }
}
