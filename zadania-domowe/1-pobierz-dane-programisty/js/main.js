'use strict';
$(function () {

    $('#btn').click(function (e) {
        e.preventDefault;
        
        $.ajax({
            url: 'https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php',
            dataType: "json",
            success: function(osoba, i){
                $('#btn').after('<div id="dane-programisty"></div>');
                $('#dane-programisty').html('<p>Firma: ' + osoba.firma + '</p><p>Imię i nazwisko: ' + osoba.imie + ' ' + osoba.nazwisko + '</p><p>Zawód: ' + osoba.zawod + '</p>')
                }
            }
        ); 
    });
});
