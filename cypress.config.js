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
    screenshotsFolder: 'cypress/screenshots',
    video: true,
    setupNodeEvents,
    specPattern: ['**/*.spec.js','**/*.{feature,features}']
  },
  env: {
    url: "https://www.saucedemo.com/"
  }
});