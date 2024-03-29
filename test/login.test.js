"use strict";
const credentials = require("../credentials.json");

const loginPageFactory = require("../pages/loginPage");
const dashboardPageFactory = require("../pages/dashboardPage");
const logoutPageFactory = require("../pages/logoutPage");

// Enter login credentials in file: credentials.json
const USER_EMAIL = credentials.userEmail;
const USER_PASSWORD = credentials.password;
const INVALID_PASSWORD = "BadPass";

/** Test: loginLogoutTC
 *
 * Short description:
 * Test is validating login with correct credentials. Also, it is
 * checking logout functionality.
 *
 * Test steps:
 * [1] Validate that main page is opened
 * [2] Click on login button in top ribbon
 * [3] Validate that login page is opened
 * [4] Enter correct login credentials
 * [5] Validate that login procedure is successful (dashboard
 *     page is opened)
 * [6] Log out user
 * [7] Validate that logout page is opened
 *
 */
const loginLogoutTC = {
  testFunction: async (driver) => {
    await loginPageFactory.logInFromMainPage(driver, USER_EMAIL, USER_PASSWORD);
    await dashboardPageFactory.validateDashboardPageIsOpened(driver);
    await dashboardPageFactory.closeSyncPopUp(driver);
    await dashboardPageFactory.logOutUser(driver, USER_EMAIL);
    await logoutPageFactory.validateLogOutPageIsOpened(driver);
  },
  testDelay: 3500,
  testName: "Validate login & logout procedure",
};

/** Test: invalidLoginTC
 *
 * Short description:
 * Negative Test is validating that user can not log with an invalid
 * credentials
 *
 * Test steps:
 * [1] Validate that main page is opened
 * [2] Click on login button in top ribbon
 * [3] Validate that login page is opened
 * [4] Enter invalid login credentials
 * [5] Validate that user get
 * [6] Log out user can't log and get
 *     message "Incorrect password"
 *
 */
const invalidLoginTC = {
  testFunction: async (driver) => {
    await loginPageFactory.logInFromMainPage(
      driver,
      USER_EMAIL,
      INVALID_PASSWORD
    );
    await loginPageFactory.validateIncorrectPassword(driver);
  },
  testDelay: 3500,
  testName: "Validate User can not log with invalid credentials",
};

exports.loginLogoutTC = loginLogoutTC;
exports.invalidLoginTC = invalidLoginTC;
