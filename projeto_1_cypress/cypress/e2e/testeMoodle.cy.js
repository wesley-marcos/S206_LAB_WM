describe('Testes no site do Inatel - Moodle', () => {

  it('Caso de teste positivo: Login válido', () => {

    loginPadrao()
    cy.get('.userpicture').click()
    cy.get(':nth-child(11) > .dropdown-item').click()
    //cy.get('.deniedCookie').click()

  })


  it('Caso de teste negativo: Login com senha incorreta', () => {

    cy.visit('https://moodle.inatel.br/login/index.php')

    //cy.get('.deniedCookie').click()
    cy.get('#username').type('wesley.marcos@gec.inatel.br')
    cy.get('#password').type('12345678')
    cy.get('#loginbtn').click()
    //cy.get('.deniedCookie').click()
    cy.get('.alert').should('have.text', 'Nome de usuário ou senha errados. Por favor tente outra vez.')

  })

  it('Caso de teste positivo: Login válido e busca dos cursos', () => {

    loginPadrao()
    cy.get('.rui-sidebar-nav-text > :nth-child(1)').click()
    cy.get('#itemDashboard > .rui-sidebar-nav-text').click()

  })


  it('Caso de teste positivo: Login válido e ordenação por matéria', () => {

    loginPadrao()
    cy.get('#sortingdropdown > .d-sm-inline-block').click()
    cy.get(':nth-child(1) > .dropdown-item').click()
  })


  it('Caso de teste positivo: Verificar o botão de "Esqueceu o seu usuário ou senha"', () => {

    cy.visit('https://moodle.inatel.br/login/index.php')
    //cy.get('.deniedCookie').click()
    cy.get('.rui-login-forgot-btn').click()
    //cy.get('.deniedCookie').click()
    cy.get('#id_email').type('wesley.marcos@gec.inatel.br')
    cy.get('#id_submitbuttonemail').click()
    //cy.get('.deniedCookie').click()
    cy.get('#notice > :nth-child(1)').should('have.text',
      'Se o nome de usuário ou o email estiverem corretos, um email deve ter sido enviado a você.')

  })


  it('Caso de teste negativo: Verificar o botão de "Esqueceu o seu usuário ou senha"', () => {

    cy.visit('https://moodle.inatel.br/login/index.php')
    //cy.get('.deniedCookie').click()
    cy.get('.rui-login-forgot-btn').click()
    //cy.get('.deniedCookie').click()
    cy.get('#id_email').type('pedrobalestra')
    cy.get('#id_submitbuttonemail').click()
    //cy.get('.deniedCookie').click()
    cy.get('#id_error_email').should('have.text', '\n            \n                \n                \n                \n            \n            Endereço de email inválido\n        ')
  })
})

function loginPadrao() {

  let user = 'wesley.marcos@gec.inatel.br'
  let pw = '#TesteCypress2k23'
  let logInfo = [user, pw]

  cy.visit('https://moodle.inatel.br/login/index.php')
  //cy.get('.deniedCookie').click()
  cy.get('#username').type(user)
  cy.get('#password').type(pw)
  cy.get('#loginbtn').click()

  return logInfo
}