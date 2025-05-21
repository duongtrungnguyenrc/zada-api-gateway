import { createNestroApplication } from "@duongtrungnguyen/nestro";

import { AppModule } from "~app.module";

async function bootstrap() {
  const app = await createNestroApplication(
    AppModule,
    {
      server: {
        host: "localhost",
        port: 4444,
      },
      client: {
        name: "gateway",
        port: 8080,
      },
      gateway: {
        swagger: {
          path: "/",
          jsonPath: "/json",
          title: process.env.APP_TITLE,
          description: process.env.APP_DESCRIPTION,
          version: process.env.APP_VERSION,
        },
      },
    },
    {
      rawBody: true,
    },
  );

  await app.listen();
}

bootstrap();
