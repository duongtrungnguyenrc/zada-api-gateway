import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { extractAuthToken } from "@duongtrungnguyen/micro-commerce";
import { Request } from "express";

import { JwtService } from "~jwt";

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  async canActivate(context: ExecutionContext) {
    const request: Request = context.switchToHttp().getRequest();

    const token = extractAuthToken(request);

    if (!token) {
      return false;
    }

    return !!(await this.jwtService.verifyToken(token));
  }
}
