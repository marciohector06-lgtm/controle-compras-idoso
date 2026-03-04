🛒 Sistema de Controle de Necessidades e Compras (Cuidado ao Idoso)
Projeto desenvolvido para a disciplina de Teste de Software. O sistema consiste em uma aplicação básica para que familiares gerenciem listas de compras de mercado e farmácia, servindo como base para a aplicação de testes automatizados e manuais.

🚀 Execução do projeto
Pré-requisitos
Node.js (LTS)

npm

Rodando o Sistema
Acesse a pasta: cd tela-compras

Instale as dependências: npm install

Inicie o servidor: npm run dev

Acesso ao Sistema (Credenciais de Teste):

Usuário: admin@familia.com

Senha: 123456

1. Concepção e Escopo Atual
Objetivo: Centralizar itens faltantes (remédios e mantimentos) para evitar compras duplicadas.

Fase Atual: MVP (Produto Mínimo Viável) focado em Login e Gerenciamento de Itens.

Escopo Reduzido: A funcionalidade de "Agenda de Consultas" foi movida para o backlog da próxima fase para focar na estabilidade dos testes de CRUD.

2. Regras de Negócio (R&N)
Premissas:

O acesso é restrito a familiares através de login.

O sistema utiliza armazenamento local (localStorage) para persistência de dados no navegador.

Restrições:

R&N 01: Não é permitido cadastrar um item sem nome.

R&N 02: O sistema deve validar se e-mail e senha foram preenchidos no login.

R&N 03: Acesso negado para credenciais que não constam na base (nesta fase, validado via usuário mestre).

3. Histórias de Usuário (HdU)
HdU 01 - Login de Familiar
O que: Quero entrar no sistema com meu e-mail e senha.

Valor: Garantir que apenas membros da família visualizem as necessidades do idoso.

Critério de Aceite: Exibir alerta de erro se os campos estiverem vazios ou incorretos.

HdU 02 - Cadastro de Necessidade (Farmácia/Mercado)
O que: Quero adicionar um item informando nome, categoria (Medicamento, Higiene, Alimentação) e urgência.

Valor: Alertar outros familiares sobre o que é prioridade (Ex: Remédio que acabou).

Critério de Aceite: O item deve aparecer na lista de pendências imediatamente após o cadastro.

HdU 03 - Controle de Status e Arquivamento
O que: Quero marcar um item como "Comprado" ou "Arquivado".

Valor: Limpar a visão da lista para que todos saibam o que ainda falta comprar.

4. Cenários de Teste (Gherkin / BDD)
Teste de Login (HdU 01)
Dado que estou na tela de login.

Quando eu informo o e-mail admin@familia.com e a senha 123456.

Então o sistema deve me direcionar para a tela de Controle de Suprimentos.

Teste de Validação de Campo (HdU 02)
Dado que estou no formulário de cadastro de itens.

Quando eu tento salvar sem preencher o nome do item.

Então o sistema deve exibir a mensagem: "O nome do item é obrigatório".

Teste de Persistência
Dado que eu cadastrei o item "Losartana 50mg".

Quando eu atualizo a página (F5).

Então o item deve continuar aparecendo na lista.

5. Automação de Testes
Os cenários acima servem de base para a automação utilizando Selenium + Python, validando o fluxo de ponta a ponta (E2E) desde o login até a manipulação da lista.
