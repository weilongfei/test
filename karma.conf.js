// Karma configuration
// Generated on Fri Aug 04 2017 15:01:13 GMT+0800 (CST)
var webpack = require('webpack')
var webpackConfig = require('./webpack.config')

module.exports = function (config) {
  config.set({
    // to run in additional browsers:
    // 1. install corresponding karma launcher
    //    http://karma-runner.github.io/0.13/config/browsers.html
    // 2. add it to the `browsers` array below.
    browsers: ['PhantomJS'],
    frameworks: ['jasmine'],
    reporters: ['progress'],
    files: ['./spec/*.spec.js'],
    preprocessors: {
      './spec/*.spec.js': ['webpack', 'sourcemap']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },
    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' }
      ]
    }
  })
}



// module.exports = function(config) {
//     config.set({
//         // base path that will be used to resolve all patterns (eg. files, exclude)
//         basePath: '',
//         // frameworks to use
//         // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
//         frameworks: ['jasmine'],
//         coverageReporter: {
//             dir: './coverage',
//             reporters: [{
//                 type: 'lcov',
//                 subdir: '.'
//             }, {
//                 type: 'text-summary'
//             }]
//         },
//         // list of files / patterns to load in the browser
//         files: [
//             './spec/*.spec.js'
//         ],
//         webpack: webpackConfig,

//         // list of files to exclude
//         exclude: [],


//         // preprocess matching files before serving them to the browser
//         // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
//         preprocessors: {},


//         // test results reporter to use
//         // possible values: 'dots', 'progress'
//         // available reporters: https://npmjs.org/browse/keyword/karma-reporter
//         reporters: ['progress'],


//         // web server port
//         port: 9876,


//         // enable / disable colors in the output (reporters and logs)
//         colors: true,


//         // level of logging
//         // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
//         logLevel: config.LOG_INFO,


//         // enable / disable watching file and executing tests whenever any file changes
//         autoWatch: false,


//         // start these browsers
//         // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
//         browsers: ['PhantomJS'],


//         // Continuous Integration mode
//         // if true, Karma captures browsers, runs the tests and exits
//         singleRun: false,

//         // Concurrency level
//         // how many browser should be started simultaneous
//         concurrency: Infinity
//     })
// }