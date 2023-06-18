import { ApiProperty } from "@nestjs/swagger";

export class CommonRequest {
  @ApiProperty()
  id: number;
}
