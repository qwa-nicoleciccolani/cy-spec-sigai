/// <reference types="cypress" />
/// <reference path="C:\developer\projetos\Cy - SIGAI\cypress\support\commands.d.ts" />




describe('Cadastro', () => {

    beforeEach(() => {
        cy.login()
    });


    it('Cadastro bem sucedido apenas com campos obrigatórios', () => {
        cy.fixture('cadastros').its('fundos').then((fundosLista) => { 
            console.log('Conteúdo da fixture:', fundosLista);
            fundosLista.forEach(fundo => { 
                cy.CadastrarFundo(fundo.nome, fundo.cnpj); 
                cy.get('.p-button-success').click();
                cy.get('body > app-root > div > p-toast > div').should('be.visible')

            });
        });
    });
    
    it.only('Cadastro com cnpj inválido', () => {
        cy.fixture('cadastros').its('cnpjInvalido').then((fundosLista) => { 
            console.log('Conteúdo da fixture:', fundosLista);
            fundosLista.forEach(fundo => { 
                cy.CadastrarFundo(fundo.nome, fundo.cnpj); 
                cy.get('.p-button-success').should('be.disabled');
                cy.get('#cnpj').should('have.css', 'border-color', 'rgb(244, 67, 54)')
            });
        });
    });

    it('Cadastrar bem sucedido preenchendo todos os campos', () => {

    });

    it('Cadastro com campos obrigatorios em branco', () => {

    });

    it('Cadastro duplicado', () => {

    });

    it('Cancelar cadastro', () => {

    });

});
