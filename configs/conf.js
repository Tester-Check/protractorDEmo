/**
 * Created by admin on 3/19/2016.
 */
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    capabilities: {
        'directConnect': true,
        'browserName': 'chrome'

    },


    specs: ['../tests/Suite1.js'],
    onPrepare: function() {
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                savePath: 'target/reports'
            })
        );
    },

    jasmineNodeOpts: {


        onComplete: null,
        showColors: false,
        isVerbose: true,
        includeStackTrace: true,

        defaultTimeoutInterval: 60000

    }
};
