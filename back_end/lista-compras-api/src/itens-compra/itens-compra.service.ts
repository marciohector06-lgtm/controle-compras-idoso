import { Injectable } from '@nestjs/common';
import { CreateItensCompraDto } from './dto/create-itens-compra.dto';
import { UpdateItensCompraDto } from './dto/update-itens-compra.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ItensCompraService {

  constructor(private prismaService: PrismaService) {}

  create(createItensCompraDto: CreateItensCompraDto, usuarioId: number) {
    return this.prismaService.item.create({
      data: {
        nome: createItensCompraDto.nome,
        quantidade: createItensCompraDto.quantidade,
        observacao: createItensCompraDto.observacao,
        categoriaId: createItensCompraDto.categoriaId,
        criadoPorId: usuarioId
      },
      include: {
        criadoPor: true,
        atualizadoPor: true,
        compradoPor: true,
        categoria: true
      }
    });
  }

  findAll() {
    return this.prismaService.item.findMany({
      include: {
        criadoPor: true,
        atualizadoPor: true,
        compradoPor: true,
        categoria: true
      }
    });
  }

  findOne(id: number) {
    return this.prismaService.item.findUnique({
      where: {
        id
      },
      include:{
        criadoPor: true,
        atualizadoPor: true,
        compradoPor: true,
        categoria: true
      }
    });
  }

  update(id: number, updateItensCompraDto: UpdateItensCompraDto) {
    return this.prismaService.item.update({
      where: {
        id
      },
      data: {
        nome: updateItensCompraDto.nome,
        quantidade: updateItensCompraDto.quantidade,
        observacao: updateItensCompraDto.observacao,
        categoriaId: updateItensCompraDto.categoriaId
      },
      include: {
        criadoPor: true,
        atualizadoPor: true,
        compradoPor: true,
        categoria: true
      }
    });
  }

  remove(id: number) {
    return this.prismaService.item.delete({
      where: {
        id
      }
    });
  }
}
