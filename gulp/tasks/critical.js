
'use strict'
/*
const critical = require('critical')

const gulp = require('gulp')

gulp.task('critical', function () {
  const dest = './public'

  return critical.generateInline({
    base: dest,
    src: 'index.html',
    styleTarget: 'app.css',
    htmlTarget: 'index.html',
    width: 320,
    height: 480,
    minify: true
  })
})
*/

const gulp = require('gulp');
const log = require('fancy-log');

(async () => {
  const { generate } = await import('critical');

  gulp.task('critical', async () => {
    try {
      await generate({
        base: 'dist/',
        src: 'index.html',
        dest: 'critical.css',
        inline: true,
        minify: true,
        width: 1300,
        height: 900
      });
      log('Critical CSS generated');
    } catch (err) {
      log.error('Error generating critical CSS', err);
    }
  });
})();
