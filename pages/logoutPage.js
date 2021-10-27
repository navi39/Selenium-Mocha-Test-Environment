"use strict";

const common = require("../Utils/common");

// Constants from Login page
const LOGOUT_PAGE_H1 = "You have logged out of Evernote.";
const LOGOUT_PAGE_TITLE = "You have logged out of Evernote. | Evernote";
const LOGIN_TOP_RIBBON = "Log In";

/**
 * Validate that logout page is opened
 *
 * @author: navi39
 * @param {WebDriver} driver driver instance
 */
exports.validateLogOutPageIsOpened = async function (driver) {
  await common.validatePageIsOpened(driver, LOGOUT_PAGE_H1, LOGOUT_PAGE_TITLE);
};

/**
 * Click on login page from top ribbon
 *
 * @author: navi39
 * @param {WebDriver} driver driver instance
 */
exports.clickLoginPageFromTopRibbon = async function (driver) {
  if (!driver) {
    throw "Driver is not initialized!";
  }
  // Click on Top Ribbon Login button
  var elem = await common.getElementByText(driver, LOGIN_TOP_RIBBON);
  await elem.click();
};
