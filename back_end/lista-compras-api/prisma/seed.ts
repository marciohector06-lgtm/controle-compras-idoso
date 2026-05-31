import { PrismaClient } from '@prisma/client';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
import * as bcrypt from 'bcrypt';
import * as dotenv from 'dotenv';

dotenv.config();

const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL || 'file:./database.sqlite',
});

const prisma = new PrismaClient({ adapter } as any);

async function main() {
  const senhaHash = await bcrypt.hash('admin1!', 10);

  await prisma.usuario.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      nome: 'admin',
      email: 'admin@example.com',
      senha: senhaHash,
      perfil: 'ADMIN',
    },
  });

  console.log('Seeder: usuário admin criado/verificado com sucesso.');

  for (const nome of ['Medicamento', 'Outros']) {
    const existe = await prisma.categoria.findFirst({ where: { nome } });
    if (!existe) {
      await prisma.categoria.create({ data: { nome } });
    }
  }

  console.log('Seeder: categorias iniciais criadas/verificadas com sucesso.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
