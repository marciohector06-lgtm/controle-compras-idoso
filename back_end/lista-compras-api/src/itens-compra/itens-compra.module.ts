import { Module } from '@nestjs/common';
import { ItensCompraService } from './itens-compra.service';
import { ItensCompraController } from './itens-compra.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ItensCompraController],
  providers: [ItensCompraService, PrismaService],
})
export class ItensCompraModule {}
