"use strict";
const { until } = require("selenium-webdriver");
const { By } = require("selenium-webdriver");
const assert = require("assert");

const common = require("../Utils/common");

// Test data
const MAIN_PAGE_H1 = "Tame your work, organize your life";
const MAIN_PAGE_TITLE =
  "Best Note Taking App - Organize Your Notes with Evernote";
const LOGIN_TOP_RIBBON = "Log In";

// Methods for testing main page
exports.validateMainPageIsOpened = async function (driver) {
  await common.validatePageIsOpened(driver, MAIN_PAGE_H1, MAIN_PAGE_TITLE);
};

exports.clickLoginPageFromTopRibbon = async function (driver) {
  if (!driver) {
    throw "Driver is not initialized!";
  }
  // Click on Top Ribbon Login button
  await common.clickElementByText(driver, LOGIN_TOP_RIBBON);
};
