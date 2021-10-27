"use strict";
const common = require("../Utils/common");
const mainPageFactory = require("../pages/mainPage");
const logoutPageFactory = require("../pages/logoutPage");

// Constants from Login page
const LOGIN_PAGE_H1 = "Evernote";
const LOGIN_PAGE_TITLE = "Welcome Back";
const EMAIL_FIELD_ID = "username";
const PASSWORD_FIELD_ID = "password";
const LOGIN_BUTTON_ID = "loginButton";
const INVALID_PASSWORD_MESSAGE = "Incorrect password";

/**
 * Validate that login page is opened
 *
 * @author: navi39
 * @param {WebDriver} driver driver instance
 */
const validateLoginPageIsOpened = async function (driver) {
  await common.validatePageIsOpened(driver, LOGIN_PAGE_H1, LOGIN_PAGE_TITLE);
};

/**
 * Enter login credentials
 *
 * @author: navi39
 * @param {WebDriver} driver driver instance
 * @param {String} username
 * @param {String} password
 */
const enterLoginCredentials = async function (driver, username, password) {
  var userNameElement = await common.getElementById(driver, EMAIL_FIELD_ID);
  await userNameElement.sendKeys(username);
  var buttonElement = await common.getElementById(driver, LOGIN_BUTTON_ID);
  await buttonElement.click();
  var passwordElement = await common.getElementById(driver, PASSWORD_FIELD_ID);
  await passwordElement.sendKeys(password);
  await buttonElement.click();
};

/**
 * Login from main page (top ribbon)
 *
 * @author: navi39
 * @param {WebDriver} driver driver instance
 * @param {*} username
 * @param {*} password
 */
exports.logInFromMainPage = async function (driver, username, password) {
  await mainPageFactory.validateMainPageIsOpened(driver);
  await mainPageFactory.clickLoginPageFromTopRibbon(driver);
  await validateLoginPageIsOpened(driver);
  await enterLoginCredentials(driver, username, password);
};

/**
 * Login from logout page (top ribbon)
 *
 * @author: navi39
 * @param {WebDriver} driver driver instance
 * @param {*} username
 * @param {*} password
 */
exports.logInFromLogoutPage = async function (driver, username, password) {
  await logoutPageFactory.validateLogOutPageIsOpened(driver);
  await logoutPageFactory.clickLoginPageFromTopRibbon(driver);
  await validateLoginPageIsOpened(driver);
  await enterLoginCredentials(driver, username, password);
};

/**
 * Validate that incorrect password was entered
 *
 * @author: navi39
 * @param {WebDriver} driver driver instance
 */
exports.validateIncorrectPassword = async function (driver) {
  await common.getElementByText(driver, INVALID_PASSWORD_MESSAGE);
};
