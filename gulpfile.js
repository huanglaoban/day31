var gulp = require("gulp"),
	sass = require("gulp-sass");

gulp.task("sass", function(){
	gulp.src("sass/*.scss")
		.pipe(sass({outputStyle: 'compressed'}))
		.pipe(gulp.dest("dist/css"));
});

// gulp.task('sass', () =>
//     sass('sass/style.scss')
//         .on('error', sass.logError)
//         .pipe(gulp.dest('dist/css'))
// );