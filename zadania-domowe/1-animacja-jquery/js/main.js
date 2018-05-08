'use strict';
$(function () {

    $('#btn').click(function () {
        $('.kwadrat').animate({
            'left': '100px',
        }, 'slow');
        $('.kwadrat').animate({
            'width': '100px',
            'height': '100px',
        }, 3000, function () {
            $(this).addClass('background-color');

            setTimeout(function () {
                $('.kwadrat').html('<h2>Animacja zakończona</h2>')
            }, 5000);
        });

    });

});
