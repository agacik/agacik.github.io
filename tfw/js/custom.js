$(document).ready(function () {
        $('#city').val('wroclaw').click(function(){
            $('#tfw-promo').load( 'https://agacik.github.io/tfw/wroclaw.html' );
        });
    //remove this });
        $('#city').val('gdynia').click(function(){
            $('#tfw-promo').load( 'https://agacik.github.io/tfw/gdynia.html' );
        });
    });