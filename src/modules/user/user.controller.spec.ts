import { Test, TestingModule } from "@nestjs/testing";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { PrismaService } from "@src/cores/database/master/index.service";
import { LoggerService } from "@src/cores/logger/index.service";

describe("UserController", () => {
  let userController: UserController;

  beforeEach(async () => {
    const user: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService, PrismaService, LoggerService],
    }).compile();

    userController = user.get<UserController>(UserController);
  });

  describe("root", () => {
    it('should return "Hello World!"', async () => {
      const result = await userController.index({}, {});
      console.log(result);
      expect(result).toBe("Hello World!");
    });
  });
});
