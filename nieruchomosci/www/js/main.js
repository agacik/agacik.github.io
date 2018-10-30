$(document).ready(function () {

    $(function () {
        $('.example-popover').popover({
            container: 'body'
        })
    })

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })

    document.getElementById("btn-wycena-submit").addEventListener("click", function (event) {
        event.preventDefault();

        var rodzajNieruchomosci = document.getElementById("rodzajNieruchomosci");
        var rodzajNieruchomosciWartosc = rodzajNieruchomosci.options[rodzajNieruchomosci.selectedIndex].value;
        var rodzajNiercyhomosciWynik = document.getElementById("rodzaj_nieruchomosci").innerHTML = "<strong>" + rodzajNieruchomosciWartosc + "</strong>";

        var powierzchniaNieruchomosci = document.getElementById("powierzchniaNieruchomosci").value;
        var powierzchniaNiercyhomosciWartosc = document.getElementById("powierzchnia_nieruchomosci").innerHTML = "<strong>" + powierzchniaNieruchomosci + "</strong>";

        var stanNieruchomosci = document.getElementById("stanNieruchomosci").value;
        var stanNiercyhomosciWartosc = document.getElementById("stan_nieruchomosci").innerHTML = "<strong>" + stanNieruchomosci + "</strong>";

        var kodNieruchomosci = document.getElementById("kodNieruchomosci").value;
        var kodNiercyhomosciWartosc = document.getElementById("kod_nieruchomosci").innerHTML = "<strong>" + kodNieruchomosci + "</strong>";

        var imieINazwisko = document.getElementById("imieINazwisko").value;
        var imieINazwiskoWartosc = document.getElementById("imie_i_nazwisko").innerHTML = imieINazwisko;

    });

//    $('#exampleModal').on('show.bs.modal', function (e) {
//        if (!data
//        
//            
//            
//        ) return e.preventDefault() // stops modal from being shown
//    })



});
