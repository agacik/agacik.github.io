$(document).ready(function () {
        $('#city').val('wroclaw').click(function(){
            $('#tfw-promo').load( 'https://agacik.github.io/tfw/wroclaw.html' );
        });
    //remove this });
        $('#research').click(function(){
            $('#content').load( 'about.html' );
        });
    });