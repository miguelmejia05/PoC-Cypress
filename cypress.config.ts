import { defineConfig } from 'cypress'

export default defineConfig({
  video: false,
  screenshotOnRunFailure: false,
  chromeWebSecurity: false,
  e2e: {
    baseUrl: 'https://www.latlong.net/'
  },
  setupNodeEvents(on, config) {
    // implement node event listeners here
    config.defaultCommandTimeout= 10000;
    config.responseTimeout= 20000;
    config.pageLoadTimeout= 60000;
    return config;
  },
});
