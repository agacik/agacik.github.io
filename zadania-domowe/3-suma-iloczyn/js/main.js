'use strict';

function sumaIloczyn(tablica = [1, 2, 3, 4, 5, 6]) {
    var suma = 0;
    var iloczyn = 1;
    
    for (var i = 0; i < tablica.length; i++) {
        suma = suma + tablica[i];
    }
    console.log("Suma : " + suma);
    
    
    for (var j = 0; j < tablica.length; j++) {
        iloczyn = iloczyn * tablica[j];
    }
    console.log("Iloczyn : " + iloczyn)
}

sumaIloczyn()
