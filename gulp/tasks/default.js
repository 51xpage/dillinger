

'use strict'

const gulp = require('gulp');

// 使用 gulp.series() 来定义依赖任务
gulp.task('default', gulp.series('build'));
