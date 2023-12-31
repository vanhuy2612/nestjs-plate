import { Injectable } from "@nestjs/common";
import { PrismaService } from "@src/cores/database/master/index.service";
import { LoggerService } from "@src/cores/logger/index.service";
import { BaseService } from "../base/base.service";
@Injectable()
export class UserService extends BaseService {
  public model = this.prisma.user;
  constructor(readonly prisma: PrismaService, readonly logger: LoggerService) {
    super(prisma, logger);
  }
}
