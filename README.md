# 🛒 Sistema de Controle de Necessidades e Compras (Cuidado ao Idoso)

Projeto desenvolvido para a disciplina de Teste de Software. O sistema consiste em uma aplicação básica (CRUD) para que familiares gerenciem listas de compras de mercado e farmácia para um ente querido idoso, servindo como base para a aplicação de testes automatizados e manuais.

## Execução do projeto (como rodar)

Este repositório possui uma aplicação **frontend** em React + Vite dentro da pasta `tela-compras/`.

### Pré-requisitos

 - **Node.js** (recomendado: LTS)
 - **npm** (ou gerenciador compatível)

### Rodando em desenvolvimento

 - Acesse a pasta do app:
   - `cd tela-compras`
 - Instale as dependências:
   - `npm install`
 - Suba o servidor de desenvolvimento:
   - `npm run dev`

### Build/preview

 - Build:
   - `npm run build`
 - Preview do build:
   - `npm run preview`


---

## 1. Concepção

* **Objetivo Geral:** Desenvolver um software básico para auxiliar famílias no controle, registro e divisão de compras de itens de necessidade diária para idosos.
* **Objetivos Específicos:**
    * Centralizar a lista de itens faltantes.
    * Evitar compras duplicadas por diferentes membros da família.
    * Manter um histórico básico do que já foi adquirido.

---

## 2. Regras de Negócio (R&N)

**Premissas:**
* (Ex: O sistema deve ser acessível via navegador web).
* [Espaço para a equipe adicionar mais premissas]

**Restrições:**
* (Ex: O nome de um item não pode ficar em branco ao ser cadastrado).
* (Ex: Um item com status "Comprado" não pode ser excluído do sistema, apenas arquivado).
* [Espaço para a equipe adicionar mais restrições]

---

## 3. Histórias de Usuário (HdU)
*Nota para a equipe: Todas as histórias abaixo devem seguir os critérios **INVEST** (Independente, Negociável, Valiosa, Estimável, Simples e Testável).*

### HdU 01 - Cadastro de Usuário
* **Quem (Persona/Perfil):** Familiar Colaborador
* **O que (Funcionalidade):** Quero criar uma conta informando nome, e-mail e senha.
* **Por que (Valor):** Para poder acessar o sistema com login e restringir o uso a pessoas autorizadas.

**Cenário (Gherkin):**
* **Dado que** estou na tela de cadastro de usuário.
* **Quando** eu tento me cadastrar sem preencher o e-mail.
* **Então** o sistema deve exibir uma mensagem de erro e não deve criar a conta.

### HdU 02 - Login
* **Quem (Persona/Perfil):** Familiar Colaborador
* **O que (Funcionalidade):** Quero entrar no sistema com usuário e senha.
* **Por que (Valor):** Para restringir o acesso e evitar que pessoas não autorizadas alterem a lista.

**Cenário (Gherkin):**
* **Dado que** estou na tela de login.
* **Quando** eu informo um usuário e senha válidos e clico em "Entrar".
* **Então** o sistema deve autenticar o usuário e direcionar para a tela principal.

### HdU 03 - Cadastro de Novo Item
* **Quem (Persona/Perfil):** Familiar Colaborador
* **O que (Funcionalidade):** Quero adicionar um novo item de farmácia ou mercado na lista.
* **Por que (Valor):** Para que os outros familiares saibam o que está faltando na casa do idoso.

**Cenário (Gherkin):**
* **Dado que** estou na tela de cadastro de necessidades.
* **Quando** eu clico no botão "Salvar" sem preencher o nome do produto.
* **Então** o sistema deve exibir a mensagem "O nome do item é obrigatório" e não deve salvar o registro.

### HdU 04 - Atualização de Status
* **Quem (Persona/Perfil):** Familiar Responsável pelas Compras
* **O que (Funcionalidade):** Quero marcar um item como "Comprado".
* **Por que (Valor):** Para evitar que outro familiar gaste dinheiro comprando o mesmo produto em duplicidade.

*(A equipe de documentação deve adicionar mais HdU aqui)*

---

## 4. Requisitos e Critérios de Aceitação (BDD / Gherkin)

Abaixo estão os critérios que definem quando uma História de Usuário (HdU) está pronta e as Regras de Negócio (R&N) foram respeitadas.

### Teste da HdU 01: Cadastro de usuário com campo obrigatório vazio
* **Condição Inicial:** O usuário está na tela de cadastro de usuário.
* **Evento / Estímulo:** O usuário tenta se cadastrar sem preencher o e-mail.
* **Resposta Esperada:** O sistema deve bloquear o cadastro e exibir uma mensagem de erro.

**Cenário (Gherkin):**
* **Dado que** estou na tela de cadastro de usuário.
* **Quando** eu tento me cadastrar sem preencher o e-mail.
* **Então** o sistema deve exibir uma mensagem de erro e não deve criar a conta.

### Teste da HdU 02: Login
* **Condição Inicial:** O usuário está na tela de login.
* **Evento / Estímulo:** O usuário informa credenciais válidas e clica em "Entrar".
* **Resposta Esperada:** O sistema deve autenticar o usuário e abrir a tela principal.

**Cenário (Gherkin):**
* **Dado que** estou na tela de login.
* **Quando** eu informo um usuário e senha válidos e clico em "Entrar".
* **Então** o sistema deve autenticar o usuário e direcionar para a tela principal.

### Teste da HdU 03: Cadastro de novo item com campo obrigatório vazio
* **Condição Inicial:** O usuário está na tela de adicionar item.
* **Evento / Estímulo:** O usuário deixa o campo "Nome do Item" em branco e clica em "Salvar".
* **Resposta Esperada:** O sistema deve bloquear o cadastro e exibir uma mensagem de erro.

**Cenário (Gherkin):**
* **Dado que** estou na tela de cadastro de necessidades.
* **Quando** eu clico no botão "Salvar" sem preencher o nome do produto.
* **Então** o sistema deve exibir a mensagem "O nome do item é obrigatório" e não deve salvar o registro.

### Teste da HdU 04: Mudança de Status
* **Condição Inicial:** O usuário visualiza a lista com um item "Fralda G" com status "Pendente".
* **Evento / Estímulo:** O usuário clica no botão "Marcar como Comprado".
* **Resposta Esperada:** O item deve mudar visualmente na tela e o status deve ser atualizado no sistema.

**Cenário (Gherkin):**
* **Dado que** o item "Fralda G" está com o status "Pendente".
* **Quando** eu clico no botão "Comprado".
* **Então** o sistema atualiza o status do item e o remove da lista de pendências visíveis.

*(A equipe de testes deve mapear os testes das outras HdU aqui)*

---

## 5. Testes automatizados (BDD / Gherkin + Selenium)

Os cenários BDD/Gherkin serão automatizados com **Selenium** usando **Python**.

Sempre que for subir uma nova alteração no código, os testes automatizados serão executados para garantir que as funcionalidades antigas continuam funcionando (teste de regressão).