"use strict";
const credentials = require("../credentials.json");

const loginPageFactory = require("../pages/loginPage");
const dashboardPageFactory = require("../pages/dashboardPage");
const notesPageFactory = require("../pages/notesPage");
const logoutPageFactory = require("../pages/logoutPage");
const common = require("../Utils/common");

// Test data
const USER_EMAIL = credentials.userEmail;
const USER_PASSWORD = credentials.password;
const TITLE = "Selenium Automation";
const TEXT = "Just a demo text!";

/** Test: createNoteTC
 *
 * Short description:
 * Test is validating note creation process. Also, it is checked
 * that data is preserved after save and logout procedure.
 *
 * Test steps:
 * [1] User is log in to app from main page
 * [2] Dashboard page is opened
 * [3] Go to Notes page
 * [4] Validate that Notes page is opened
 * [5] Create new note record
 * [6] Validate that newly created record is saved
 * [7] Validate title and content of the newly created record
 * [8] Log out user
 * [9] After login, validate note record data is preserved
 *     (title and content)
 *
 */
const createNoteTC = {
  testFunction: async (driver) => {
    await loginPageFactory.logInFromMainPage(driver, USER_EMAIL, USER_PASSWORD);
    // Validate that main dashboard page is opened
    await dashboardPageFactory.validateDashboardPageIsOpened(driver);
    // Go to Notes page
    await dashboardPageFactory.clickNotesPageFromMainNavigation(driver);
    // Validate that Notes page is opened
    await notesPageFactory.validateNotesPageIsOpened(driver);
    var timestamp = new Date().getTime();
    var title = TITLE + timestamp;
    await notesPageFactory.createNewNote(driver, title, TEXT);
    // Sleep time is added to ensure that app saves the changes
    await common.sleep(5000);
    // Validate record title and content
    await notesPageFactory.selectSortByNotes(
      driver,
      notesPageFactory.SORT_BY.DATA_CREATED_ID
    );
    await notesPageFactory.validateNote(driver, title, TEXT);
    await common.sleep(10000);
    // Log out user
    await dashboardPageFactory.logOutUser(driver, USER_EMAIL);
    // Validate log out is successful
    await logoutPageFactory.validateLogOutPageIsOpened(driver);
    // Log in with user credentials
    await loginPageFactory.logInFromLogoutPage(
      driver,
      USER_EMAIL,
      USER_PASSWORD
    );
    // Validate that main dashboard page is opened
    await dashboardPageFactory.validateDashboardPageIsOpened(driver);
    // Go to Notes page
    await dashboardPageFactory.clickNotesPageFromMainNavigation(driver);
    // Validate that Notes page is opened
    await notesPageFactory.validateNotesPageIsOpened(driver);
    // Validate that note exists after user logout
    await notesPageFactory.validateNote(driver, title, TEXT);
  },
  testDelay: 3500,
  testName: "Validate Note record creation",
};

exports.createNoteTC = createNoteTC;
