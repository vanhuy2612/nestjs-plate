import { NestFactory } from "@nestjs/core";
import { AppModule } from "@root/src/app.module";
import { CustomExceptionFilter } from "@src/cores/exception/CustomExceptionFilter";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { LoggerService } from "@src/cores/logger/index.service";
import { ValidationPipe } from "@nestjs/common";
import { Env } from "@src/shared/env";
import { Adapter } from "./adapter";

class Server {
  async start() {
    const logger = new LoggerService();
    const port = Env.PORT;
    const app = await NestFactory.create(AppModule);
    Adapter.assembly(app);
    app.enableCors({
      allowedHeaders: "*",
      origin: "*",
    });
    app.useGlobalFilters(new CustomExceptionFilter());
    app.useGlobalPipes(new ValidationPipe());
    app.setGlobalPrefix("/api/v1");
    app.listen(port);
    logger.log("Server is running on port :", port);
  }
}

export default Server;
