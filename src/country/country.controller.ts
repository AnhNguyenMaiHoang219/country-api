import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  UseInterceptors,
} from '@nestjs/common';
import { CountryService } from './country.service';
import { CountriesResponse } from './contract/model/response/countries';
import { CountryDetailResponse } from './contract/model/response/country-detail';

@Controller('countries')
@UseInterceptors(ClassSerializerInterceptor)
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Get()
  public getAllCountries(): Promise<CountriesResponse> {
    return this.countryService.getAllCountries();
  }

  @Get(':name')
  public getCountryByName(@Param('name') countryName: string): Promise<CountryDetailResponse> {
    return this.countryService.getCountryByName(countryName);
  }
}
