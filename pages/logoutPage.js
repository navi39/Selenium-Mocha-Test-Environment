"use strict";

const common = require("../Utils/common");

// Constants from Login page
const LOGOUT_PAGE_H1 = "You have logged out of Evernote.";
const LOGOUT_PAGE_TITLE = "You have logged out of Evernote. | Evernote";

exports.validateLogOutPageIsOpened = async function (driver) {
  await common.validatePageIsOpened(driver, LOGOUT_PAGE_H1, LOGOUT_PAGE_TITLE);
};
