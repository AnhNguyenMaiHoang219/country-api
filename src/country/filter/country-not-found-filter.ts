import { Catch, ExceptionFilter, ArgumentsHost, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { CountryNotFoundException } from '../exception/country-not-found-exception';
import { ErrorResponse } from '../../common/contract/model/error-response';

@Catch(CountryNotFoundException)
export class CountryNotFoundExceptionFilter implements ExceptionFilter {
  catch(exception: CountryNotFoundException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    response.status(HttpStatus.NOT_FOUND).json(
      new ErrorResponse({
        status: HttpStatus.NOT_FOUND,
        message: exception.message,
      }),
    );
  }
}
