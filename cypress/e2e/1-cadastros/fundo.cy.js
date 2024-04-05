/// <reference types="cypress" />
/// <reference path="C:\developer\projetos\Cy - SIGAI\cypress\support\commands.d.ts" />


describe('Cadastro de fundo', () => {
  beforeEach(() => {
    cy.login();
  });

  it.only('Cadastro bem sucedido apenas com campos obrigatórios', () => {
    cy.fixture('cadastros')
      .its('fundos')
      .then((fundosLista) => {
        fundosLista.forEach((fundo) => {
          cy.cadastrarFundo(fundo.nome, fundo.cnpj);
          cy.get('.p-button-success').should('be.enabled').click();
          // mensagem de sucesso no cadastro
          cy.get('body > app-root > div > p-toast > div').should('be.visible');
        });
      });
  });

  it('Cadastro com cnpj inválido', () => {
    cy.fixture('cadastros')
      .its('cnpjInvalido')
      .then((fundosLista) => {
        fundosLista.forEach((fundo) => {
          cy.cadastrarFundo(fundo.nome, " ");
          cy.get('.p-button-success').should('be.disabled');
          cy.get('#cnpj').should(
            'have.css',
            'border-color',
            'rgb(244, 67, 54)'
          );
        });
      });
  });

  it('Cadastro bem sucedido preenchendo todos os campos e todas as abas', () => {
    cy.cadastrarFundo('fundo qwa', '67427346000141');
    const now = new Date('2023-06-2').getTime();

    cy.setData(3, now);
    cy.setData(4, now);
    cy.setInput(5, '123456789111');
    cy.setDropdown(6, 0);
    cy.setDropdown(7, 0);
    cy.setDropdown(9, 0);
    cy.setDropdown(10, 0);
    cy.setData(11, now);
    cy.setDropdown(12, 0);
    cy.get('.grid > :nth-child(25)').type('Teste objetivo');

    cy.getTabpanel(1);

    cy.get('.grid > :nth-child(1) > .p-float-label > #inputtext')
      .type('BIDI4')
      .should('have.value', 'BIDI4');
    cy.contains('span', 'Adicionar').should('exist').click();
    cy.setData(1, now);
    cy.contains('label', 'Valor de Emissão')
      .parent()
      .find('input')
      .type('1200', { force: true });

    cy.contains('label', 'Quantidade de Cotas Emitidas')
      .parent()
      .find('input')
      .type('5', { force: true });

    cy.get('.p-dialog-footer > [label="Salvar"]').click({ force: true });

    cy.getTabpanel(3);
    // clicar no botao de adicionar arquivo
    cy.get('#pr_id_22 > .p-datatable-header > .table-header > .p-element > .p-button-label')
      .should('be.visible')
      .click({ force: true });
    // tela de inserção do arquivo aberta
    cy.contains('#pr_id_23-label', 'Adicionar novo arquivo').should(
      'be.visible'
    );

    cy.get('.mt-2 > .field > .p-float-label > .p-inputwrapper > .p-dropdown')
      .should('be.visible')
      .click();

    // dropdown aberto
    cy.get('.p-ripple').should('be.visible');
    // pegar o dropdown/ selecionar checkbox
    // cy.get(
    //   'div.ng-trigger.ng-trigger-overlayAnimation.ng-tns-c49-55.p-dropdown-panel.p-component.ng-star-inserted'
    // )
    //   .should('be.visible')
    //   .then(() => {
    //     cy.get('div.p-dropdown-items-wrapper.ng-tns-c49-55')
    //       .its('length')
    //       .then((count) => {
    //         cy.log(
    //           `A div com a classe específica aparece ${count} vezes no DOM quando está expandida.`
    //         );
    //       });
    //   });

    // cy.get(':nth-child(2) > .field > .p-float-label > #float-input').type('descrição arquivo')
    // cy.get('input[type=file]').selectFile('2.pdf', {force: true})

    // cy.get('.p-button-success').click();
    // cy.get('body > app-root > div > p-toast > div').should('be.visible')
  });

  it('Realizar edição de um fundo existente', () => {
    cy.visit('/fundo');
    const nome_fundo = 'BRCO11';
    cy.get(
      ':nth-child(1) > p-columnfilter.p-element > .p-column-filter > .p-fluid > .p-inputtext'
    )
      .should('be.empty')
      .type(nome_fundo + '{enter}');

    cy.contains(
      '.p-datatable-tbody > .ng-star-inserted > :nth-child(1)',
      nome_fundo
    ).should('exist');

    cy.get('[icon="pi pi pi-pencil"]')
      .its('length')
      .then((count) => {
        console.log(count);
        cy.contains('td', nome_fundo)
          .parent()
          .find('[icon="pi pi pi-pencil"]')
          .click();

        cy.get(
          ':nth-child(1) > app-form-field > :nth-child(1) > .p-float-label > #inputtext'
        ).should('have.value', nome_fundo);
      });

      //editar algo e salvar
  });
});
