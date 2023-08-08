const gulp = require('gulp');
const rename = require('gulp-rename');

const sass = require('gulp-sass')(require('sass'));
const livereload = require('gulp-livereload');

const minifyJS = require('gulp-uglify');
const concat = require('gulp-concat');

const ESLintNew = require('gulp-eslint-new');


// Конвертація SASS в CSS з оновленням даних
gulp.task('sass', function () {
    return gulp.src('src/sass/**/style.scss')
        .pipe(sass({ outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dist/css'))
        .pipe(livereload());
})

gulp.task('watch', function () {
    gulp.watch('src/sass/**/*.scss', gulp.series('sass'));
})

gulp.task('default', gulp.parallel('sass', 'watch'));

// Мінімізація та конкатенація js
gulp.task('bundle', function () {
    return gulp.src('./static/**/*.js')
        .pipe(minifyJS())
        .pipe(concat('bundle.js'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dist'))
})

// esLint 
gulp.task('lint', function () {
    return gulp.src('./static/**/*.js')
        .pipe(ESLintNew({
            overrideConfig:
            {
                env: { node: true, es2021: true },
                rules: {
                    'space-before-blocks': 'error',
                    'camelcase': 'error',
                    'arrow-spacing': 'error',
                    'keyword-spacing': 'error'
                },
            },
            warnIgnored: true,
        }))
        .pipe(ESLintNew.formatEach('compact', process.stderr))
})
