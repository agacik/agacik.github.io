//Ładowanie plików miast na podstawie wyboru z selecta

$(document).ready(function () {
    $('#city').change(function () {
        var citySelected = $(this).find(":selected").val();
        if ($(this).find(":selected").val() == 'gdansk') {
            $('#tfw-promo').load('https://agacik.github.io/tfw/gdansk.html');
        };
        if ($(this).find(":selected").val() == 'gdynia') {
            $('#tfw-promo').load('https://agacik.github.io/tfw/gdynia.html');
        };
        if ($(this).find(":selected").val() == 'kielce') {
            $('#tfw-promo').load('https://agacik.github.io/tfw/kielce.html');
        };
        if ($(this).find(":selected").val() == 'krakow') {
            $('#tfw-promo').load('https://agacik.github.io/tfw/krakow.html');
        };
        if ($(this).find(":selected").val() == 'lodz') {
            $('#tfw-promo').load('https://agacik.github.io/tfw/lodz.html');
        };
        if ($(this).find(":selected").val() == 'poznan') {
            $('#tfw-promo').load('https://agacik.github.io/tfw/poznan.html');
        };
        if ($(this).find(":selected").val() == 'szczecin') {
            $('#tfw-promo').load('https://agacik.github.io/tfw/szczecin.html');
        };
        if ($(this).find(":selected").val() == 'warszawa') {
            $('#tfw-promo').load('https://agacik.github.io/tfw/warszawa.html');
        };
        if ($(this).find(":selected").val() == 'wroclaw') {
            $('#tfw-promo').load('https://agacik.github.io/tfw/wroclaw.html');
        };
    });
});
