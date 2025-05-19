import { IGatewayConfig, ProxyModuleBuilder } from "@duongtrungnguyen/nestro";
import { DynamicModule } from "@nestjs/common";

export class GatewayConfig implements IGatewayConfig {
  build(builder: ProxyModuleBuilder): DynamicModule {
    return builder
      .httpRoute({
        route: "/users{/*path}",
        service: "user",
      })
      .httpRoute({
        route: "/auth{/*path}",
        service: "auth",
      })
      .httpRoute({
        route: "/media{/*path}",
        service: "media",
      })
      .httpRoute({
        route: "/shops{/*path}",
        service: "shop",
      })
      .httpRoute({
        route: "/products{/*path}",
        service: "product",
      })
      .build();
  }
}
