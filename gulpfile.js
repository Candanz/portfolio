const gulp = require('gulp'),
    useref = require('gulp-useref'),
    gulpif = require('gulp-if'),
    babel = require('gulp-babel-minify'),
    minifyCss = require('gulp-clean-css'),
    imageMin = require('gulp-imagemin')
    util = require('gulp-util');

gulp.task('html', () =>
	gulp.src('app/*.html')
		.pipe(useref())
		.pipe(gulpif('*.js', babel({
									removeConsole: true,
									removeDebugger: true,
								})))
		.pipe(gulpif('*.css', minifyCss()))
		.pipe(gulp.dest('dist'))
);

gulp.task('image', () =>
	gulp.src('app/images/*[.jpg|.png]')
		.pipe(imageMin())
		.pipe(gulp.dest('dist/images'))
);