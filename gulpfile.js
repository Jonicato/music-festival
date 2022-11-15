const { src, dest, watch, parallel } = require('gulp');

// CSS
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');

// Imágenes
const webp = require('gulp-webp')

function css( done ) {

    // Los pipes son acciones que se ejecutan una tras otra
    src('src/scss/**/*.scss') //Identificar el archivo SASS
        .pipe(plumber())
        .pipe(sass()) // Compilarlo
        .pipe(dest('build/css')); // Almacenarlo en el disco duro

    done(); // Callback que avisa al gulp cuando llegamos al final
}

function versionWebp( done ) {

    const opciones = {
        quality: 50
    };

    src('src/img/**/*.{jpg, png}') // Cuando quieres buscar en dos formatos, puedes hacerlo de esta manera
        .pipe( webp(opciones) )
        .pipe( dest('build/img') )

    done();
}

function dev ( done ) {
    watch('src/scss/**/*.scss', css)

    done();
}

exports.css = css;
exports.versionWebp = versionWebp;
exports.dev = parallel( versionWebp, dev );