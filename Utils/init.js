"use strict";
const webdriver = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const path = require("chromedriver"); // Adding Chromedriver to correct PATH
const common = require("../Utils/common");

let initFactory = function () {
  function initClass() {
    const MAIN_PAGE_H1 = "Tame your work, organize your life";
    const MAIN_PAGE_TITLE =
      "Best Note Taking App - Organize Your Notes with Evernote";
    let driver;

    const createWebDriverInstance = function () {
      let chromeOptions = new chrome.Options();
      chromeOptions.addArguments("--incognito");
      chromeOptions.addArguments("start-maximized");
      driver = new webdriver.Builder()
        .forBrowser("chrome")
        .setChromeOptions(chromeOptions)
        .build();
    };

    const getDriver = function () {
      if (!driver) {
        throw "Driver is not initialized!";
      }
      return driver;
    };

    const openUrl = async function (url) {
      if (!driver) {
        throw "Driver is not initialized!";
      }
      // Open URL
      driver.get(url);
      // Validate that main page is initially opened
      await common.validatePageIsOpened(driver, MAIN_PAGE_H1, MAIN_PAGE_TITLE);
    };

    const closeWebDriverInstance = async function () {
      await driver.quit();
    };

    return {
      createWebDriverInstance: createWebDriverInstance,
      closeWebDriverInstance: closeWebDriverInstance,
      getDriver: getDriver,
      openUrl: openUrl,
    };
  }
  var instance;
  return {
    getInstance: function () {
      if (instance == null) {
        //console.log("Creating new instance!");
        instance = new initClass();
        // Hide the constructor so the returned object can't be
        instance.constructor = null;
      } else {
        //console.log("Instance is already created!");
      }
      return instance;
    },
  };
};
exports.initFactory = initFactory;
