/// <reference types="cypress" />

describe('Teste Enjoei', () => {

  it('Realizando Login', () => {
    cy.visit('http://www.saucedemo.com')
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('input[type="submit"]').click();
  })

  it('Realizando Login com username incorreto', () => {
    cy.visit('http://www.saucedemo.com')
    cy.get('[data-test="username"]').type('standard');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('input[type="submit"]').click();
  })

  it('Realizando Login com password incorreto', () => {
    cy.visit('http://www.saucedemo.com')
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret');
    cy.get('input[type="submit"]').click();
  })

  it.only('Realizando a compra de um produto', () => {
    cy.visit('http://www.saucedemo.com')
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('input[type="submit"]').click();
    cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
    cy.get('.shopping_cart_link').click();
    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="firstName"]').type('Jessica');
    cy.get('[data-test="lastName"]').type('Fernandes');
    cy.get('[data-test="postalCode"]').type('07210250');
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="finish"]').click();
    cy.get('[data-test="back-to-products"]').click();
    cy.get('#react-burger-menu-btn').click();
    cy.get('#logout_sidebar_link').click();
    
  })
})

