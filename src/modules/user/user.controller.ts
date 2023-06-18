import { BaseController } from "../base/base.controller";
import { UserService } from "./user.service";
import { Body, Controller, Post, Req, Get, Delete, Put } from "@nestjs/common";
import { ApiBearerAuth, ApiOperation, ApiTags } from "@nestjs/swagger";
import {
  ApiExceptionResponse,
  CustomApiOKResponse,
  ApiPaginatedResponse,
} from "@src/decorators/response.decorator";
import { UserDTO } from "@src/dtos/dto";

@ApiTags("users")
@Controller("users")
export class UserController extends BaseController {
  constructor(public readonly service: UserService) {
    super(service);
  }

  @ApiOperation({
    summary: "API danh sach user",
    description: "API danh sach user",
  })
  @ApiBearerAuth()
  @ApiPaginatedResponse(UserDTO)
  @ApiExceptionResponse()
  @Get("")
  async index(@Body() body: any, @Req() req: any): Promise<any> {
    return super.index(body, req);
  }

  @ApiOperation({
    summary: "API tao user",
    description: "API tao user",
  })
  @ApiBearerAuth()
  @CustomApiOKResponse(UserDTO)
  @ApiExceptionResponse()
  @Post("")
  async store(@Body() body: any, @Req() req: any): Promise<any> {
    return super.store(body, req);
  }

  @ApiOperation({
    summary: "API cap nhat user",
    description: "API cap nhat user",
  })
  @ApiBearerAuth()
  @CustomApiOKResponse(UserDTO)
  @ApiExceptionResponse()
  @Put("")
  async edit(@Body() body: any, @Req() req: any): Promise<any> {
    return super.edit(body, req);
  }

  @ApiOperation({
    summary: "API xoa user",
    description: "API xoa user",
  })
  @ApiBearerAuth()
  @CustomApiOKResponse(UserDTO)
  @ApiExceptionResponse()
  @Delete("")
  async delete(@Body() body: any, @Req() req: any): Promise<any> {
    return super.delete(body, req);
  }
}
