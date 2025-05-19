import { createNestroApplication } from "@duongtrungnguyen/nestro";
import { config } from "dotenv";

import { AppModule } from "~app.module";

config();

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
          path: "/docs",
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
