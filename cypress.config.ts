const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.redmine.org",
    env: {
      email: process.env.CYPRESS_EMAIL,
      password: process.env.CYPRESS_PSWD,
    },
  },
});
