import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PrismaModule } from "@cores/database/master/index.module";
import { LoggerModule } from "@cores/logger/index.module";
import { ThrottlerModule } from "@nestjs/throttler";
import { BaseModule } from "./modules/base/base.module";
import { JwtModule } from "@nestjs/jwt";
import { Env } from "@shared/env";
import { THROTTLE_TTL, THROTTLE_LIMIT } from "@shared/common";

@Module({
  imports: [
    ThrottlerModule.forRoot({
      ttl: THROTTLE_TTL,
      limit: THROTTLE_LIMIT,
    }),
    BaseModule,
    PrismaModule,
    LoggerModule,
    JwtModule.register({
      secret: Env.JWT_SECRET_KEY,
      signOptions: { expiresIn: "120s" },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
