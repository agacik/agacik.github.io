'use strict';
var tablica = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];

//function sortowanieBabelkowe(tablica)
//{
//    var wynik;
//    do {
//        wynik = false;
//        for (var i=0; i < tablica.length - 1; i++) {
//            if (tablica[i] > tablica[i+1]) {
//                var zmienna = tablica[i];
//                tablica[i] = tablica[i+1];
//                tablica[i+1] = zmienna;
//                wynik = true;
//            }
//        }
//    } while (wynik);
//}
//
//sortowanieBabelkowe(tablica);
//console.log((tablica));


for (var i = 0; i < tablica.length; i++) {
    for (var j = 0; j < tablica.length - 1; j++) {
        if (tablica[j] > tablica[j+1]) {
        var temp = tablica[j];
        tablica[j] = tablica[j+1];
        tablica[j+1] = temp;
        }
    }
}

console.log(tablica);