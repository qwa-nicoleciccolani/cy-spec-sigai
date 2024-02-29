// cypress.d.ts

declare namespace Cypress {
    interface Chainable {
      CadastrarFundo(nome: string, cnpj: string): Chainable<void>;
      login(): Chainable<void>;
      
    }
  }
  