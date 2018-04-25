'use strict';

function sumaKwadratow(tablica = [0,1,2,3,4,5]) {
    var suma = 0;
    
    for (var i = 0; i < tablica.length; i++) {
        suma = suma + Math.pow(tablica[i], 2);
    }
    console.log("Suma kwadratow: " + suma);

}

sumaKwadratow()
