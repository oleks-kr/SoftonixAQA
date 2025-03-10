Follow these steps to set up and run the project on your local machine:

Clone the repository:

bash
git clone https://github.com/your-username/your-private-repo.git
cd your-private-repo

Install dependencies:
bash
npm install
Ensure Cypress is installed (if not already):

bash
npx cypress open
This will open the Cypress Test Runner, where you can run all of the tests in the browser.

Usage
To run the UI tests:

bash
npx cypress open
This will open the Cypress Test Runner, where you can click and run the tests in the browser.

To run the tests in headless mode (without opening the Cypress UI):

bash
npx cypress run
To run specific test files (e.g., only UI tests):

bash
npx cypress run --spec 'cypress/integration/ui/*.spec.js'
For API tests, simply ensure that the appropriate API endpoint (https://jsonplaceholder.typicode.com/) is set in your cypress.json configuration file.
