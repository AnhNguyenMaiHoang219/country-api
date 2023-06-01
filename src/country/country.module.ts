import { Module } from '@nestjs/common';
import { CountryService } from './country.service';
import { CountryController } from './country.controller';
import { CountryClient } from './integration/country-client.service';

@Module({
  controllers: [CountryController],
  providers: [CountryService, CountryClient],
})
export class CountryModule {}
