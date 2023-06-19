import { Global, Module } from "@nestjs/common";
import { CacheService } from "./index.service";
import { CacheModule } from "@nestjs/cache-manager";
import { Env } from "@root/src/shared/env";
import type { RedisClientOptions } from 'redis';
import * as redisStore from 'cache-manager-redis-store';

@Global()
@Module({
  imports: [
    CacheModule.register<RedisClientOptions>({
        isGlobal: true,
        store: redisStore,
        host: Env.REDIS_HOST,
        port: Env.REDIS_PORT,
    }),
  ],
  controllers: [],
  providers: [CacheService],
  exports: [CacheService],
})
export class CustomCacheModule {}
