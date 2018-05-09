'use strict';
class Ksiazka {
    constructor(tytul, autor, przeczytana) {
        this.tytul = tytul;
        this.autor = autor;
        this.przeczytana = przeczytana;
    }
    opiszKsiazke() {
        var czyPrzeczytana = "";
        if (this.przeczytana === true) {
            czyPrzeczytana = "przeczytana";
        } else czyPrzeczytana = "nieprzeczytana";

        return "Książka ma tytuł " + this.tytul + ", autorem jest " + this.autor + " i została " + czyPrzeczytana + ".";
    }
};

var ksiazka01 = new Ksiazka('Wszystko czerwone', 'Joanna Chmielewska', true);
var ksiazka02 = new Ksiazka('Boso ale w ostrogach', 'Stanisław Grzesiuk', true);
var ksiazka03 = new Ksiazka('Nad Niemnem', 'Eliza Orzeszkowa', false);
var wszystkieKsiazki = [ksiazka01, ksiazka02, ksiazka03];
console.log(wszystkieKsiazki);

function iloscPrzeczytanych(funkcjaZKsiazki) {
    var liczbaPrzeczytanych = 0;
    for (var i = 0; i < funkcjaZKsiazki.length; i++) {
        if (funkcjaZKsiazki[i].przeczytana == true) {
            liczbaPrzeczytanych = liczbaPrzeczytanych + 1;
        }
        console.log(funkcjaZKsiazki[i].opiszKsiazke());
    };
    var liczbaNieprzeczytanych = wszystkieKsiazki.length - liczbaPrzeczytanych;

    console.log('Ilość przeczytanych książek: ' + liczbaPrzeczytanych);
    console.log('Ilość nieprzeczytanych książek: ' + liczbaNieprzeczytanych);
}

iloscPrzeczytanych(wszystkieKsiazki);