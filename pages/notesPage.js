"use strict";

const common = require("../Utils/common");
const dashboardPageFactory = require("../pages/dashboardPage");
const { WebDriver } = require("selenium-webdriver");

// Constants and locators for Notes page
const NOTES_PAGE_H1 = "Notes";
const NOTES_PAGE_TITLE = "Notes - Evernote";
const MAIN_NAVIGATION_ADD_NOTE_BUTTON_ID = "qa-NAVBAR_NOTE_ADD_BUTTON";
const MAIN_NAVIGATION_ADD_TASK_BUTTON_ID = "qa-NAVBAR_TASK_ADD_BUTTON";
const NOTES_IFRAME_ID = "qa-COMMON_EDITOR_IFRAME";
const NOTES_TITLE_XPATH = "//*[@placeholder='Title']";
const NOTES_TEXT_XPATH =
  "//*[@aria-placeholder='Start writing or drag files here']";
const SORT_BY_DROPDOWN_ID = "qa-SORTING_DROPDOWN_ICON";
const SORT_BY = {
  TITLE_ID: "sort_by_title",
  DATA_UPDATED_ID: "sort_by_date_updated",
  DATA_CREATED_ID: "sort_by_date_created",
};
Object.freeze(SORT_BY);
const NOTE_SAVED_TEXT = "All changes saved";

/**
 * Validate that notes page is opened
 *
 * @author: navi39
 * @param {WebDriver} driver driver instance
 */
exports.validateNotesPageIsOpened = async function (driver) {
  await common.validatePageIsOpened(driver, NOTES_PAGE_H1, NOTES_PAGE_TITLE);
};

/**
 * Creates new Note record
 *
 * @author: navi39
 * @param {WebDriver} driver driver instance
 * @param {String} title Note title
 * @param {String} text Note text
 */
exports.createNewNote = async function (driver, title, text) {
  // Click on "+ New" button from Main navigation
  var newButtonElement = await common.getElementById(
    driver,
    MAIN_NAVIGATION_ADD_NOTE_BUTTON_ID
  );
  await newButtonElement.click();
  // Switch iFrame
  await driver.manage().setTimeouts({ implicit: 5000 });
  var iframeElement = await common.getElementById(driver, NOTES_IFRAME_ID);
  await driver.switchTo().frame(iframeElement);
  // Add title
  var titleElement = await common.getElementByXPath(driver, NOTES_TITLE_XPATH);
  await titleElement.sendKeys(title);
  // Add text
  var textElement = await common.getElementByXPath(driver, NOTES_TEXT_XPATH);
  await textElement.sendKeys(text);
  // Switch back to default iFrame
  await driver.switchTo().defaultContent();
};

/**
 *
 * Select how to sort notes
 *
 * @author: navi39
 * @param {WebDriver} driver driver instance
 * @param {SORT_BY} sortBy sorting option
 */
const selectSortByNotes = (exports.selectSortByNotes = async function (
  driver,
  sortBy
) {
  // Click on "Sort options" dropdown button
  var sortOptionsElement = await common.getElementById(
    driver,
    SORT_BY_DROPDOWN_ID
  );
  await sortOptionsElement.click();
  let sortByElement;
  switch (sortBy) {
    case SORT_BY.TITLE_ID:
      sortByElement = await common.getElementById(driver, SORT_BY.TITLE_ID);
      break;
    case SORT_BY.DATA_UPDATED_ID:
      sortByElement = await common.getElementById(
        driver,
        SORT_BY.DATA_UPDATED_ID
      );
      break;
    case SORT_BY.DATA_CREATED_ID:
      sortByElement = await common.getElementById(
        driver,
        SORT_BY.DATA_CREATED_ID
      );
      break;
    default:
      throw "Faulty sort option!";
  }
  await sortByElement.click();
});

/**
 *  Validate saved note record title and content
 *
 * @author: navi39
 * @param {WebDriver} driver driver instance
 * @param {String} expectedTitle Expected title of the note record
 * @param {String} expectedText  Expected text of the note record
 */
exports.validateNote = async function (driver, expectedTitle, expectedText) {
  await dashboardPageFactory.clickNotesPageFromMainNavigation(driver);
  // Click Note
  await common.clickElementByText(driver, expectedTitle);
  // Validate footer message that note is saved
  await common.getElementByText(driver, NOTE_SAVED_TEXT);
  // Switch iFrame to validate Note content
  await driver.manage().setTimeouts({ implicit: 5000 });
  var iframeElement = await common.getElementById(driver, NOTES_IFRAME_ID);
  await driver.switchTo().frame(iframeElement);
  // Validate if title is correctly saved
  await common.getElementByText(driver, expectedTitle);
  // Validate if text is correctly saved
  await common.getElementByText(driver, expectedText);
  // Switch back to default iFrame
  await driver.switchTo().defaultContent();
};

exports.SORT_BY = SORT_BY;
