var gulp = require('gulp');
var markdownDocs = require('gulp-markdown-docs');

gulp.task('default', function () {
  return gulp.src('*.md')
	.pipe(markdownDocs('index.html', {categorySort: "rank", documentSort: "rank"}))
	.pipe(gulp.dest('./documentation/'));
});