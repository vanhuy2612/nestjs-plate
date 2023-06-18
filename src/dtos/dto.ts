import { ApiProperty } from "@nestjs/swagger";

export class CommonDTO {
  id: number;
}

export class UserDTO {
  @ApiProperty()
  id: number;
}