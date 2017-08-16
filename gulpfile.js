const gulp = require('gulp'),
    useref = require('gulp-useref'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-clean-css'),
    imageMin = require('gulp-imagemin');

gulp.task('html', () =>
	gulp.src('app/*.html')
		.pipe(useref())
		.pipe(gulpif('*.js', uglify()))
		.pipe(gulpif('*.css', minifyCss()))
		.pipe(gulp.dest('dist'))
);

gulp.task('image', () =>
	gulp.src('app/images/*[.jpg|.png]')
		.pipe(imageMin())
		.pipe(gulp.dest('dist/images'))
);