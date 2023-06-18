import { Module } from "@nestjs/common";
import { UserModule } from "@root/src/modules/user/user.module";

@Module({
  imports: [UserModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class BaseModule {}
