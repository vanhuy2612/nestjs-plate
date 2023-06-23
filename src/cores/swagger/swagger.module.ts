import { INestApplication } from "@nestjs/common";
import { Adapter } from "../server/adapter";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export class AdapterSwaggerModule {
  constructor() {
    Adapter.register((app: INestApplication) => {
      const config = new DocumentBuilder()
        .setTitle("Project APIs")
        .setDescription("Project APIs")
        .setVersion("1.0")
        .addTag("API")
        .addBearerAuth()
        .build();
      const document = SwaggerModule.createDocument(app, config);
      SwaggerModule.setup("/docs", app, document);
    });
  }
}
