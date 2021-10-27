"use strict";

const common = require("../Utils/common");

// Test data
const MAIN_PAGE_H1 = "Tame your work, organize your life";
const MAIN_PAGE_TITLE =
  "Best Note Taking App - Organize Your Notes with Evernote";
const LOGIN_TOP_RIBBON = "Log In";

/**
 * Validate that main  page is opened
 *
 * @author: navi39
 * @param {WebDriver} driver driver instance
 */
exports.validateMainPageIsOpened = async function (driver) {
  await common.validatePageIsOpened(driver, MAIN_PAGE_H1, MAIN_PAGE_TITLE);
};

/**
 * Click on Login button from top ribbon in main page
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
