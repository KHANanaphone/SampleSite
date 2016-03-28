var gulp = require('gulp')
, inject = require('gulp-inject')
, nodemon = require('gulp-nodemon')
, series = require('stream-series')
, sass = require('gulp-ruby-sass');

gulp.task('sass', function () {
  return sass('./www/scss/**/*.scss')
    .pipe(gulp.dest('./www/css'))
});

gulp.task('injectfiles', function() {

    var targetUrl = './www/index.html';
    var target = gulp.src(targetUrl);

    var prereqs = ['./www/js/components/angular/angular.js','./www/js/components/angular-route/angular-route.js'];
    var components = ['./www/js/components/**/*.js'];
    var apps = ['./www/js/app/**/*.js', './www/css/**/*.css']

    for(var i = 0; i < prereqs.length; i++){

        components.push('!' + prereqs[i]);
        apps.push('!' + prereqs[i]);
    }

    console.log(prereqs);
    console.log(components);
    console.log(apps);

    var prereqStream = gulp.src(prereqs, {read: false});
    var componentsStream = gulp.src(components, {read: false});
    var appStream = gulp.src(apps, {read: false});

    target.pipe(inject(series(
        prereqStream,
        componentsStream,
        appStream), {ignorePath: 'www'}))
      .pipe(gulp.dest('./www'));

});

gulp.task('start', function () {
  nodemon({ script: 'server.js'
          , ext: 'html ejs js scss'
          , ignore: ['index.html']
          , tasks: ['sass', 'injectfiles'] })
    .on('restart', function () {
      console.log('restarted!')
    })
});

gulp.task('default', ['sass', 'injectfiles', 'start']);
