import { BaseController } from "../base/base.controller";
import { StockService } from "./stock.service";
import { Body, Controller, Post, Req, Get, Delete, Put } from "@nestjs/common";
import { ApiBearerAuth, ApiOperation, ApiTags } from "@nestjs/swagger";
import {
  ApiExceptionResponse,
  CustomApiOKResponse,
  ApiPaginatedResponse,
} from "@src/decorators/response.decorator";
import { UserDTO as StockDTO } from "@src/dtos/dto";

@ApiTags("stocks")
@Controller("stocks")
export class StockController extends BaseController {
  constructor(public readonly service: StockService) {
    super(service);
  }

  @ApiOperation({
    summary: "API danh sach stock",
    description: "API danh sach stock",
  })
  @ApiBearerAuth()
  @ApiPaginatedResponse(StockDTO)
  @ApiExceptionResponse()
  @Get("")
  async index(@Body() body: any, @Req() req: any): Promise<any> {
    return super.index(body, req);
  }

  @ApiOperation({
    summary: "API tao stock",
    description: "API tao stock",
  })
  @ApiBearerAuth()
  @CustomApiOKResponse(StockDTO)
  @ApiExceptionResponse()
  @Post("")
  async store(@Body() body: any, @Req() req: any): Promise<any> {
    return super.store(body, req);
  }

  @ApiOperation({
    summary: "API cap nhat stock",
    description: "API cap nhat stock",
  })
  @ApiBearerAuth()
  @CustomApiOKResponse(StockDTO)
  @ApiExceptionResponse()
  @Put("")
  async edit(@Body() body: any, @Req() req: any): Promise<any> {
    return super.edit(body, req);
  }

  @ApiOperation({
    summary: "API xoa stock",
    description: "API xoa stock",
  })
  @ApiBearerAuth()
  @CustomApiOKResponse(StockDTO)
  @ApiExceptionResponse()
  @Delete("")
  async delete(@Body() body: any, @Req() req: any): Promise<any> {
    return super.delete(body, req);
  }
}
