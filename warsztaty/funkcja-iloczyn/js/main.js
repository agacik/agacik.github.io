'use strict';

function warsztatyIloczyn(parametrPierwszy, parametrDrugi, parametrTrzeci) {
    var iloczyn = parametrPierwszy * parametrDrugi * parametrTrzeci;
    return iloczyn;
}

var zmiennaGlobalna = warsztatyIloczyn(1, 2, 3);

console.log(zmiennaGlobalna);