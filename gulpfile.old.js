var gulp = require('gulp');
var elixir = require('laravel-elixir');
var templateCache = require('gulp-angular-templatecache');
var debug = require('gulp-debug');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var exec = require('child_process').exec;
var sys = require('sys');
var notify = require('gulp-notify');
var jshint = require('gulp-jshint');
var karma = require('gulp-karma');

var bowerDir = './resources/assets/vendor/';

var lessPaths = [
    bowerDir + "bootstrap/less",
    bowerDir + "font-awesome/less",
    bowerDir + "bootstrap-select/less",
    bowerDir + "bootstrap-social",
    bowerDir + "semantic-ui"
];

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */

//Turn all html templates to cached templates for angular
gulp.task('template-cache', function() {
    gulp.src('resources/js/angular/app/**/*.html')
        .pipe(templateCache({standalone : true}))
        .pipe(gulp.dest('public/js'))
        .pipe(notify(
            {
                message : 'Template cache compiled',
                title : 'Templates Done'
            }
        ));
});

gulp.task('concat-app', function() {
    gulp.src([
        '!resources/js/angular/app/**/*.spec.js',
        'resources/js/angular/app/**/*.js'
        ]).pipe(concat('app.js'))
          .pipe(gulp.dest('public/js'))
          .pipe(notify(
            {
                message : 'AngularJS concatenated successfully',
                title : 'Concat Done'
            }
        ));
});

// Compile both the angular source and the templates
gulp.task('compile-angular', ['template-cache', 'concat-app']);

gulp.task('uglify-app', function() {
   gulp.src('public/js/*.js')
       .pipe(rename('app-dev.js'))
       .pipe(uglify())
       .pipe(gulp.dest('public/js'))
       .pipe(notify(
           {
               message : 'Javascript minification completed successfully',
               title : 'Minify Done'
           }
       ));
});

gulp.task('phpunit', function() {
    exec('phpunit', function(error, stdout) {
        sys.puts(stdout);
    });
});

gulp.task('karma', function() {
  return gulp.src('./fakefile')
             .pipe(karma({
                configFile: 'karma.conf.js',
                action: 'run'
              }))
              .on('error', function(err) {
                // Make sure failed tests cause gulp to exit non-zero
                console.log(err);
                this.emit('end'); //instead of erroring the stream, end it
              });
});

gulp.task('lint', function() {
    return gulp.src('resources/js/angular/app/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

elixir(function(mix) {
    mix.less('app.less', 'public/css', { paths: lessPaths });
  
    
    mix.scripts([
            'jquery/dist/jquery.min.js',
            'bootstrap/dist/js/bootstrap.min.js',
            'bootstrap-select/dist/js/bootstrap-select.min.js',
            'semantic-ui/dist/semantic.min.js'
            ], 'public/js/required-bower.js', bowerDir)
        .copy('resources/js/app.js', 'public/js/app.js')
        .copy(bowerDir + 'font-awesome/fonts', 'public/fonts');

    mix.task('template-cache');

    mix.scripts([
            'spin.js',
            'angular/angular.js',
            'angular/angular-route.js',
            'angular/angular-resource.js',
            'angular/angular-mocks.js',
            'angular/angular-sanitize.js',
            'angular/angular-scenario.js',
            'angular/angular-touch.js',
            'angular/angular-spinner.js',
            'angular/satellizer.js',
            'angular/ui-route.min.js'
        ]
        , 'public/js/required-angular.js');

    gulp.src(['public/js/required-bower.js', 'public/js/required-angular.js'])
        .pipe(concat('required.js'))
        .pipe(gulp.dest('public/js'));

    mix.task('concat-app');
    //Do not minify by default, only manually

    //No tests by default. Bad tests! Take too long
});
