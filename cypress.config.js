const { defineConfig } = require('cypress');
const browserify = require('@badeball/cypress-cucumber-preprocessor/browserify');
const preprocessor = require('@badeball/cypress-cucumber-preprocessor');

async function setupNodeEvents(on, config) {

  await preprocessor.addCucumberPreprocessorPlugin(on, config)
  on('file:preprocessor', browserify.default(config));

  return config;
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    specPattern: ['**/*.spec.js','**/*.{feature,features}']
  },
  env: {
    url: "https://app.todoist.com/",
    email: "jagcourel@gmail.com",
    password: "Jose123Gimeno",
    apiToken: 'ff8464dd8754255cfddd671a4e63641cf64048f7',
    auth0_client_id: "277df55c90a049fab3ed10e6650373f3",
    auth0_client_secret: "b5c492f0cd6d42b49ceddcdaf139fb15"
  }
});