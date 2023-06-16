import { NestFactory } from "@nestjs/core";
import { AppModule } from "@root/src/app.module";
import { CustomExceptionFilter } from "@cores/exception/CustomExceptionFilter";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { LoggerService } from "@cores/logger/index.service";
import { ValidationPipe } from "@nestjs/common";
import { Env } from "@shared/env";

class Server {
  async start() {
    const logger = new LoggerService();
    const port = Env.PORT;
    const app = await NestFactory.create(AppModule);
    app.enableCors({
      allowedHeaders: "*",
      origin: "*",
    });
    app.useGlobalFilters(new CustomExceptionFilter());
    app.useGlobalPipes(new ValidationPipe());
    app.setGlobalPrefix("/api/v1");
    const config = new DocumentBuilder()
      .setTitle("Green Lab List APIs")
      .setDescription("Green Lab List APIs")
      .setVersion("1.0")
      .addTag("API")
      .addBearerAuth()
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup("/docs", app, document);
    app.listen(port);
    logger.log("Server is running on port :", port);
  }
}

export default Server;
