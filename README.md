# 🛒 Sistema de Controle de Necessidades e Compras (Cuidado ao Idoso)

Projeto desenvolvido para a disciplina de Teste de Software. O sistema consiste em uma aplicação básica (CRUD) para que familiares gerenciem listas de compras de mercado e farmácia para um ente querido idoso, servindo como base para a aplicação de testes automatizados e manuais.

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

### HdU 01 - Cadastro de Novo Item
* **Quem (Persona/Perfil):** Familiar Colaborador
* **O que (Funcionalidade):** Quero adicionar um novo item de farmácia ou mercado na lista.
* **Por que (Valor):** Para que os outros familiares saibam o que está faltando na casa do idoso.

### HdU 02 - Atualização de Status
* **Quem (Persona/Perfil):** Familiar Responsável pelas Compras
* **O que (Funcionalidade):** Quero marcar um item como "Comprado".
* **Por que (Valor):** Para evitar que outro familiar gaste dinheiro comprando o mesmo produto em duplicidade.

*(A equipe de documentação deve adicionar mais HdU aqui)*

---

## 4. Requisitos e Critérios de Aceitação (BDD / Gherkin)

Abaixo estão os critérios que definem quando uma História de Usuário (HdU) está pronta e as Regras de Negócio (R&N) foram respeitadas.

### Teste da HdU 01: Validação de campo vazio
* **Condição Inicial:** O usuário está na tela de adicionar item.
* **Evento / Estímulo:** O usuário deixa o campo "Nome do Item" em branco e clica em "Salvar".
* **Resposta Esperada:** O sistema deve bloquear o cadastro e exibir uma mensagem de erro.

**Cenário (Gherkin):**
* **Dado que** estou na tela de cadastro de necessidades.
* **Quando** eu clico no botão "Salvar" sem preencher o nome do produto.
* **Então** o sistema deve exibir a mensagem "O nome do item é obrigatório" e não deve salvar o registro.

### Teste da HdU 02: Mudança de Status
* **Condição Inicial:** O usuário visualiza a lista com um item "Fralda G" com status "Pendente".
* **Evento / Estímulo:** O usuário clica no botão "Marcar como Comprado".
* **Resposta Esperada:** O item deve mudar visualmente na tela e o status deve ser atualizado no sistema.

**Cenário (Gherkin):**
* **Dado que** o item "Fralda G" está com o status "Pendente".
* **Quando** eu clico no botão "Comprado".
* **Então** o sistema atualiza o status do item e o remove da lista de pendências visíveis.

*(A equipe de testes deve mapear os testes das outras HdU aqui)*