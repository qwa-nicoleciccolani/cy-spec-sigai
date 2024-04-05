/// <reference types="cypress" />

describe('Página inicial', () => {

    beforeEach(() => {
        cy.visit('https://automationpratice.com.br/cart')
    })

    it('Limpar carrinho', () => {
 
        cy.get('#cart_area_one > div > div > div.col-lg-12.col-md-12.col-sm-12.col-12 > div > div.table_page.table-responsive').find('td').should('be.visible')
        
        cy.get('#root > header > div > div > div > div > div > ul > li:nth-child(2) > a > span').should('have.text', 3)
        
        cy.get('#cart_area_one > div > div > div.col-lg-12.col-md-12.col-sm-12.col-12 > div > div.cart_submit > button').click()

        cy.get('#empty_cart_area > .container > .row').contains('YOUR CART IS EMPTY').should('be.visible')

        cy.get('#root > header > div > div > div > div > div > ul > li:nth-child(2) > a > span').should('have.text', 0)

    })


   


});
