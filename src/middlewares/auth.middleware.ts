import { HttpStatus, Injectable } from "@nestjs/common";
import { BaseMiddleware } from "./base.middleware";
import { Env } from "@src/shared/env";
import { APIException } from "@src/cores/exception/APIException";
import { ErrorMessageKey } from "@src/cores/exception/lang";

@Injectable()
export class AuthMiddleware extends BaseMiddleware {
  async use(req: any, res: any, next: (error?: any) => void) {
    const bear: string = req.headers["authorization"] || "";
    const token: string = bear.replace(/Bearer /gi, "");

    try {
      const auth: any = this.jwtService.verify(token, {
        secret: Env.JWT_SECRET_KEY,
      });
      if (!auth.id) {
        throw new APIException(
          HttpStatus.UNAUTHORIZED,
          ErrorMessageKey.TOKEN_IS_INVALID
        );
      }
      // Save auth to req
      req.auth = auth;
      next();
    } catch (e) {
      throw new APIException(
        HttpStatus.UNAUTHORIZED,
        ErrorMessageKey.TOKEN_IS_INVALID
      );
    }
  }
}
