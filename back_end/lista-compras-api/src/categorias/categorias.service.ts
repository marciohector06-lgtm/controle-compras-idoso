import { Injectable } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoriasService {

  constructor(private prismaService: PrismaService) {}

  create(createCategoriaDto: CreateCategoriaDto) {
    return this.prismaService.categoria.create({
      data: {
        nome: createCategoriaDto.nome
      }
    });
  }

  findAll() {
    return this.prismaService.categoria.findMany();
  }

  findOne(id: number) {
    return this.prismaService.categoria.findUnique({
      where: {
        id
      }
    });
  }

  update(id: number, updateCategoriaDto: UpdateCategoriaDto) {
    return this.prismaService.categoria.update({
      where: {
        id
      },
      data: {
        nome: updateCategoriaDto.nome
      }
    });
  }

  remove(id: number) {
    return this.prismaService.categoria.delete({
      where: {
        id
      }
    });
  }
}
