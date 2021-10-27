"use strict";
const { until } = require("selenium-webdriver");
const { By } = require("selenium-webdriver");
const assert = require("assert");

/**
 * Validate that page is opened
 *
 * @author: navi39
 * @param {WebDriver} driver driver instance
 * @param {*} expectedText  validate expected text in page
 * @param {*} expectedTitle validate page title
 */
exports.validatePageIsOpened = async function (
  driver,
  expectedText,
  expectedTitle
) {
  if (!driver) {
    throw "Driver is not initialized!";
  }
  // Validate that page is opened
  await driver
    .wait(
      until.elementLocated(
        By.xpath("//*[contains(text(), '" + expectedText + "')]")
      )
    )
    .then((el) => el.getText().then((x) => console.log(x)));
  // Validate page title
  const title = await driver.getTitle();
  //console.log(title);
  assert.equal(title, expectedTitle);
};

/**
 * Click on element with text
 *
 * @author: navi39
 * @param {WebDriver} driver driver instance
 * @param {String} text element text
 */
exports.clickElementByText = async function (driver, text) {
  if (!driver) {
    throw "Driver is not initialized!";
  }
  await driver
    .wait(
      until.elementLocated(By.xpath("//*[contains(text(), '" + text + "')]"))
    )
    .then((element) => element.click());
};

/**
 * Get element with text
 *
 * @author: navi39
 * @param {WebDriver} driver driver instance
 * @param {String} text element text
 */
exports.getElementByText = async function (driver, text) {
  if (!driver) {
    throw "Driver is not initialized!";
  }
  var element;
  await driver
    .wait(
      until.elementLocated(
        By.xpath("//*[contains(text(), '" + text + "')]"),
        20000
      ),
      10000
    )
    .then((el) => (element = el));
  console.log("Found element with text: " + element.getText());
  return element;
};

/**
 * Get element by ID attribute
 *
 * @author: navi39
 * @param {WebDriver} driver driver instance
 * @param {String} id element ID attribute
 */
exports.getElementById = async function (driver, id) {
  if (!driver) {
    throw "Driver is not initialized!";
  }
  // Get element by expected ID
  var element = await driver.wait(
    until.elementIsVisible(
      driver.findElement(By.id(id), 10000),
      10000,
      "Failed to read text: " + id
    )
  );
  return element;
};

/**
 * Get element by XPath
 *
 * @author: navi39
 * @param {WebDriver} driver driver instance
 * @param {String} xpath element XPath
 */
exports.getElementByXPath = async function (driver, xpath) {
  if (!driver) {
    throw "Driver is not initialized!";
  }
  var element = await driver.wait(until.elementLocated(By.xpath(xpath), 20000));
  return element;
};

exports.sleep = function (ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};
