import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {

    constructor() {
        // O adaptador espera um objeto com a URL do banco (ou :memory:)
        const adapter = new PrismaBetterSqlite3({
            url: process.env.DATABASE_URL || 'file:./database.sqlite',
        });

        super({
            adapter,
            log: ['query', 'info', 'warn', 'error'],
        });
  }

    async onModuleInit() {
        await this.$connect();
    }
}