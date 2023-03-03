const reporter = require('cucumber-html-reporter')
var date = new Date()

var currentDate = date.getDate() + '_' + (date.getMonth() + 1) + '_' + date.getFullYear() + '_' + date.getHours() + '_' + date.getMinutes() + '_' + date.getSeconds() + '_' + date.getMilliseconds()

var options = {
    brandTitle: 'Test Scenarios',
    theme: 'bootstrap',
    jsonFile: 'tests/reports/cucumber_report.json',
    output: 'tests/reports/cucumber_report_' + currentDate + '.html',
    reportSuitesAsScenarios: true,
    launchReport: true,
    metadata: {
        "App Version": "1.1.1",
        "Test environment": "QA",
        "Platform": "web/React",
        "Sprint": "001"
    }
}

reporter.generate(options)
