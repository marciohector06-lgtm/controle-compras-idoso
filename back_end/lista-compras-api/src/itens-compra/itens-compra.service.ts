import { Injectable } from '@nestjs/common';
import { CreateItensCompraDto } from './dto/create-itens-compra.dto';
import { UpdateItensCompraDto } from './dto/update-itens-compra.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ItensCompraService {

  constructor(private prismaService: PrismaService) {}

  create(createItensCompraDto: CreateItensCompraDto) {
    return 'This action adds a new itensCompra';
  }

  findAll() {
    return `This action returns all itensCompra`;
  }

  findOne(id: number) {
    return `This action returns a #${id} itensCompra`;
  }

  update(id: number, updateItensCompraDto: UpdateItensCompraDto) {
    return `This action updates a #${id} itensCompra`;
  }

  remove(id: number) {
    return `This action removes a #${id} itensCompra`;
  }
}
