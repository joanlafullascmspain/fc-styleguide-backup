var gulp = require('gulp');
var watch = require('gulp-watch');

var src_components = 'src/components',  
    dist_components = '../vremt-component-library/re/components';

gulp.task('watch-components', function() {  
  gulp.src(src_components + '/**/*', {base: src_components})
    .pipe(watch(src_components, {base: src_components}))
    .pipe(gulp.dest(dist_components));
});
