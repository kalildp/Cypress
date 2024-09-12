

describe('pagina de login', () => {
  it('visitar a pagina', () => {
    cy.visit('http://127.0.0.1:5500/index.html')
  })
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/index.html')
  })


it('Senha errada', () =>{
  cy.get('#username').type('keliven');
  cy.get('#password').type('1234');
  cy.get('button').click();
  cy.get('#mensagemErro').should('be.invisible');

})

it('senha correta', () => {
  cy.get('#username').type('admin');
  cy.get('#password').type('admin');
  cy.get('button').click();
  cy.get('#mensagemErro').should('be.visible');
  cy.on('window.alert', (text) =>{
    expect(text).to.contains('login efetuado com sucesso!')
  })
})
})