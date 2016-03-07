var gulp = require('gulp');
var jspm = require('gulp-jspm-build');

gulp.task('default', function() {
  jspm({
    bundles: [
      { src: 'app', dst: 'build.js' }
    ],
    bundleSfx: true
  })
  .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
  gulp.watch('scripts/*.js', ['default']);
})
