// ***********************************************
import LoginPage from '../support/pageObjects/LoginPage';

const loginPage = new LoginPage()
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
Cypress.Commands.add('login', (email, password) => {
    loginPage.getEmailInput().type(email)
    loginPage.getPasswordInput().type(password);
    loginPage.getLoginBtn().click();
  });


  Cypress.Commands.add('apiLogin', () => {
    cy.request({
      method: 'POST',
      url: 'https://todoist.com/API/v9.1/sync',
      body: {
        email: Cypress.env('email'),
        password: Cypress.env('password'),
        token: Cypress.env('apiToken')
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      const { token } = response.body;
      cy.setCookie('token', token);
      cy.visit('/app/today');
    });
  });

  Cypress.Commands.add("LoginAPI",()=> {
  cy.request({
    method: "GET",
    url: "https://todoist.com/oauth/authorize",
    qs:{
        client_id: "277df55c90a049fab3ed10e6650373f3",
        scope: "data:read_write",
        state: "12345678"
    }}).
    then(function(response)
    {
        code = response.body['code'];
    }),
    
    cy.request({
        method: "POST",
        url: "https://todoist.com/oauth/access_token",
        body:{
            client_id: `${Cypress.env('auth0_client_id')}`,
            client_secret: `${Cypress.env('auth0_client_secret')}`,
            code: "9d1b249f12cff911957f3ddcaf647d7b63c92fe7",
            scope: "data:read_write"
        },
    }).then((response)=>
        {
            token = body['access_token'];
        })
    
        // cy.request({
        //     method: "GET",
        //     url: "https://app.todoist.com/app/today",
        //     headers:{
        //         Authorization: "Bearer" + access_token
        //     }}).
        //     then((response)=>
        //     {
        //         expect(response.status).to.eq(200)
        //        Cypress.env('access_token',response.body.token);
        //     })
})
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })