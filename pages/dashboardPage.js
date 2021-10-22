"use strict";
const { until } = require("selenium-webdriver");
const { By } = require("selenium-webdriver");
const assert = require("assert");

const common = require("../Utils/common");

// Constants from Login page
const DASHBOARD_PAGE_H1 = "Home";
const DASHBOARD_PAGE_TITLE = "Home - Evernote";
const DASHBOARD_USER_NAVIGATION_ID = "qa-NAV_USER";

exports.validateDashboardPageIsOpened = async function (driver) {
  await common.validatePageIsOpened(
    driver,
    DASHBOARD_PAGE_H1,
    DASHBOARD_PAGE_TITLE
  );
};

exports.validateDashboardPageIsOpenedNew = async function (
  driver,
  expectedID,
  expectedTitle
) {
  if (!driver) {
    throw "Driver is not initialized!";
  }
  // Get element by expected ID
  await driver
    .wait(until.elementLocated(By.id(expectedID)))
    .then((el) => el.getText().then((x) => console.log(x)));
  // Validate page title
  const title = await driver.getTitle();
  assert.equal(title, expectedTitle);
};

exports.logOutUser = async function (driver, username) {
  var element = await common.getElementById(
    driver,
    DASHBOARD_USER_NAVIGATION_ID
  );
  element.click();
  await common.clickElementByText(driver, "Sign out " + username);
};
