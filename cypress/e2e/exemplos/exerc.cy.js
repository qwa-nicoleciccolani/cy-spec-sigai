/// <reference types="cypress" />

describe('Página inicial', () => {

    beforeEach(() => {
        cy.visit('https://automationpratice.com.br/')
    })

    it('Acessar forms de login', () => {
        cy.get('#top_header').should('be.visible')
        cy.get(':nth-child(4) > .offcanvas-toggle > .fa')
            .click()
        cy.get('#menupagesText')
            .click()
        cy.get('#loginPage > a')
            .click()

    })
    it('Curtir algum produto e verificar wishlist', () => {
        cy.get('#electronics_top_product > .container > :nth-child(1) > :nth-child(1) > .left_heading_three > h2')
            .should('be.visible')
        cy.get('#video > div > div:nth-child(1) > div > div.product_item_inner > div.product_button > a:nth-child(2) > i').click({ force: true })
        cy.get('body > div.swal2-container.swal2-center.swal2-backdrop-show > div').should('be.visible')
        cy.get('.swal2-confirm').click()

        cy.get('.mobile-right-side > .header-action-link > :nth-child(2) > .offcanvas-toggle > .fa')
            .click()
        cy.get('.offcanvas-wishlist-wrapper')
            .contains('Movie Projector HD Outdoor')

    })

    it('Curtir dois produtos repetidos', () => {
        cy.get('#electronics_top_product > .container > :nth-child(1) > :nth-child(1) > .left_heading_three > h2')
            .should('be.visible')
        cy.get('#video > div > div:nth-child(1) > div > div.product_item_inner > div.product_button > a:nth-child(2) > i')
            .click({ force: true })
        cy.get('body > div.swal2-container.swal2-center.swal2-backdrop-show > div').should('be.visible')
        cy.get('.swal2-confirm').click()


        cy.get('#video > div > div:nth-child(1) > div > div.product_item_inner > div.product_button > a:nth-child(2) > i')
            .click({ force: true })
        cy.get('body > div.swal2-container.swal2-center.swal2-backdrop-show > div').should('be.visible')
        cy.get('.swal2-popup').should('be.visible')


    })
    it('Subir tela pra cima', () => {
        cy.get('#footer_one')
            .should('be.visible')
        cy.get('#footer_one > div.go-top.active')
            .click()
            .then(() => {
                cy.get('body').then(($body) => {
                    const isTopVisible = $body.find('.top_header_left > p').is(':visible');
                    expect(isTopVisible).to.be.true;
                });
            });


    });





    it('NewsLetter', () => {
        cy.get('.form-control')
            .type('dudu@qazando.com')
        cy.get('#mc_embed_signup > form > div > div > button')
            .click()
        cy.get('body > div.swal2-container.swal2-center.swal2-backdrop-show > div')
            .should('be.visible')
            .contains('Success')


    })

    it('NewsLetter sem email', () => {
        cy.get('.form-control')

        cy.get('#mc_embed_signup > form > div > div > button')
            .click()

        cy.get('.swal2-popup')
            .should('not.exist')

    })



});
