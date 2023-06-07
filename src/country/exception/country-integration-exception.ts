import { HttpException, HttpStatus } from '@nestjs/common';

export class CountryIntegrationException extends HttpException {
  constructor(message: string) {
    super(message, HttpStatus.SERVICE_UNAVAILABLE);
  }
}
