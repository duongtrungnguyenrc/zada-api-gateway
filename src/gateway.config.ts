import { IRoutingConfig, ProxyModuleBuilder } from "@duongtrungnguyen/nestro";
import { DynamicModule } from "@nestjs/common";

export class GatewayConfig implements IRoutingConfig {
  build(builder: ProxyModuleBuilder): DynamicModule {
    return builder
      .httpRoute({
        route: "/user{/*path}",
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
      .build();
  }
}
