 # language: pt
Funcionalidade: Login
  Como um familiar colaborador
  Eu quero autenticar no sistema
  Para acessar o controle de suprimentos

  Contexto:
    Dado que eu estou na tela de login

  @smoke @login
  Cenário: Login com sucesso
    Quando eu informo o e-mail "admin@familia.com" e a senha "123456"
    E eu clico em "Entrar"
    Então devo ver a tela principal do sistema

  @login
  Cenário: Bloquear login com credenciais inválidas
    Quando eu informo o e-mail "admin@familia.com" e a senha "000000"
    E eu clico em "Entrar"
    Então devo ver a mensagem de erro de login "Acesso Negado: Familiar não identificado ou senha incorreta!"

  @login
  Cenário: Bloquear login com campos vazios
    Quando eu clico em "Entrar"
    Então devo ver a mensagem de erro de login "Ei, preencha todos os campos antes de entrar!"
