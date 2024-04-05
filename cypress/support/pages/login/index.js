const elem = require('./elements').ELEMENTS;

class login{



    realizarLogin(){
        cy.visit("/");

        cy.get(".card-pf")
          .should("be.visible")
        cy.get(elem.username).type(Cypress.env("USER"));
        cy.get(elem.password).type(Cypress.env("PASSWORD"), { log: false });
        cy.get(elem.loginButton).click();
        
    
    }
}
export default new login();