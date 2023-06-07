import { ServiceUnavailableResponse } from '@app/common/contract/model/service-unavailable-response';
import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  UseInterceptors,
} from '@nestjs/common';
import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiParam,
  ApiServiceUnavailableResponse,
  ApiTags
} from '@nestjs/swagger';
import { NotFoundResponse } from '../common/contract/model/not-found-response';
import { CountriesResponse } from './contract/model/response/countries';
import { CountryDetailResponse } from './contract/model/response/country-detail';
import { CountryService } from './country.service';

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
  @ApiServiceUnavailableResponse({ description: 'Internal error', type: ServiceUnavailableResponse })
  public getAllCountries(): Promise<CountriesResponse> {
    return this.countryService.getAllCountries();
  }

  @Get(':nameOrCode')
  @ApiParam({ name: 'nameOrCode', description: 'Country name or country code' })
  @ApiOkResponse({
    description: 'Country details is successfully retrieved',
    type: CountryDetailResponse,
  })
  @ApiNotFoundResponse({ description: 'Country is not found', type: NotFoundResponse })
  @ApiServiceUnavailableResponse({ description: 'Internal error', type: ServiceUnavailableResponse })
  public getCountryByName(
    @Param('nameOrCode') countryNameOrCode: string,
  ): Promise<CountryDetailResponse> {
    return this.countryService.getCountryByName(countryNameOrCode);
  }
}
