/// <reference types="cypress" />
/// <reference path="C:\developer\projetos\Cy - SIGAI\cypress\support\commands.d.ts" />

import loginPage from "../../support/pages/login";
import pessoasPage from "../../support/pages/pessoas";
const elem = require('../../support/pages/pessoas/elements').ELEMENTS;

describe('Cadastro de pessoa', () => {
  beforeEach(() => {

    loginPage.realizarLogin(); 
    pessoasPage.acessarPage();
    pessoasPage.verificarTitulo();
  });

  it('Cadastro bem sucedido apenas com campos obrigatórios', () => {

    pessoasPage.clicarNoBotaoNovo();
    pessoasPage.preencherDadosGerais();
    pessoasPage.salvarCadastro();
    pessoasPage.confirmacaoCadastroComSucesso();



  });

  it.only('Cadastro bem sucedido de prestadores', () => {
    // cy.get('[icon="pi pi pi-pencil"]').eq(0).should('be.visible').click();
    pessoasPage.clicarNoBotaoEditarPessoa()
    // cy.get('[icon="pi pi pi-plus"]').eq(0).should('be.enabled').click();
    pessoasPage.acessarCadastroPrestadores()
    pessoasPage.preencherPrestador()

    cy.contains(
      '#pr_id_11-label',
      'Representantes da Pessoa (Prestador)'
    ).should('be.visible');

    // cy.get('[formcontrolname="nome"]').eq(1).type('Jessica', { force: true });
    // cy.get('[formcontrolname="email"]')
    //   .eq(1)
    //   .type('jessica@gmail.com', { force: true });
    // cy.get('[formcontrolname="contato"]')
    //   .find('[type="text"]')
    //   .type('11999946374', { force: true });
    // cy.get('[formcontrolname="cpf"]')
    //   .find('[type="text"]')
    //   .type('423.190.370-04', { force: true });

    // cy.get('p-inputswitch').find('[type="checkbox"]').check({ force: true });
    
    cy.get(elem.checkSwitch_responsavel)
      .find('[type="checkbox"]')
      .should('have.attr', 'aria-checked', 'true');

    // cy.get('button:nth-child(2)').contains('span', 'Salvar').click();

    cy.get('p-table').contains('td', 'Jessica').should('be.visible');

    cy.get('.p-button-success').click();
    cy.contains('div', 'Cadastrado efetuado Sucesso!').should('be.visible');
  });

  it('Edição de pessoa', () => {
    cy.get('.card')
      .find('[icon="pi pi pi-pencil"]')
      .eq(0)
      .should('be.visible')
      .click();
    cy.get(
      'button.p-element.p-button-success.mr-2.p-button.p-component'
    ).click();
    cy.contains('div', 'Registro atualizado com Sucesso').should('be.visible');
  });

  it('Exclusão de pessoa', () => {
    cy.get(
      'button.p-element.p-button-danger.mx-2.p-button.p-component.p-button-icon-only'
    )
      .eq(0)
      .click();

    cy.get('.p-dialog-title').contains('Confirmação').should('be.visible');
    cy.contains('span', 'Deletar').closest('button').click();

    //alterar msg pra sucesso
    cy.contains('.p-toast-message-content', 'Erro ao realizar operação');
  });

  it('Adicionar prestador', () => {
    cy.get('.card')
      .find('[icon="pi pi pi-pencil"]')
      .eq(0)
      .should('be.visible')
      .click();
    cy.get('button:nth-child(1)').contains('span', 'Adicionar').click();

    cy.get(
      '#p-tabpanel-0 > app-dados-gerais-pessoa > div > p-dialog > div > div'
    )
      .find('input[id="nome"]')
      .type('Laura 0');
    cy.get(
      '#p-tabpanel-0 > app-dados-gerais-pessoa > div > p-dialog > div > div'
    )
      .find('input[id="cpf"]')
      .type('548.956.540-36');
    cy.get('#contato > .p-inputtext').type('11957364866');
    cy.get(':nth-child(4) > .p-float-label > #email').type('laura@gmail.com');
    cy.get('.p-inputswitch-slider').click();
    cy.get('.p-inputswitch-slider').should(
      'have.css',
      'background-color',
      'rgb(27, 116, 197)'
    );

    cy.get('.p-dialog-footer > [label="Salvar"]').click();

    cy.get('tbody').find('tr').should('have.length', 3);
    cy.get('.p-button-success').click();
    cy.contains('div', 'Registro atualizado com Sucesso').should('be.visible');
  });

  it('Exclusão de prestador', () => {
    cy.get('.card')
      .find('[icon="pi pi pi-pencil"]')
      .eq(0)
      .should('be.visible')
      .click();
      cy.get('tbody').find('tr').should('have.length', 2);
    cy.get('[icon="pi pi pi-trash"]').click({force:true});
    cy.get('tbody').find('tr').should('have.length', 1);
  });


});
