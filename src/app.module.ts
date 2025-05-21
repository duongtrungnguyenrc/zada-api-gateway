import { ConfigModule, ConfigService } from "@nestjs/config";
import { ProxyModule } from "@duongtrungnguyen/nestro";
import { CacheModule } from "@nestjs/cache-manager";
import { createKeyv } from "@keyv/redis";
import { Module } from "@nestjs/common";

import { ProxyGatewayConfig } from "~common";
import { JwtModule } from "~jwt";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    CacheModule.registerAsync({
      useFactory: (configService: ConfigService) => ({
        stores: [createKeyv(configService.getOrThrow<string>("REDIS_URL"))],
        ttl: configService.getOrThrow<number>("CACHE_TTL"),
      }),
      inject: [ConfigService],
      isGlobal: true,
    }),
    ProxyModule.config(ProxyGatewayConfig),
    JwtModule,
  ],
})
export class AppModule {}
