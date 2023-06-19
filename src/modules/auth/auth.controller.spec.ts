import { Test, TestingModule } from "@nestjs/testing";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { PrismaService } from "@src/cores/database/master/index.service";
import { LoggerService } from "@src/cores/logger/index.service";

describe("AuthController", () => {
  let authController: AuthController;

  beforeEach(async () => {
    const auth: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [AuthService, PrismaService, LoggerService],
    }).compile();

    authController = auth.get<AuthController>(AuthController);
  });

  describe("root", () => {
    it('should return "Hello World!"', async () => {
      const result = await authController.index({}, {});
      console.log(result);
      expect(result).toBe("Hello World!");
    });
  });
});
