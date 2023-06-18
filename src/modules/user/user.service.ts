import { Injectable } from "@nestjs/common";
import { PrismaService } from "@src/cores/database/master/index.service";
import { LoggerService } from "@src/cores/logger/index.service";
import { Prisma } from "@prisma/client";
import { BaseService } from "../base/base.service";
@Injectable()
export class UserService extends BaseService {
  public model: Prisma.UserDelegate<
    Prisma.RejectOnNotFound | Prisma.RejectPerOperation
  > = this.prisma.user;
  constructor(readonly prisma: PrismaService, readonly logger: LoggerService) {
    super(prisma, logger);
  }
}
