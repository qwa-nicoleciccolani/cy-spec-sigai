/// <reference types="cypress" />
/// <reference path="C:\developer\projetos\Cy - SIGAI\cypress\support\commands.d.ts" />

describe('Cadastro de Contrato de prestação de serviços', () => {
    beforeEach(() => {
      cy.login();
      cy.visit('/contrato-prestacao-servico');
      cy.get('.route-bar-breadcrumb > :nth-child(3)').should('have.text','Contrato de Prestação de Serviço');
    });
    it('Cadastro bem sucedido apenas com campos obrigatórios', () => {});
    it('Cadastro dados gerais', () => {});
    it('Edição de contratação', () => {});
    it('Exclusão de contratação', () => {});

  });
  