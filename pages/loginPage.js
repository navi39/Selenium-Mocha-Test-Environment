"use strict";
const common = require("../Utils/common");

// Constants from Login page
const LOGIN_PAGE_H1 = "Evernote";
const LOGIN_PAGE_TITLE = "Welcome Back";
const EMAIL_FIELD_ID = "username";
const PASSWORD_FIELD_ID = "password";
const LOGIN_BUTTON_ID = "loginButton";
const INVALID_PASSWORD_MESSAGE = "Incorrect password";

exports.validateLoginPageIsOpened = async function (driver) {
  await common.validatePageIsOpened(driver, LOGIN_PAGE_H1, LOGIN_PAGE_TITLE);
};

exports.enterLoginCredentials = async function (driver, username, password) {
  var userNameElement = await common.getElementById(driver, EMAIL_FIELD_ID);
  await userNameElement.sendKeys(username);
  var buttonElement = await common.getElementById(driver, LOGIN_BUTTON_ID);
  await buttonElement.click();
  var passwordElement = await common.getElementById(driver, PASSWORD_FIELD_ID);
  await passwordElement.sendKeys(password);
  await buttonElement.click();
};

exports.validateIncorrectPassword = async function (driver) {
  await common.getElementByText(driver, INVALID_PASSWORD_MESSAGE);
};
