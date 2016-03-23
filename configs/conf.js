/**
 * Created by admin on 3/19/2016.
 */
var Jasmine2HtmlReporter = require('protractor-jasmine2-screenshot-reporter');
//protractor-jasmine2-html-reporter
//protractor-jasmine2-screenshot-reporter
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    directConnect: true,

    capabilities: {
        'browserName': 'chrome'

    },


    specs: ['../tests/Suite1.js'],
    onPrepare: function() {
        afterAll(function(done) {
            process.nextTick(done);
        });

        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                baseDirectory: 'target/reports'
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
