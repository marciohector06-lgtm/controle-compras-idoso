# 🛒 Sistema de Controle de Necessidades e Compras (Cuidado ao Idoso)

Projeto desenvolvido para a disciplina de Teste de Software. O sistema consiste em uma aplicação básica (CRUD) para que familiares gerenciem listas de compras de mercado e farmácia para um ente querido idoso, servindo como base para a aplicação de testes automatizados e manuais.

## Execução do projeto (como rodar)

Este repositório possui uma aplicação **frontend** em React + Vite dentro da pasta `front_end/tela-compras/` e uma **API backend** em NestJS dentro da pasta `back_end/lista-compras-api/`.

### Pré-requisitos
- **Node.js** (recomendado: LTS)
- **npm** (ou gerenciador compatível)

---

## Rodar tudo em um único comando (Recomendado)

Na raiz do projeto, execute:

**Windows:**
```bash
.\start-all.bat
```

**Linux/Mac:**
```bash
chmod +x start-all.sh
./start-all.sh
```

Este comando irá:
1. Compilar o frontend para produção
2. Gerar o cliente Prisma
3. Iniciar o backend NestJS
4. Servir o frontend através do backend

Acesse no navegador: **`http://localhost:3000`**

> **Acesso ao Sistema (Credenciais de Teste):**
> - **Usuário:** admin@example.com
> - **Senha:** admin1!

---

## Rodar separadamente (Desenvolvimento)

### Frontend (React + Vite)

- Acesse a pasta do app: `cd front_end/tela-compras`
- Instale as dependências: `npm install`
- Suba o servidor de desenvolvimento: `npm run dev`
- Acesse no navegador: `http://localhost:5173`

### Backend (NestJS API)

1. Acesse a pasta do backend:
   ```bash
   cd back_end/lista-compras-api
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Gere o cliente Prisma (ORM):
   ```bash
   npx prisma generate
   ```

4. Suba o servidor em modo de desenvolvimento:
   ```bash
   npm run start:dev
   ```

   A API estará disponível em `http://localhost:3000`

### Endpoints Principais

- `POST /usuario` - Criar novo usuário (público)
- `GET /usuario` - Listar usuários (requer perfil ADMIN)
- `GET /usuario/:id` - Buscar usuário por ID (requer perfil ADMIN)
- `PATCH /usuario/:id` - Atualizar usuário
- `DELETE /usuario/:id` - Deletar usuário (público)

### Estrutura do Backend

- `src/usuario/` - Módulo de usuários
- `src/itens-compra/` - Módulo de itens de compra
- `src/categorias/` - Módulo de categorias
- `src/auth/` - Módulo de autenticação
- `prisma/` - Schema do banco de dados (SQLite)

---
