import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsuarioService {

  constructor(private prismaService: PrismaService) {}

  async create(createUsuarioDto: CreateUsuarioDto) {
    return await this.prismaService.usuario.create({
      data: {
        nome: createUsuarioDto.nome,
        email: createUsuarioDto.email,
        senha: createUsuarioDto.senha,
        perfil: createUsuarioDto.perfil
      }
    });
  }

  async findAll() {
    return await this.prismaService.usuario.findMany();
  }

  async findOne(id: number) {
    return await this.prismaService.usuario.findUnique({
      where: {
        id: id
      }
    });
  }

  async findByEmail(email: string){
    return await this.prismaService.usuario.findUnique({
      where:{
        email: email
      }
    })
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return await this.prismaService.usuario.update({
      where: {
        id: id
      },
      data: {
        nome: updateUsuarioDto.nome,
        email: updateUsuarioDto.email,
        senha: updateUsuarioDto.senha,
        perfil: updateUsuarioDto.perfil
      }
    });
  }

  async remove(id: number) {
    return await this.prismaService.usuario.delete({
      where: {
        id: id
      }
    });
  }
}
