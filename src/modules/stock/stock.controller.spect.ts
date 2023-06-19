import { Test, TestingModule } from "@nestjs/testing";
import { StockController } from "./stock.controller";
import { StockService } from "./stock.service";
import { PrismaService } from "@src/cores/database/master/index.service";
import { LoggerService } from "@src/cores/logger/index.service";

describe("StockController", () => {
  let stockController: StockController;

  beforeEach(async () => {
    const stock: TestingModule = await Test.createTestingModule({
      controllers: [StockController],
      providers: [StockService, PrismaService, LoggerService],
    }).compile();

    stockController = stock.get<StockController>(StockController);
  });

  describe("root", () => {
    it('should return "Hello World!"', async () => {
      const result = await stockController.index({}, {});
      console.log(result);
      expect(result).toBe("Hello World!");
    });
  });
});
