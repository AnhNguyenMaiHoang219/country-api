import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { ErrorResponse } from './error-response';

@Exclude()
export class NotFoundResponse extends ErrorResponse {
  @ApiProperty({ example: 404 })
  status: number;

  @ApiProperty({ example: 'Not found error' })
  message: string;
}
