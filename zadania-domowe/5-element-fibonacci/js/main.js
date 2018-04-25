'use strict';

function ciagFibbonaciego(n) {
    var wynik;
    if (n <= 0) {
        wynik = 0;
    }
    
    else if (n === 1) {
        wynik = 1;
    }
    
    else if (n > 1) {
        wynik = ciagFibbonaciego(n - 1) + ciagFibbonaciego(n - 2);
    }
    return wynik;
}

console.log(ciagFibbonaciego(9));