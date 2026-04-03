# 🛒 Sistema de Controle de Necessidades e Compras (Cuidado ao Idoso)

Projeto desenvolvido para a disciplina de Teste de Software. O sistema consiste em uma aplicação básica (CRUD) para que familiares gerenciem listas de compras de mercado e farmácia para um ente querido idoso, servindo como base para a aplicação de testes automatizados e manuais.

## Execução do projeto (como rodar)

Este repositório possui uma aplicação **frontend** em React + Vite dentro da pasta `front_end_usuario/tela-compras/`.

### Pré-requisitos
- **Node.js** (recomendado: LTS)
- **npm** (ou gerenciador compatível)

### Rodando em desenvolvimento
- Acesse a pasta do app: `cd front_end_usuario/tela-compras`
- Instale as dependências: `npm install`
- Suba o servidor de desenvolvimento: `npm run dev`
- Acesse no navegador: `http://localhost:5173`

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
* O nome do item, o nome do idoso e o nome do familiar responsável são obrigatórios ao cadastrar um item.
* O sistema deve validar se e-mail e senha foram preenchidos no login.
* O acesso é bloqueado para credenciais inválidas.
* O cadastro de novo usuário exige e-mail único, nome completo e senha com no mínimo 6 caracteres.

---

## 3. Histórias de Usuário (HdU)

### HdU 01 - Login de Familiar
* **Quem:** Familiar Colaborador
* **O que:** Quero entrar no sistema com e-mail e senha.
* **Por que:** Para restringir o acesso e evitar que pessoas não autorizadas alterem a lista.
* **Critérios de Aceitação:**
  * O sistema deve bloquear o acesso quando os campos estiverem vazios.
  * O sistema deve bloquear o acesso com credenciais inválidas, exibindo mensagem de erro.
  * O sistema deve redirecionar para a tela principal após login bem-sucedido.

### HdU 02 - Cadastro de Novo Item
* **Quem:** Familiar Colaborador
* **O que:** Quero adicionar um novo item de farmácia ou mercado na lista.
* **Por que:** Para que os outros familiares saibam o que está faltando na casa do idoso.
* **Critérios de Aceitação:**
  * Os campos nome do item, nome do idoso e nome do familiar responsável são obrigatórios.
  * Cada campo obrigatório deve exibir sua própria mensagem de erro abaixo do campo ao tentar salvar em branco.
  * O item só deve ser salvo quando todos os campos obrigatórios estiverem preenchidos.

### HdU 03 - Atualização de Status
* **Quem:** Familiar Responsável pelas Compras
* **O que:** Quero marcar um item como "Comprado" ou "Arquivado".
* **Por que:** Para evitar que outro familiar gaste dinheiro comprando o mesmo produto em duplicidade.
* **Critérios de Aceitação:**
  * Itens marcados como "Comprado" devem ser movidos para a aba de histórico.
  * Itens marcados como "Arquivado" devem ser removidos da visualização ativa.

### HdU 04 - Cadastro de Novo Usuário
* **Quem:** Familiar ainda não cadastrado no sistema
* **O que:** Quero criar uma conta informando meu nome completo, e-mail e senha.
* **Por que:** Para que eu possa acessar o sistema de forma individual e registrar quem realizou cada compra, garantindo rastreabilidade das ações.
* **Critérios de Aceitação:**
  * O sistema deve exigir nome completo, e-mail válido e senha com no mínimo 6 caracteres.
  * O sistema deve impedir o cadastro com um e-mail já existente, exibindo mensagem de erro.
  * Após o cadastro com sucesso, o usuário deve ser redirecionado para a tela de login.
  * Todos os campos devem ser validados antes do envio, exibindo mensagens de erro individuais por campo.

---

## 4. Casos de Teste (BDD / Gherkin)

> Convenção de numeração: **CT-[HdU]-[sequencial]**
> Exemplo: CT-01-01 = Caso de Teste 1 da HdU 01.

---

### HdU 01 — Login de Familiar

#### CT-01-01: Login com campos vazios
* **Dado que** estou na tela de login.
* **Quando** clico em "Entrar" sem preencher nenhum campo.
* **Então** o sistema deve bloquear o acesso e exibir a mensagem de erro.

#### CT-01-02: Login com credenciais inválidas
* **Dado que** estou na tela de login.
* **Quando** informo e-mail ou senha incorretos e clico em "Entrar".
* **Então** o sistema deve exibir "Acesso Negado: Familiar não identificado ou senha incorreta!" e não redirecionar.

#### CT-01-03: Login com sucesso
* **Dado que** estou na tela de login.
* **Quando** informo o e-mail `admin@familia.com` e a senha `123456` e clico em "Entrar".
* **Então** o sistema deve me redirecionar para a tela de Controle de Suprimentos.

