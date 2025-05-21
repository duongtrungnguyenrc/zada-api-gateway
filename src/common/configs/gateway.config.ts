import { IGatewayConfig, ProxyModuleBuilder } from "@duongtrungnguyen/nestro";
import { DynamicModule, RequestMethod } from "@nestjs/common";

import { JwtAuthGuard } from "../guards";

export class ProxyGatewayConfig implements IGatewayConfig {
  build(builder: ProxyModuleBuilder): DynamicModule {
    return builder
      .httpRoute({
        route: "/users{/*path}",
        service: "user",
      })
      .httpRoute({
        route: "/auth{/*path}",
        service: "auth",
        requestHooks: {
          guards: [
            {
              instance: JwtAuthGuard,
              excludes: [
                {
                  path: "/auth/register",
                  method: RequestMethod.POST,
                },
                {
                  path: "/auth/login",
                  method: RequestMethod.POST,
                },
                {
                  path: "/auth/forgot-password",
                  method: RequestMethod.POST,
                },
                {
                  path: "/auth/reset-password",
                  method: RequestMethod.POST,
                },
              ],
            },
          ],
        },
      })
      .httpRoute({
        route: "/media{/*path}",
        service: "media",
        requestHooks: {
          guards: [
            {
              instance: JwtAuthGuard,
              excludes: [
                {
                  path: "/media/:id",
                  method: RequestMethod.GET,
                },
              ],
            },
          ],
        },
      })
      .httpRoute({
        route: "/sellers{/*path}",
        service: "seller",
        requestHooks: {
          guards: [
            {
              instance: JwtAuthGuard,
              excludes: [],
            },
          ],
        },
      })
      .httpRoute({
        route: "/products{/*path}",
        service: "product",
      })
      .build();
  }
}
