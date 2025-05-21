import { JwtModule as NestJwtModule } from "@nestjs/jwt";
import { Global, Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

import { JwtService } from "./jwt.service";

@Global()
@Module({
  imports: [
    NestJwtModule.registerAsync({
      useFactory: (configService: ConfigService) => ({
        secret: configService.getOrThrow<string>("JWT_SECRET"),
        signOptions: {
          expiresIn: configService.getOrThrow<string>("JWT_EXPIRES_TIME"),
        },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [JwtService],
  exports: [JwtService],
})
export class JwtModule {}
