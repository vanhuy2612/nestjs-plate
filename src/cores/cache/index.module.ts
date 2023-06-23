import { Global, INestApplication, Module } from "@nestjs/common";
import { CacheService } from "./index.service";
import { CacheModule } from "@nestjs/cache-manager";
import { Env } from "@root/src/shared/env";
import type { RedisClientOptions } from 'redis';
import * as redisStore from 'cache-manager-redis-store';
import { Adapter } from "../server/adapter";

@Global()
@Module({
  imports: [
    CacheModule.register<RedisClientOptions>({
        isGlobal: true,
        store: redisStore,
    }),
  ],
  controllers: [],
  providers: [CacheService],
  exports: [CacheService],
})
export class AdapterCacheModule {
  constructor() {
    Adapter.register((app: INestApplication) => {
      console.log("Adapter module AdapterCacheModule");
    });
  }
}
