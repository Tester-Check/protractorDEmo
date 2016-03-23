/**
 * Created by sowmya on 3/21/16.
 */
var HtmlReporter = require('protractor-jasmine2-screenshot-reporter');
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    directConnect: true,

    capabilities: {
        'browserName': 'chrome'

    },
    specs: ['../tests/Suite1.js'],

    jasmineNodeOpts: {
        onComplete: null,
        showColors: false,
        isVerbose: true,
        includeStackTrace: true,
        defaultTimeoutInterval: 60000

    },
    // your config here ...

    onPrepare: function() {
        // Add a screenshot reporter and store screenshots to `/tmp/screnshots`:
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: '/Users/sowmya/Documents/pro-reports/ss'

        }));

    afterAll(function(done) {
            process.nextTick(done);
        });
    }
}