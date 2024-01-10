// import gulp from 'gulp';
// import gulpSass from 'gulp-sass';
// import * as sass from 'sass';

// const { src, dest, watch, series } = gulp;

// const sassMiddleware = gulpSass(sass);

// const buildStyles = () =>
//   src('sass/**/*.scss').pipe(sassMiddleware()).pipe(dest('css'));

// const watchTask = () => {
//   watch(['*.scss'], buildStyles);
// };

// export default series(buildStyles, watchTask);

import gulp from 'gulp'
const {src, dest, watch,  series} = gulp
import gulpSass from 'gulp-sass'
import sass from 'sass'
const sassMiddleware = gulpSass(sass);

const buildStyles = ()=> src('sass/**/*.scss').pipe(sassMiddleware()).pipe(dest('css'))
const watchTask = ()=>{
    watch('sass/**/*.scss',buildStyles)

}
export default series(buildStyles,watchTask)
