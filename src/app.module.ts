import { ProxyModule } from "@duongtrungnguyen/nestro";
import { Module } from "@nestjs/common";

import { GatewayConfig } from "~configs";

@Module({
  imports: [ProxyModule.config(GatewayConfig)],
})
export class AppModule {}
