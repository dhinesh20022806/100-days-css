import  gulp  from "gulp";
import gulpSass from 'gulp-sass'
import * as sass from 'sass'

const {src, dest, watch, series} = gulp;
const sassMiddleware = gulpSass(sass);

function buildStyle(){
    return src(`./sass/**/*.scss`).pipe(sassMiddleware()).pipe(dest(`css`))
}

function watchTask(){
    watch(`./sass/**/*.scss`,buildStyle)
}

export default series(buildStyle,watchTask);
