import { Body, Post, Req, Get, Delete, Put } from "@nestjs/common";
import { Exception } from "@src/cores/exception/Exception";

export class BaseController {
  constructor(public readonly service: any) {}

  @Get("")
  async index(@Body() body: any, @Req() req: any): Promise<any> {
    try {
      const res = await this.service.index(body);
      return res;
    } catch (e) {
      await Exception.handle(req, e);
    }
  }

  @Post("")
  async store(@Body() body: any, @Req() req: any): Promise<any> {
    try {
      const res = await this.service.store(body);
      return res;
    } catch (e) {
      await Exception.handle(req, e);
    }
  }

  @Put(":id")
  async edit(@Body() body: any, @Req() req: any): Promise<any> {
    try {
      const res = await this.service.put(body);
      return res;
    } catch (e) {
      await Exception.handle(req, e);
    }
  }

  @Delete(":id")
  async delete(@Body() body: any, @Req() req: any): Promise<any> {
    try {
      const res = await this.service.delete(body);
      return res;
    } catch (e) {
      await Exception.handle(req, e);
    }
  }
}
