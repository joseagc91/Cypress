import { Given,Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I make a request to Mercado Libre departments endpoint', () => {
  cy.request('GET', 'https://www.mercadolibre.com.ar/menu/departments')
    .then((response) => {
      cy.wrap(response).as('apiResponse');
    });
});

Then('I should receive a list of departments', () => {
  cy.get('@apiResponse').then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body).to.have.property('departments');
    expect(response.body.departments.length).to.be.greaterThan(0);
    const departmentNames = response.body.departments.map(dep => dep.name);
    expect(departmentNames).to.include('Tecnología');
  });
});