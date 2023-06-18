import { Injectable } from "@nestjs/common";
import { PrismaService } from "@src/cores/database/master/index.service";
import { LoggerService } from "@src/cores/logger/index.service";
@Injectable()
export class BaseService {
  public model: any;
  constructor(readonly prisma: PrismaService, readonly logger: LoggerService) {}

  async index() {
    return await this.model.findMany({});
  }

  async store() {
    return "base.service.store";
  }

  async edit() {
    return "base.service.edit";
  }

  async delete() {
    return "base.service.delete";
  }
}
