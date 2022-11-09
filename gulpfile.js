const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function css( done ) {

    // Los pipes son acciones que se ejecutan una tras otra
    src('src/scss/app.scss') //Identificar el archivo SASS
        .pipe(sass()) // Compilarlo
        .pipe(dest('build/css')); // Almacenarlo en el disco duro

    done(); // Callback que avisa al gulp cuando llegamos al final
}

function dev ( done ) {
    watch('src/scss/app.scss', css)

    done();
}

exports.css = css;
exports.dev = dev;