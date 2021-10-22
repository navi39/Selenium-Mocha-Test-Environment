"use strict";

const Mocha = require("mocha");
const initFactory = require("../Utils/init").initFactory();
const loginLogoutTC = require("./login.test").loginLogoutTC;
const invalidLoginTC = require("./login.test").invalidLoginTC;

describe("All Tests:", () => {
  const EVERNOTE_URL = "https://evernote.com/";
  let initInstance;
  let driver;
  var mocha = new Mocha();

  beforeEach(async () => {
    // Initial timeout (5s) -> Needed when running multiple TCs
    mocha.timeout(5000);
    // Initialise function according Module pattern
    initInstance = initFactory.getInstance();
    // Create Chrome webDriver
    initInstance.createWebDriverInstance();
    // Fetch driver instance
    driver = initInstance.getDriver();
    // Open website and validate that it is opened
    await initInstance.openUrl(EVERNOTE_URL);
  });

  afterEach(async () => {
    // Close browser
    await initInstance.closeWebDriverInstance();
  });

  describe("Positive Login TCs:", () => {
    it(
      loginLogoutTC.testName,
      async () => {
        await loginLogoutTC.testFunction(driver);
      },
      loginLogoutTC.testDelay
    );
  });

  describe("Negative Login TCs:", () => {
    it(
      invalidLoginTC.testName,
      async () => {
        await invalidLoginTC.testFunction(driver);
      },
      invalidLoginTC.testDelay
    );
  });
});
