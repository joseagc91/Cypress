import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";


Given('I am logged in', () => {
  cy.visit(Cypress.env('url'));
  cy.login("standard_user", "secret_sauce");
});

When('I add a product to the cart', () => {
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
});

When('I add multiple products to the cart', () => {
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
});

Then('the product should be visible in the cart', () => {
  cy.get('.shopping_cart_badge').should('have.text', '1');
});

Then('the number of items in the cart should reflect the total', () => {
  cy.get('.shopping_cart_badge').should('have.text', '2');
});