---

### HdU 02 — Cadastro de Novo Item

#### CT-02-01: Salvar item sem preencher nenhum campo
* **Dado que** estou na tela de cadastro de necessidades.
* **Quando** clico em "Salvar Item" sem preencher nenhum campo.
* **Então** o sistema deve exibir mensagem de erro no campo "Nome do item" e não salvar o registro.

#### CT-02-02: Salvar item sem informar o nome do idoso
* **Dado que** estou na tela de cadastro de necessidades.
* **Quando** preencho apenas o nome do item e clico em "Salvar Item".
* **Então** o sistema deve exibir o alerta "O nome do idoso é obrigatório" abaixo do campo correspondente e não salvar o registro.

#### CT-02-03: Salvar item sem informar o familiar responsável
* **Dado que** estou na tela de cadastro de necessidades.
* **Quando** preencho o nome do item e o nome do idoso, mas deixo o familiar responsável em branco, e clico em "Salvar Item".
* **Então** o sistema deve exibir o alerta "O nome do familiar responsável é obrigatório" abaixo do campo correspondente e não salvar o registro.

#### CT-02-04: Cadastro de item com sucesso
* **Dado que** estou na tela de cadastro de necessidades.
* **Quando** preencho todos os campos obrigatórios e clico em "Salvar Item".
* **Então** o item deve aparecer na aba "Itens Pendentes" e o formulário deve ser limpo.

---

### HdU 03 — Atualização de Status

#### CT-03-01: Marcar item como comprado
* **Dado que** existe um item com status "Pendente" na lista.
* **Quando** clico no botão "✓ Comprado" do item.
* **Então** o item deve ser movido para a aba "Histórico de Comprados".

#### CT-03-02: Arquivar item comprado
* **Dado que** existe um item com status "Comprado" no histórico.
* **Quando** clico no botão "📦 Arquivar" do item.
* **Então** o item deve ser removido da visualização ativa.

---

### HdU 04 — Cadastro de Novo Usuário

#### CT-04-01: Cadastro com campos obrigatórios vazios
* **Dado que** estou na tela de cadastro de usuário.
* **Quando** clico em "Criar Conta" sem preencher nenhum campo.
* **Então** o sistema deve exibir mensagens de erro individuais abaixo de cada campo obrigatório.

#### CT-04-02: Cadastro com e-mail já existente
* **Dado que** estou na tela de cadastro de usuário.
* **Quando** informo o e-mail `admin@familia.com` que já está cadastrado e clico em "Criar Conta".
* **Então** o sistema deve exibir a mensagem "E-mail já cadastrado" e não criar um novo usuário.

#### CT-04-03: Cadastro com sucesso
* **Dado que** estou na tela de cadastro de usuário.
* **Quando** preencho nome completo, e-mail válido e senha com no mínimo 6 caracteres e clico em "Criar Conta".
* **Então** o sistema deve criar a conta e redirecionar para a tela de login com mensagem de sucesso.

---

## 5. Automação de Testes

Os cenários acima servem de base para a automação utilizando **Selenium** com **Python**, validando o fluxo de ponta a ponta (E2E) desde o login até a manipulação da lista. Sempre que for subir uma nova alteração no código, os testes automatizados serão executados para garantir que as funcionalidades antigas continuam funcionando (teste de regressão).

---

## 6. Testes automatizados (BDD / Gherkin + Selenium)

Os testes E2E foram implementados com:

- `behave` (BDD) para executar os arquivos `.feature` (Gherkin)
- `selenium` para automatizar o navegador

Observação: como os cenários estão em português, cada arquivo `.feature` possui o cabeçalho:

- `# language: pt`

### Estrutura

- `tests/requirements.txt`
- `tests/features/login.feature`
- `tests/features/itens.feature`
- `tests/features/environment.py`
- `tests/features/steps/ui_steps.py`

### Como rodar (linha por linha)

#### 1) Subir o frontend (terminal 1)

1. Entrar na pasta do frontend:
   - `cd front_end_usuario/tela-compras`
2. Instalar dependências:
   - `npm install`
3. Subir o Vite:
   - `npm run dev`

Deixe esse terminal rodando.

#### 2) Instalar dependências de teste (terminal 2)

Na **raiz** do repositório (pasta `controle-compras-idoso`):

- `pip install -r tests/requirements.txt`

#### 3) Executar os testes

Na **raiz** do repositório:

- Rodar tudo:
  - `behave tests/features`
- Rodar só login:
  - `behave tests/features/login.feature`
- Rodar só itens:
  - `behave tests/features/itens.feature`
