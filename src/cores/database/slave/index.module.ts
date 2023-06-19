import { Global, Module } from "@nestjs/common";
import { SlavePrismaService } from "./index.service";
@Global()
@Module({
  imports: [],
  controllers: [],
  providers: [SlavePrismaService],
  exports: [SlavePrismaService],
})
export class SlavePrismaModule {}
