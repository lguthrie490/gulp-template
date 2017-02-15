// Gulp
var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var svgmin = require('gulp-svgmin');

// Sync Task
gulp.task('default', function(){
	gulp.watch('../src/css/*.scss', ['sass']);
	gulp.watch('../src/js/*.js', ['uglify']);
	gulp.watch('../src/img/*.svg', ['svgmin']);
});

// Gulp Tasks
gulp.task('sass', function(){
        return gulp.src('../src/css/*.scss')
        .pipe(sass({outputStyle: "compressed"}).on('error', sass.logError))
        .pipe(gulp.dest('../'))
});

gulp.task('uglify', function(){
        return gulp.src('../src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('../app/js'))
});

gulp.task('svgmin', function () {
	return gulp.src('../src/img/*.svg')
		.pipe(svgmin())
		.pipe(gulp.dest('../img'));
});
