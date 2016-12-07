"use strict";

var gulp = require('gulp'),
	browserSync = require("browser-sync"),
	reload = browserSync.reload,
	config = require('../config');

gulp.task('sound:build', function () {
	gulp.src(config.src.sound)
		.pipe(gulp.dest(config.build.sound))
		.pipe(reload({stream: true}));
});