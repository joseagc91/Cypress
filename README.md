# cypress

To install run the next command:

> `npm install`

To run the tests on chrome run the next command:

> `npm run test --browser chrome`

To run the tests on edge run the next command:

> `npm run test --browser edge`

To generete the report first run the tests with the following command:

> `npm run headTest`

After that, run the next command:

> `node cucumber-html-report.js`

Then you can copy the index.html file path that is located inside the cucumberReports folder and paste this path to your browser.
