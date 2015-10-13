var gulp = require('gulp');
var elixir = require('laravel-elixir');
var notify = require('gulp-notify');
var gutil = require('gulp-util');
var templateCache = require('gulp-angular-templatecache');
var debug = require('gulp-debug');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var minifycss = require('gulp-minify-css');
var jshint = require('gulp-jshint');
var coffee = require('gulp-coffee');
var less = require('gulp-less');
var stylish = require('jshint-stylish');
var Server = require('karma').Server;
var es6transpiler = require('gulp-es6-transpiler');
var angularProtractor = require('gulp-angular-protractor');
var runSequence = require('run-sequence');
var yargs = require('yargs').argv;
var markdownDocs = require('gulp-markdown-docs');
var typescript = require('gulp-tsc');
var del = require('del');
var eol = require('gulp-eol');
var fatalLevel = yargs.fatal //Fatal level flag
var uglify = require('gulp-uglify');

/* Error handling and error levels */
var ERROR_LEVELS = ['error', 'warning'];

function isFatal(level) {
   return ERROR_LEVELS.indexOf(level) <= ERROR_LEVELS.indexOf(fatalLevel || 'error');
}

function handleError(level, error) {
   gutil.log(error.message);
   if (isFatal(level)) {
      process.exit(1);
   }
}

function onError(error) { handleError.call(this, 'error', error);}
function onWarning(error) { handleError.call(this, 'warning', error);}

/*
* Finds all files matching a glob patern and then applies a function with the
* file names as arguments.
*
* @param pattern [String] - Glob pattern
* @param f [Function] - Function to apply
*/
function forFiles(pattern, f) {
  var glob = require('glob');

  glob(pattern, function(er, files) {
    if(!!files) {
      for(var i = 0; i < files.length; i++) {
        f(files[i]);
      }
    }
  });
}


// Basic naming and location config
var appName = 'eventmeapp',
    src     = 'src/',
    dest    = 'build/',
    resources = 'local_resources/',
    deployLocation = './',
    compiledExt = '.compiled',
    inDevelopment = true,
    bundled = '.bundled';

//Which files are used for deployment?
var deployExt   = inDevelopment ? '.js' : '.min.js',
    deployedJs  = outJs + appName + deployExt,
    deployedCss = outCss + appName + deployExt;

// Derived names and paths for the test configs
var  outJs   = dest + 'js/',
    outCss  = dest + 'css/',
    outDocs = dest + 'documentation/',
    compJs  = compiledExt + '.js',
    compCss = compiledExt + '.css',
    jsSources = [
      'node_modules/underscore/underscore-min.js',
      '!' + src + '**/*.e2e.js',
      '!' + src + '**/*.e2e.compiled.js',
      '!' + src + '**/*.spec.js',
      '!' + src + '**/*.spec.compiled.js',
      src + '/**/*.js'
    ],
    e2eSources = [
      src + '**/*.e2e.js'
    ],
    es6Sources = [
      src + '**/*.es6'
    ],
    tscSources = [
      src + '**/*.ts',
      src + '**/*.tsc'
    ],
    coffeeSources = [
      src + '**/*.coffee'
    ],
    lessSources = [
      src + '**/*.less'
    ],
    cssSources = [
      src + '**/*.css'
    ],
    jsFullSources = [
      dest + 'js/templates.js',
      dest + 'js/app.js'
    ],
    jsBundleSources = [
      resources + 'jquery.js',
      resources + 'angular.js',
      resources + 'spin.js',
      resources + 'angular-spinner.js',
      resources + 'angular-touch.js',
      resources + 'ui-route.min.js',
      resources + 'angular-resource.min.js',
      resources + 'angular-sanitize.min.js',
      resources + 'satellizer.js',
      outJs + appName + '.js'
    ];

/*
* Caches HTML templates for angular into a .js
*/
gulp.task('build:templates', function() {
    return gulp.src(src + '**/*.html')
        .pipe(templateCache({standalone : true, 'module' : 'in2.templates'}))
        .pipe(gulp.dest(outJs))
        .on('error', onError);
});

/*
* Finds all markdown files (.md) and creates a single documentation file
*/
gulp.task('markdown', function () {
  return gulp.src(src + '**/*.md')
    .pipe(eol('\n'))
    .pipe(markdownDocs(appName + '.html', {
      highlightTheme: 'monokai',
      yamlMeta : true
  }))
    .pipe(gulp.dest(outDocs))
    .on('error', onError);
});

gulp.task('clean', ['clean:dist'], function() {
  return del([
    src + '**/*.compiled.js',
    src + '**/*.compiled.css'
  ]);
});

gulp.task('clean:dist', function() {
  return del([
    outJs + 'app.js',
    outJs + 'templates.js'
  ]);
})

gulp.task('build:concat', ['build:es6', 'build:typescript', 'build:coffee'], function() {
    return gulp.src(jsSources)
          .pipe(concat('app.js'))
          .pipe(gulp.dest(outJs))
          .on('error', onError);
});

