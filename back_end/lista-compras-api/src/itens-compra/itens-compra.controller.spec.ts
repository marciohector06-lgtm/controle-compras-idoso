import { Test, TestingModule } from '@nestjs/testing';
import { ItensCompraController } from './itens-compra.controller';
import { ItensCompraService } from './itens-compra.service';

describe('ItensCompraController', () => {
  let controller: ItensCompraController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItensCompraController],
      providers: [ItensCompraService],
    }).compile();

    controller = module.get<ItensCompraController>(ItensCompraController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
