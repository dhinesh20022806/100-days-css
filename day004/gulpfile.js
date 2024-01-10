import gulp from "gulp";
import gulpSass from "gulp-sass";
import sass from "sass";
import gulpPurgeCSS from "gulp-purgecss";

const { src, dest, watch, series } = gulp;
const sassMiddleware = gulpSass(sass);

function buildStyles() {
  return src(`./sass/**/*.s[ac]ss`)
    .pipe(sassMiddleware().on("error", sassMiddleware.logError))
    .pipe(
      gulpPurgeCSS({content:['./**/*.html']}).on("error", function (err) {
        console.error(err.toString());
        this.emit("end");
      })
    )
    .pipe(dest(`./css`));
}

function watchTask() {
  watch([`./sass/**/*.s[ac]ss`, `./**/*.html`], buildStyles);
}

export default series(buildStyles, watchTask);
