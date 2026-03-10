import { Module } from '@nestjs/common';
import { ItensCompraService } from './itens-compra.service';
import { ItensCompraController } from './itens-compra.controller';

@Module({
  controllers: [ItensCompraController],
  providers: [ItensCompraService],
})
export class ItensCompraModule {}
