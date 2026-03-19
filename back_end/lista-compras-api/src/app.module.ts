import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Importação dos módulos que você gerou para o MVP
import { UsuarioModule } from './usuario/usuario.module';
import { CategoriasModule } from './categorias/categorias.module';
import { ItensCompraModule } from './itens-compra/itens-compra.module';

// Importação do módulo do Prisma (que fará a conexão com o banco)
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UsuarioModule,
    CategoriasModule,
    ItensCompraModule,
    PrismaModule,
    AuthModule, // Descomente esta linha quando criarmos o PrismaModule
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}