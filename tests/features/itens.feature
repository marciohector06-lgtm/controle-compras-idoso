 # language: pt
Funcionalidade: Cadastro de itens
  Como um familiar colaborador
  Eu quero cadastrar itens de necessidade
  Para manter a lista de compras atualizada

  Contexto:
    Dado que eu estou autenticado no sistema

  @smoke @itens
  Cenário: Bloquear cadastro quando o nome do item está vazio
    Quando eu tento salvar um item sem preencher o nome
    Então devo ver a mensagem "O nome do item é obrigatório"

  @itens
  Cenário: Cadastrar item com sucesso
    Quando eu cadastro um item com nome "Losartana 50mg"
    Então devo ver o item "Losartana 50mg" na lista de itens pendentes
