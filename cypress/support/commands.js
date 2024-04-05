Cypress.Commands.add("cadastrarFundo", (nome, cnpj) => {
  cy.visit("/fundo");

  cy.get(
    'body > app-root > div > app-main > div > div.layout-main > div > app-fundo-filtro > div > p-toolbar > div > div > div > button'
  )
    .should("be.enabled")
    .click();

  cy.get('body > app-root > div > app-main > div > div.layout-main > div > app-fundo > div > p-toolbar > div > div > div > button.p-element.mr-2.p-button.p-component').should("be.disabled");
  cy.get('.p-toolbar-group-left > .my-2 > .mr-2')

  cy.get(
    ":nth-child(1) > app-form-field > :nth-child(1) > .p-float-label > #inputtext"
  ).type(nome);
  cy.get("#cnpj").type(cnpj);

  
});

Cypress.Commands.add("login", () => {
  cy.visit("/");

  cy.get(".card-pf")
    .should("be.visible")
        cy.get("#username").type(Cypress.env("USER"));
        cy.get("#password").type(Cypress.env("PASSWORD"), { log: false });
        cy.get("#kc-login").click();
      
});

Cypress.Commands.add("setData", (childIndex, now) => {
  cy.clock(now);
  cy.get(
    ":nth-child(" +
      childIndex +
      ") > .p-float-label > .p-element > .p-calendar > #calendar"
  )
    .should("be.enabled")
    .click({ force: true });
  cy.get(".p-datepicker td")
    .contains(new Date(now).getDate())
    .click({ force: true });

  cy.get(".p-datepicker-today > .p-ripple").eq(0).click({ force: true }).blur();
});

Cypress.Commands.add("setInput", (childIndex, text) => {
  cy.get(
    ":nth-child(" +
      childIndex +
      ") > app-form-field > :nth-child(1) > .p-float-label > #inputtext"
  )
    .type(text, { force: true })
    .should("have.value", text)
    .blur();
});

Cypress.Commands.add("setDropdown", (childIndex, selectedIndex) => {
  cy.get(
    ":nth-child(" + childIndex + ") > .p-float-label > .p-element > .p-dropdown"
  ).click();
  cy.get(".p-dropdown-item").eq(selectedIndex).click();
});

Cypress.Commands.add("getTabpanel", (childIndex) => {
  cy.get("#p-tabpanel-" + childIndex + "-label").click();
});
