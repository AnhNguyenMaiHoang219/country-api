import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { ErrorResponse } from './error-response';

@Exclude()
export class ServiceUnavailableResponse extends ErrorResponse {
  @ApiProperty({ example: 503 })
  status: number;

  @ApiProperty({ example: 'Service not available' })
  message: string;
}
