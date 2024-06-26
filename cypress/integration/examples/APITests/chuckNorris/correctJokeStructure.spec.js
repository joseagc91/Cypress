import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';

const apiUrl = 'https://api.chucknorris.io/jokes/random';

Given('I send a request to the Chuck Norris API', () => {
  cy.request(apiUrl).as('chuckNorrisResponse');
});

Then('the response status should be {int}', (statusCode) => {
  cy.get('@chuckNorrisResponse').its('status').should('eq', statusCode);
});

Then('the response should contain a valid joke structure', () => {
  cy.get('@chuckNorrisResponse').then((response) => {
    expect(response.body).to.have.property('icon_url');
    expect(response.body.icon_url).to.match(/^https?:\/\/.+/);
    expect(response.body).to.have.property('id');
    expect(response.body.id).to.be.a('string').and.not.be.empty;
    expect(response.body).to.have.property('url');
    expect(response.body.url).to.match(/^https?:\/\/.+/);
    expect(response.body).to.have.property('value');
    expect(response.body.value).to.be.a('string').and.not.be.empty;
  });
});