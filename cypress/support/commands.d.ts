// cypress.d.ts

declare namespace Cypress {
    interface Chainable {
      cadastrarFundo(nome: string, cnpj: string): Chainable<void>;
      login(): Chainable<void>;
      setData(childIndex: number, now: number): Chainable<void>;
      setInput(childIndex: number, text: string): Chainable<void>;
      setDropdown(childIndex: number, selectedIndex: number): Chainable<void>;
      getTabpanel(childIndex): Chainable<void>;
    }
  }
  