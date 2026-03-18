import { Test, TestingModule } from '@nestjs/testing';
import { ItensCompraService } from './itens-compra.service';

describe('ItensCompraService', () => {
  let service: ItensCompraService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ItensCompraService],
    }).compile();

    service = module.get<ItensCompraService>(ItensCompraService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
