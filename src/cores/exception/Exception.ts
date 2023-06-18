import { HttpStatus } from "@nestjs/common";
import { APIException } from "./APIException";
import { ErrorMessageKey } from "./lang";
import { LoggerService } from "../logger/index.service";

export class Exception {
  static logger: LoggerService;
  static getLogger() {
    if (!this.logger) {
      console.log("Create instance...");
      this.logger = new LoggerService();
    } 
    return this.logger;
  }
  static async handle(req: any, e: Error | APIException | unknown | any) {
    this.getLogger().log(e);
    if (!(e instanceof APIException)) {
      e = new APIException(
        HttpStatus.INTERNAL_SERVER_ERROR,
        ErrorMessageKey.UNKNOWN
      );
    }
    throw e;
  }
}
