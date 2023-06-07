import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class ErrorResponse {
  @ApiProperty({ name: 'status' })
  @Expose({ name: 'status' })
  status: number;

  @ApiProperty({ name: 'message' })
  @Expose({ name: 'message' })
  message: string;

  constructor(partial: Partial<ErrorResponse> = {}) {
    Object.assign(this, partial);
  }
}
