$(function () {
    'use strict';

    $('#count-sum').click(function () {
        var suma = 0;
            $('.salary').each(function () {
                suma = suma + parseFloat( $(this).text() );
            });
        $('#sum').text(suma);
    });
});
