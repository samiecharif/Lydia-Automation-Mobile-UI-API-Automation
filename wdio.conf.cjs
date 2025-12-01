// wdio.conf.cjs
const { join } = require('path');
require('ts-node').register({
    project: join(__dirname, 'tsconfig.mobile.json'),
});

exports.config = {
    runner: 'local',

    specs: ['./mobile/features/**/*.feature'],

    maxInstances: 1,

    capabilities: [{
        platformName: 'Android',
        'appium:automationName': 'UiAutomator2',
        'appium:deviceName': 'Android Emulator',
        'appium:platformVersion': '12',

        // IMPORTANT : APK correct
        'appium:app': join(process.cwd(), 'mobile/apps/app-alpha-universal-release.apk'),

        // IMPORTANT : On force bien l'activité onboarding
        'appium:appPackage': 'org.wikipedia.alpha',
        'appium:appActivity': 'org.wikipedia.onboarding.InitialOnboardingActivity',
        'appium:appWaitActivity': '*.*',
        'appium:appWaitDuration': 30000,

        'appium:autoGrantPermissions': true,
        'appium:noReset': false,
        'appium:fullReset': false,
    }],

    logLevel: 'info',

    waitforTimeout: 20000,

    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,

    framework: 'cucumber',

    cucumberOpts: {
        require: ['./mobile/steps/*.ts'],
        timeout: 60000
    },

    services: ['appium'],

    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false
        }]
    ]

    
};
