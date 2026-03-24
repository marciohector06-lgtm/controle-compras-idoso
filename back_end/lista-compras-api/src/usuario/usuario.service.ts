import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PerfilUsuario } from './enums/role.enums';
import { HashService } from 'src/common/hash.service';

@Injectable()
export class UsuarioService {

  constructor(
    private prismaService: PrismaService,
    private hashService: HashService
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto) {
    const senhaCriptografada = await this.hashService.gerarHash(createUsuarioDto.senha)

    const usuario = await this.prismaService.usuario.create({
      data: {
        ...createUsuarioDto,
        senha: senhaCriptografada,
        perfil: createUsuarioDto.perfil ?? PerfilUsuario.FAMILIA
      }
    });

    const { senha, ...usuarioSemSenha } = usuario;

    return usuarioSemSenha;
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
    const dadosParaAtualizar: any = { ...updateUsuarioDto }

    if(updateUsuarioDto.senha){
      dadosParaAtualizar.senha = await this.hashService.gerarHash(updateUsuarioDto.senha);
    }

    const usuarioAtualizado = await this.prismaService.usuario.update({
      where: {
        id: id
      },
      data: dadosParaAtualizar
    });

    const { senha, ...usuarioAtualizadoSemSenha } = usuarioAtualizado

    return usuarioAtualizadoSemSenha
  }

  async remove(id: number) {
    return await this.prismaService.usuario.delete({
      where: {
        id: id
      }
    });
  }
}
