import { createNestroApplication } from "@duongtrungnguyen/nestro";

import { AppModule } from "./app.module";

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
    },
    {
      rawBody: true,
    },
  );

  await app.listen();
}
bootstrap();
