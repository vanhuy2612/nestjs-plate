import { Injectable, NestMiddleware } from "@nestjs/common";
import { PrismaService } from "@cores/database/master/index.service";
import { LoggerService } from "@cores/logger/index.service";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class BaseMiddleware implements NestMiddleware {
  constructor(
    readonly prismaService: PrismaService,
    readonly logger: LoggerService,
    readonly jwtService: JwtService
  ) {}
  async use(req: any, res: any, next: (error?: any) => void) {
    next();
  }
}
