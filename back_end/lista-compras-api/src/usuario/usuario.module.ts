import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { HashService } from 'src/common/hash.service';

@Module({
  controllers: [UsuarioController],
  providers: [UsuarioService, PrismaService, HashService],
  exports: [UsuarioService, HashService]
})
export class UsuarioModule {}
