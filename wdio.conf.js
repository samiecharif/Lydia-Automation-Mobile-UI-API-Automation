const path = require("path");

exports.config = {
    runner: "local",

    hostname: "127.0.0.1",
    port: 4723,
    path: "/",

    specs: ["./mobile/features/**/*.feature"],


    maxInstances: 1,

    services: [],

    capabilities: [{
        platformName: "Android",
        "appium:automationName": "UiAutomator2",
        "appium:deviceName": "Medium Phone API 36.1",
        "appium:platformVersion": "12",
        "appium:app": "C:/Users/echar/Desktop/lydia-automation/mobile/apps/app-alpha-universal-release.apk",
        "appium:autoGrantPermissions": true,
        "appium:noReset": true,
        "appium:fullReset": false
    }],

    framework: "cucumber",

    reporters: [
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false
        }],
    ],

    cucumberOpts: {
        require: ["./mobile/steps/**/*.ts"],
        timeout: 60000
    },
};
