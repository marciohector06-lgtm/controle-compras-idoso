describe('Testes de Segurança - API', () => {
  it('Deve bloquear o acesso à lista sem estar logado (Token JWT)', () => {
    cy.request({
      method: 'GET',
      url: 'http://localhost:3000/suprimentos', 
      failOnStatusCode: false 
    }).then((response) => {
      expect(response.status).to.eq(401);
    });
  });
});