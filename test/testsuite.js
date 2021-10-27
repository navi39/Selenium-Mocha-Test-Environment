"use strict";

const initFactory = require("../Utils/init").initFactory();
const loginLogoutTC = require("./login.test").loginLogoutTC;
const invalidLoginTC = require("./login.test").invalidLoginTC;
const createNoteTC = require("./note.test").createNoteTC;
const common = require("../Utils/common");

describe("All Tests:", () => {
  const EVERNOTE_URL = "https://evernote.com/";
  let initInstance;
  let driver;

  beforeEach(async () => {
    // Initial timeout (3s) -> Needed when running multiple TCs
    await common.sleep(3000);
    // Initialise function according Module pattern
    initInstance = initFactory.getInstance();
    // Create Chrome webDriver
    await common.sleep(3000);
    initInstance.createWebDriverInstance();
    // Fetch driver instance
    await common.sleep(3000);
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

  describe("Note suite:", () => {
    it(
      createNoteTC.testName,
      async () => {
        await createNoteTC.testFunction(driver);
      },
      createNoteTC.testDelay
    );
  });
});
