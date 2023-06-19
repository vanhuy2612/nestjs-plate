import { BaseController } from "../base/base.controller";
import { AuthService } from "./auth.service";
import { Body, Controller, Post, Req, Get, Delete, Put } from "@nestjs/common";
import { ApiBearerAuth, ApiOperation, ApiTags } from "@nestjs/swagger";
import {
  ApiExceptionResponse,
  CustomApiOKResponse,
  ApiPaginatedResponse,
} from "@src/decorators/response.decorator";
import { UserDTO as AuthDTO } from "@src/dtos/dto";

@ApiTags("auth")
@Controller("auth")
export class AuthController extends BaseController {
  constructor(public readonly service: AuthService) {
    super(service);
  }

  @ApiOperation({
    summary: "API danh sach auth",
    description: "API danh sach auth",
  })
  @ApiBearerAuth()
  @ApiPaginatedResponse(AuthDTO)
  @ApiExceptionResponse()
  @Get("")
  async index(@Body() body: any, @Req() req: any): Promise<any> {
    return super.index(body, req);
  }

  @ApiOperation({
    summary: "API tao auth",
    description: "API tao auth",
  })
  @ApiBearerAuth()
  @CustomApiOKResponse(AuthDTO)
  @ApiExceptionResponse()
  @Post("")
  async store(@Body() body: any, @Req() req: any): Promise<any> {
    return super.store(body, req);
  }

  @ApiOperation({
    summary: "API cap nhat auth",
    description: "API cap nhat auth",
  })
  @ApiBearerAuth()
  @CustomApiOKResponse(AuthDTO)
  @ApiExceptionResponse()
  @Put("")
  async edit(@Body() body: any, @Req() req: any): Promise<any> {
    return super.edit(body, req);
  }

  @ApiOperation({
    summary: "API xoa auth",
    description: "API xoa auth",
  })
  @ApiBearerAuth()
  @CustomApiOKResponse(AuthDTO)
  @ApiExceptionResponse()
  @Delete("")
  async delete(@Body() body: any, @Req() req: any): Promise<any> {
    return super.delete(body, req);
  }
}
