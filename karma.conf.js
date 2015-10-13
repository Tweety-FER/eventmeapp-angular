module.exports = function(config){
  config.set({

    basePath : './resources/js/angular/',

    files : [
      'angular.js',
      'ui-route.min.js',
      'angular-mocks.js',
      //'angular-scenario.js',
      'angular-sanitize.js',
      'angular-spinner.js',
      'app/**/*.js'
    ],

    exclude : [],

    preprocessors : [],

    reporters : ['spec'],

    port: 9876,

    colors: true,

    logLevel : config.LOG_INFO,

    autoWatch : false, //true

    frameworks: ['jasmine'],

    browsers : [
      'PhantomJS',
      //'Chrome',
      //'Firefox'
      ],

    plugins : [
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-phantomjs-launcher',
            'karma-spec-reporter'
          ],

    singleRun : false
  });
};
