import { Catch, ExceptionFilter, ArgumentsHost, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { CountryIntegrationException } from '../exception/country-integration-exception';
import { ErrorResponse } from '../../common/contract/model/error-response';

@Catch(CountryIntegrationException)
export class CountryIntegrationExceptionFilter implements ExceptionFilter {
  catch(exception: CountryIntegrationException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    response.status(HttpStatus.SERVICE_UNAVAILABLE).json(
      new ErrorResponse({
        status: HttpStatus.SERVICE_UNAVAILABLE,
        message: exception.message,
      }),
    );
  }
}
