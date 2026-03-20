import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
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
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './common/guards/auth.guard';
import { RolesGuard } from './common/guards/roles.guard';
import jwtConfig from './config/jwt.config';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [jwtConfig]
    }),
    UsuarioModule,
    CategoriasModule,
    ItensCompraModule,
    PrismaModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService,
    PrismaService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard, 
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard, 
    },
  ],
})
export class AppModule {}