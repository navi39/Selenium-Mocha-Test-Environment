"use strict";
const { until } = require("selenium-webdriver");
const { By } = require("selenium-webdriver");
const assert = require("assert");

const common = require("../Utils/common");

// Constants from Login page
const DASHBOARD_PAGE_BUTTON = "Home";
const DASHBOARD_PAGE_TITLE = "Home - Evernote";
const DASHBOARD_USER_NAVIGATION_ID = "qa-NAV_USER";
const DASHBOARD_NOTES_ID = "qa-NAV_ALL_NOTES";
const DASHBOARD_UNSYNCED_CHANGES_POPUP_ID = "qa-LOGOUT_CONFIRM_DIALOG";
const DASHBOARD_UNSYNCED_CHANGES_CLOSE_BUTTON_ID = "qa-LOGOUT_CONFIRM_DIALOG_CLOSE";

/**
 * Validate that dashboard page is opened
 *
 * @author: navi39
 * @param {WebDriver} driver driver instance
 */
exports.validateDashboardPageIsOpened = async function (driver) {
  await common.validatePageIsOpened(
    driver,
    DASHBOARD_PAGE_BUTTON,
    DASHBOARD_PAGE_TITLE
  );
};


exports.closeSyncPopUp = async function (driver){
  if (!driver) {
      throw "Driver is not initialized!";
  }
  await common.sleep(3000);
  if(await common.doesElementExist(driver, By.id(DASHBOARD_UNSYNCED_CHANGES_POPUP_ID))){
    var element = await common.getElementById(
      driver,
      DASHBOARD_UNSYNCED_CHANGES_CLOSE_BUTTON_ID
    );
    element.click();
  }
}

/**
 * Logout user
 *
 * @author: navi39
 * @param {WebDriver} driver driver instance
 * @param {String} username
 */
exports.logOutUser = async function (driver, username) {
  var element = await common.getElementById(
    driver,
    DASHBOARD_USER_NAVIGATION_ID
  );
  element.click();
  var elem = await common.getElementByText(driver, "Sign out " + username);
  await elem.click();
};

/**
 * Open notes page from main navigation in dashboard page
 *
 * @author: navi39
 * @param {WebDriver} driver driver instance
 */
exports.clickNotesPageFromMainNavigation = async function (driver) {
  if (!driver) {
    throw "Driver is not initialized!";
  }
  // Click on Notes button from Main navigation
  var buttonElement = await common.getElementById(driver, DASHBOARD_NOTES_ID);
  await buttonElement.click();
};
