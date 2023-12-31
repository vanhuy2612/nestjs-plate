import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PrismaModule } from "@src/cores/database/master/index.module";
import { LoggerModule } from "@src/cores/logger/index.module";
import { ThrottlerModule } from "@nestjs/throttler";
import { BaseModule } from "./modules/base/base.module";
import { JwtModule } from "@nestjs/jwt";
import { Env } from "@src/shared/env";
import { THROTTLE_TTL, THROTTLE_LIMIT } from "@src/shared/common";
import { SlavePrismaModule } from "@src/cores/database/slave/index.module";
import { AdapterCacheModule } from "@src/cores/cache/index.module";
import { AdapterSwaggerModule } from "@src/cores/swagger/swagger.module";

@Module({
  imports: [
    ThrottlerModule.forRoot({
      ttl: THROTTLE_TTL,
      limit: THROTTLE_LIMIT,
    }),
    BaseModule,
    PrismaModule,
    SlavePrismaModule,
    LoggerModule,
    JwtModule.register({
      secret: Env.JWT_SECRET_KEY,
      signOptions: { expiresIn: "120s" },
    }),
    AdapterCacheModule,
    AdapterSwaggerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
