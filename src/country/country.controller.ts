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
import {
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('countries')
@Controller('countries')
@UseInterceptors(ClassSerializerInterceptor)
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Get()
  @ApiOkResponse({
    description: 'All countries are successfully retrieved',
    type: CountriesResponse,
  })
  @ApiInternalServerErrorResponse({ description: 'Internal error' })
  public getAllCountries(): Promise<CountriesResponse> {
    return this.countryService.getAllCountries();
  }

  @Get(':nameOrCode')
  @ApiParam({ name: 'nameOrCode', description: 'Country name or country code' })
  @ApiOkResponse({
    description: 'Country details is successfully retrieved',
    type: CountryDetailResponse,
  })
  @ApiNotFoundResponse({ description: 'Country is not found' })
  @ApiInternalServerErrorResponse({ description: 'Internal error' })
  public getCountryByName(
    @Param('nameOrCode') countryNameOrCode: string,
  ): Promise<CountryDetailResponse> {
    return this.countryService.getCountryByName(countryNameOrCode);
  }
}
