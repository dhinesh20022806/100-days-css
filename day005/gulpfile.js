import gulp from "gulp";
import gulpPurgeCSS from "gulp-purgecss";
import gulpSass from "gulp-sass";
import * as sass from "sass";

const { src, dest, watch, series } = gulp;
const sassMiddleware = gulpSass(sass);

function buildStyles() {
  return src("./sass/**/*.s[ac]ss")
    .pipe(sassMiddleware())
    .pipe(gulpPurgeCSS({ content: [`./**/*.html`] }))
    .pipe(dest("css"));
}

function watchTask() {
  watch(["./sass/**/*.s[ac]ss", "./**/*.html"], buildStyles);
}

export default series(buildStyles, watchTask);
