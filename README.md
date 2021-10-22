# Selenium-Mocha-Test-Environment
Structured example of test automation environment using Selenium atop of Mocha framework 


# Overview:
Structured test automation environment aimed to test UI testing. In this example, it is used to test Evernote application,
but with minimal modifications, it could be used as a starting point for test automation of any other web application.
Tech stack:
- Node.js
- Mochajs
- Selenium Webdriver
The project is structured according to POM (Page Object Model) pattern

# Project setup:
- Install Node.js
- Clone this repo to your desktop, go to its root directory and run:
	- npm init -y
	- npm install selenium-webdriver
	- npm install chromedriver
	- npm install --save-dev mocha
- Run test suite:
 - Open terminal and position in project root directory
 - Run "npm test"

# Detailed project explanation:
Tests run is defined in testsuite.js
Test implementation can be found in /test folder
Methods used in test cases are defined in /pages folder
In /utils folder are important files for the functioning of test environment:
	common.js -> general methods that is used throughout the project
	init.js -> methods to initialize project
  
# Possible issues:
WHen multiple test are run in Chrome, sometimes they fail with error message:
Error: Server terminated early with status 1
Solution: Uninstalling chromedriver package using 
	"npm uninstall -g chromedriver"
and installed again using 
	"npm install -g chromedriver"
  
# Helpful links:
* [Selenium](https://www.selenium.dev/documentation/overview/)
* [Selenium-webdriver](https://www.selenium.dev/selenium/docs/api/javascript/index.html)
* [Mocha](https://mochajs.org/)
* [Node.js](https://nodejs.org/en/docs/)
