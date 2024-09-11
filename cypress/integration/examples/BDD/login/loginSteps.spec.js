import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../../../support/pageObjects/LoginPage";

const loginPage = new LoginPage();

Given('I navigate to the SauceDemo login page', () => {
  cy.visit(Cypress.env('url'));
});

When('I enter a valid username and password', () => {
  loginPage.getUsernameInput().type('standard_user');
  loginPage.getPasswordInput().type('secret_sauce');
});

When('I enter an invalid username and password', () => {
  loginPage.getUsernameInput().type('invalid_user');
  loginPage.getPasswordInput().type('wrong_password');
});

When('I click the login button', () => {
  loginPage.getLoginBtn().click();
});

Then('I should be redirected to the homepage', () => {
  cy.url().should('include', '/inventory.html');
});

Then('I should see an error message', () => {
  loginPage.getErrorMsg().should('contain', 'Username and password do not match');
});
