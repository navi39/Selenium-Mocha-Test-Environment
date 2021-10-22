"use strict";
const { until } = require("selenium-webdriver");
const { By } = require("selenium-webdriver");
const assert = require("assert");

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

exports.getElementByText = async function (driver, text) {
  if (!driver) {
    throw "Driver is not initialized!";
  }
  var element;
  await driver
    .wait(
      until.elementLocated(By.xpath("//*[contains(text(), '" + text + "')]"))
    )
    .then((el) => (element = el));
  console.log("Found element with text: " + element.getText());
  return element;
};

exports.getElementById = async function (driver, id) {
  if (!driver) {
    throw "Driver is not initialized!";
  }
  // Get element by expected ID
  var element = await driver.wait(
    until.elementIsVisible(
      driver.findElement(By.id(id)),
      10000,
      "Failed to read text: " + id
    )
  );
  return element;
};
