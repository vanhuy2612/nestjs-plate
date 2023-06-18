import { HttpStatus } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { ErrorMessageKey } from "@src/cores/exception/lang";

export class GeneralResponse<TData> {
  @ApiProperty()
  status: HttpStatus;

  @ApiProperty()
  data: TData;
}
export class PaginatedResponse<TData> {
  @ApiProperty()
  status: HttpStatus;

  @ApiProperty()
  total: number;

  @ApiProperty()
  page: number;

  @ApiProperty()
  size: number;

  @ApiProperty({ isArray: true })
  data: TData[];
}

export class ExceptionDTO {
  @ApiProperty()
  code: ErrorMessageKey;

  @ApiProperty()
  message: string;
}
export class ExceptionResponse {
  @ApiProperty()
  status: HttpStatus;

  @ApiProperty()
  path: string;

  @ApiProperty()
  timestamp: string;

  @ApiProperty({ type: ExceptionDTO })
  error: ExceptionDTO;
}
