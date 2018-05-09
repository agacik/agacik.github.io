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

        console.log("Książka ma tytuł " + this.tytul + ", autorem jest " + this.autor + " i została " + czyPrzeczytana + ".");
    }
};

var ksiazka01 = new Ksiazka('Wszystko czerwone', 'Joanna Chmielewska', true);
ksiazka01.opiszKsiazke();

var ksiazka02 = new Ksiazka('Boso ale w ostrogach', 'Stanisław Grzesiuk', true);
ksiazka02.opiszKsiazke();

var ksiazka03 = new Ksiazka('Nad Niemnem', 'Eliza Orzeszkowa', false);
ksiazka03.opiszKsiazke();

var wszystkieKsiazki = [ksiazka01, ksiazka02, ksiazka03];
console.log(wszystkieKsiazki);

function iloscPrzeczytanych(wszystkieKsiazki) {
    var liczbaPrzeczytanych = 0;
    for (var i = 0; i < wszystkieKsiazki.length; i++) {
        if (wszystkieKsiazki[i].przeczytana == true) {
            liczbaPrzeczytanych = liczbaPrzeczytanych + 1;
        }
        console.log(wszystkieKsiazki[i].opiszKsiazke());
    };
    var liczbaNieprzeczytanych = wszystkieKsiazki.length - liczbaPrzeczytanych;

    console.log('Ilość przeczytanych książek: ' + liczbaPrzeczytanych);
    console.log('Ilość nieprzeczytanych książek: ' + liczbaNieprzeczytanych);
}

iloscPrzeczytanych(wszystkieKsiazki);