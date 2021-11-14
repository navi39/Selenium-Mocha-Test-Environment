# Selenium-Mocha-Test-Environment
Structured example of test automation environment using Selenium atop of Mocha framework 


# Overview:
Structured test automation environment aimed to test UI testing. In this example, it is used to test Evernote application,
but with minimal modifications, it could be used as a starting point for test automation of any other web application.<br />
The project is structured according to POM (Page Object Model) pattern.<br />
Tech stack:
- Node.js
- Mochajs
- Selenium Webdriver<br />

# Project setup:
- Install Node.js
	- Clone this repo to your desktop, go to its root directory and run:
		- "npm install"
- Run test suite:
	- Open terminal and position in project root directory and run 
		- "npm test"

# Detailed project explanation:
Tests run is defined in testsuite.js<br />
Test implementation can be found in "/test" folder<br />
Methods used in test cases are defined in "/pages" folder<br />
In "/utils" folder are important files for the functioning of test environment:<br />
- common.js -> general methods that is used throughout the project<br />
- init.js -> methods to initialize project<br />
  
# Possible issues:
When multiple test are run in Chrome, sometimes they fail with error message:<br />
Error: Server terminated early with status 1<br />
Solution: Uninstalling and install chromedriver package using commands:<br />
- "npm uninstall -g chromedriver"<br />
- "npm install -g chromedriver"<br />
  
# Helpful links:
* [Selenium](https://www.selenium.dev/documentation/overview/)
* [Selenium-webdriver](https://www.selenium.dev/selenium/docs/api/javascript/index.html)
* [Mocha](https://mochajs.org/)
* [Node.js](https://nodejs.org/en/docs/)
