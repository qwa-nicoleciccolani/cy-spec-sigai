
Cypress.Commands.add('CadastrarFundo', (nome, cnpj) => {
    cy.visit('http://192.168.1.131:8085/#/fundo'); 

    cy.get('body > app-root > div > app-main > div > div.layout-main > div > app-fundo-filtro > div > div > div > p-toolbar > div > div > div > button')
        .click();

    cy.get(':nth-child(1) > app-form-field > :nth-child(1) > .p-float-label > #inputtext').type(nome);
    cy.get('#cnpj').type(cnpj);


});
  
  Cypress.Commands.add('login', () => {
    cy.visit('http://192.168.1.131:8085/#/');

    cy.get('.card-pf').should('be.visible').then(($card) => {
        if ($card.length > 0) {

            cy.get('#username').type('admin');
            cy.get('#password').type('admin');
            cy.get('#kc-login').click();
        }
    });

  });
  