/*
* Runs unit tests
*/
gulp.task('test:unit', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

/*
* Runs end-to-end tests
*/
gulp.task('test:e2e', function() {
  return gulp.src(e2eSources)
              .pipe(angularProtractor({
                  'configFile': 'protractor.conf.js',
                  'autoStartStopServer': true,
                  'debug': true
              })).on('error', onError);
              /*.on('error', function(err) {
                console.log('Error =>', err);
                this.emit('end');
              });*/
});

/*
* Runs all the tests (both unit and end-to-end)
*/
gulp.task('test', ['test:unit', 'test:e2e']);

gulp.task('build:es6', function() {
  return gulp
        .src(es6Sources)
        .pipe(es6transpiler({
          globals : {
            '$' : false,
            'angular' : false,
            'escape' : true,
            'setTimeout' : false,
            'describe' : false,
            'beforeEach' : false,
            'afterEach' : false,
            'it' : false,
            'inject' : false,
            'expect' : false,
            'spyOn' : false,
            'jasmine' : false,
            'uneval' : false,
            '_' : false //Underscore.js
          }
        }))
        .pipe(rename(function (path) {
          path.extname = compJs;
        }))
        .pipe(gulp.dest(src)) // Put them back where you found them
        .on('error', onError);
});

gulp.task('build:typescript', function() {
  return gulp.src(tscSources)
             .pipe(typescript())
             .pipe(rename(function (path) {
               path.extname = compJs;
             }))
             .pipe(gulp.dest(src)) // Put them back where you found them
             .on('error', onError);
});

gulp.task('build:coffee', function() {
  return gulp.src(coffeeSources)
      .pipe(coffee({bare: true}))
      .pipe(rename(function (path) {
        path.extname = compJs;
      }))
      .pipe(gulp.dest(src)) // Put them back
      .on('error', onError);
});

gulp.task('build', ['build:nobundle'], function() {
  return gulp.src(jsBundleSources)
             .pipe(concat(appName + bundled + '.js'))
             .pipe(gulp.dest(outJs))
             .on('error', onError);
});

gulp.task('build:nobundle', ['build:angular'], function() {
  return gulp.src(jsFullSources)
      .pipe(concat(appName + '.js'))
      .pipe(gulp.dest(outJs))
      .on('error', onError);
});

gulp.task('style:less', function() {
  return gulp.src(lessSources)
             .pipe(less())
             .pipe(rename(function (path) {
               path.extname = compCss;
             }))
             .pipe(gulp.dest(src)) //Put the compiled files back
             .on('error', onError);
});

gulp.task('style', ['style:less'], function() {
  return gulp.src(cssSources)
      .pipe(concat(appName + '.css'))
      .pipe(gulp.dest(outCss))
      .on('error', onError);
});

// Compile both the angular source and the templates
gulp.task('build:angular', ['build:templates', 'build:concat']);

gulp.task('minify:js:nobundle', function() {
  return gulp.src(outJs + appName + '.js')
             .pipe(uglify())
             .pipe(rename(appName + '.min.js'))
             .pipe(gulp.dest(outJs))
             .on('error', onError);
});

gulp.task('minify:js:bundle', function() {
  return gulp.src(outJs + appName + bundled + '.js')
             .pipe(uglify())
             .pipe(rename(appName + bundled + '.min.js'))
             .pipe(gulp.dest(outJs))
             .on('error', onError);
});

gulp.task('minify:js', ['minify:js:bundle', 'minify:js:nobundle']);

gulp.task('minify:css', function() {
  return gulp.src(outCss + appName + '.css')
             .pipe(minifycss({
               processImport: false
             }))
             .pipe(rename(appName + '.min.css'))
             .pipe(gulp.dest(outCss))
             .on('error', onError);
});

gulp.task('minify', ['minify:js', 'minify:css']);

/*
* Deploy the application without a fresh rebuild
*/
gulp.task('deploy', function() {
  return gulp.src([
          deployedJs,
          deployedCss
        ])
      .pipe(gulp.dest(deployLocation))
      .on('error', onError);
})

/*
* Perform a style check on the compiled js files
*/
gulp.task('pre:lint', function() {
    var lintSrc = [
        '!' + src + '**/*.compiled.js', //Ignore compiled files
        '!' + src + '**/*.min.js', //Ignore any minified files
        src + '**/*.js',
        src + '**/*.es6'
    ];

    return gulp.src(lintSrc)
            .pipe(jshint({
              esnext: true //Use ES6 as well
            }))
            .pipe(jshint.reporter('jshint-stylish'))
            .pipe(jshint.reporter('fail'))
            .on('error', onWarning); //lukas : Make it produce an error
});

//Setting the default to build and run test
gulp.task('default', ['ci']);

/*
* Perform a continuous integration run
*/
gulp.task('ci', function() {
  runSequence(
      'pre:lint',
      ['build', 'style'],
      'test:unit',
      ['clean', 'minify', 'markdown']
    );
});

/*
* Watch for changes. Run default task for every change, which involves rebuilding and retesting.
*/
gulp.task('watch', function() {
  //Disable death on warnings if not specified
  fatalLevel = fatalLevel || 'off';

  gulp.watch([
    src + '**/*.less',
    '!' + src + '**/*.compiled.css',
    src + '**/*.css'
  ], function() {
    runSequence(
      'style',
      'test:unit' //Some style changes could break tests!
    );
  });

  gulp.watch([
    src + '**/*.es6',
    src + '**/*.coffee',
    src + '**/*.ts',
    src + '**/*.tsc',
    src + '**/*.js',
    '!' + src + '**/*.compiled.js',
    src + '**/*.html'
  ], function() {
    runSequence(
      'pre:lint',
      'build',
      'test:unit'
    );
  });

});
