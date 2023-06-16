import { Injectable } from "@nestjs/common";
import { PrismaService } from "@cores/database/master/index.service";
import { LoggerService } from "@cores/logger/index.service";
@Injectable()
export class BaseService {
  public model: any;
  constructor(
    readonly prismaService: PrismaService,
    readonly logger: LoggerService
  ) {}
}
