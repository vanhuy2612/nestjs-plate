import { Module } from "@nestjs/common";
import { UserModule } from "@root/src/modules/user/user.module";
import { AuthModule } from "../auth/auth.module";
import { StockModule } from "../stock/stock.module";

@Module({
  imports: [UserModule, AuthModule, StockModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class BaseModule {}
