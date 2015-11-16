// Karma configuration
// Generated on Thu Jul 16 2015 09:22:00 GMT+0200 (Central European Daylight Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'local_resources/jquery.js',
      'local_resources/spin.js',
      'local_resources/angular.js',
      'local_resources/angular-*.js',
      'local_resources/satellizer.js',
      'local_resources/ui-route.min.js',
      'build/js/templates.js',
      'src/**/*.js',
      'src/**/*.html', //Template files (must be preprocessed)
      'node_modules/underscore/underscore-min.js'
    ],


    // list of files to exclude
    exclude: [
      'src/**/*.e2e.js'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/**/*.html' : ['ng-html2js'],
      //Exclude spec files and validation (legacy code)
      'src/**/!(validation)/!(spec).js' : ['coverage']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec', 'coverage', 'junit'],

    /* Coverage reporter config */
    coverageReporter: {
      dir: 'coverage',
      reporters: [
        { type : 'html', subdir: 'html' },
        { type : 'text-summary', subdir: '.', file: 'coverage.txt' },
      ]
    },


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,

    //Wait no more than a second to give up on a browser
    captureTimeout : 2000,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],//, 'Chrome', 'Firefox', 'IE'],

    plugins: [
      'karma-jasmine',
      'karma-phantomjs-launcher',
      'karma-chrome-launcher',
      'karma-safari-launcher',
      'karma-firefox-launcher',
      'karma-ie-launcher',
      'karma-spec-reporter',
      'karma-junit-reporter',
      'karma-ng-html2js-preprocessor',
      'karma-coverage'
    ],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  })
}
