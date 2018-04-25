'use strict';

function posortowanyText(napis) {
    var text = napis.split("").sort().join("");
    return text
}

console.log(posortowanyText("Akademia108"));