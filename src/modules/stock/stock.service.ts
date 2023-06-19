import { Injectable } from "@nestjs/common";
import { LoggerService } from "@src/cores/logger/index.service";
import { BaseService } from "../base/base.service";
import { SlavePrismaService } from "@root/src/cores/database/slave/index.service";
@Injectable()
export class StockService extends BaseService {
  public model = this.prisma.stock;
  constructor(
    readonly prisma: SlavePrismaService,
    readonly logger: LoggerService
  ) {
    super(prisma, logger);
  }
}
