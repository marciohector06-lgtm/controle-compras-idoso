# 🛒 Sistema de Controle de Necessidades e Compras (Cuidado ao Idoso)

Projeto desenvolvido para a disciplina de Teste de Software. O sistema consiste em uma aplicação básica (CRUD) para que familiares gerenciem listas de compras de mercado e farmácia para um ente querido idoso, servindo como base para a aplicação de testes automatizados e manuais.

## Execução do projeto (como rodar)

Este repositório possui uma aplicação **frontend** em React + Vite dentro da pasta `tela-compras/`.

### Pré-requisitos
- **Node.js** (recomendado: LTS)
- **npm** (ou gerenciador compatível)

### Rodando em desenvolvimento
- Acesse a pasta do app: `cd tela-compras`
- Instale as dependências: `npm install`
- Suba o servidor de desenvolvimento: `npm run dev`

> **Acesso ao Sistema (Credenciais de Teste):**
> - **Usuário:** admin@familia.com
> - **Senha:** 123456

---

## 1. Concepção e Escopo Atual

* **Objetivo Geral:** Desenvolver um software básico para auxiliar famílias no controle, registro e divisão de compras de itens de necessidade diária para idosos.
* **Objetivos Específicos:**
    * Centralizar a lista de itens faltantes.
    * Evitar compras duplicadas por diferentes membros da família.
    * Manter um histórico básico do que já foi adquirido.
* **Escopo Reduzido:** Foco no MVP para a disciplina de Teste de Software (Login e CRUD de itens).

---

## 2. Regras de Negócio (R&N)

**Premissas:**
* O acesso é restrito a familiares através de login.
* O sistema utiliza armazenamento local (`localStorage`) para persistência de dados.

**Restrições:**
* O nome de um item não pode ficar em branco ao ser cadastrado.
* O sistema deve validar se e-mail e senha foram preenchidos no login.
* O acesso é bloqueado para credenciais inválidas.

---

## 3. Histórias de Usuário (HdU)

### HdU 01 - Login de Familiar
* **Quem:** Familiar Colaborador
* **O que:** Quero entrar no sistema com usuário e senha.
* **Por que:** Para restringir o acesso e evitar que pessoas não autorizadas alterem a lista.

### HdU 02 - Cadastro de Novo Item
* **Quem:** Familiar Colaborador
* **O que:** Quero adicionar um novo item de farmácia ou mercado na lista.
* **Por que:** Para que os outros familiares saibam o que está faltando na casa do idoso.

### HdU 03 - Atualização de Status
* **Quem:** Familiar Responsável pelas Compras
* **O que:** Quero marcar um item como "Comprado" ou "Arquivado".
* **Por que:** Para evitar que outro familiar gaste dinheiro comprando o mesmo produto em duplicidade.

---

## 4. Requisitos e Critérios de Aceitação (BDD / Gherkin)

### Teste da HdU 01: Validação de Login Vazio
* **Dado que** estou na tela de login.
* **Quando** eu tento clicar em "Entrar" sem preencher os campos.
* **Então** o sistema deve bloquear o acesso e exibir um alerta.

### Teste da HdU 01: Login com Sucesso
* **Dado que** estou na tela de login.
* **Quando** eu informo o e-mail `admin@familia.com` e a senha `123456`.
* **Então** o sistema deve me direcionar para a tela de Controle de Suprimentos.

### Teste da HdU 02: Cadastro de novo item com campo vazio
* **Dado que** estou na tela de cadastro de necessidades.
* **Quando** eu clico no botão "Salvar" sem preencher o nome do produto.
* **Então** o sistema deve exibir um alerta de preenchimento obrigatório e não deve salvar o registro.

---

## 5. Automação de Testes

Os cenários acima servem de base para a automação utilizando **Selenium** com **Python**, validando o fluxo de ponta a ponta (E2E) desde o login até a manipulação da lista. Sempre que for subir uma nova alteração no código, os testes automatizados serão executados para garantir que as funcionalidades antigas continuam funcionando (teste de regressão).
