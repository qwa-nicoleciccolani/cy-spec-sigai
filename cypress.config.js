const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1200,
  viewportHeight: 720,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://192.168.1.131:8085/#"
  },
});
