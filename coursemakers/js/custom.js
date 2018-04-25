$(function() {
    'use strict';
    $(window).scroll(function() {
        var winTop = $(window).scrollTop();
        if (winTop >= 30) {
            $("nav").addClass("main-menu-top");
        } else{
            $("nav").removeClass("main-menu-top");
        }
    });
});

$(function () {
    var showClass = 'show';

    $('input').on('checkval', function () {
        var label = $(this).prev('label');
        if(this.value !== '') {
            label.addClass(showClass);
        } else {
            label.removeClass(showClass);
        }
    }).on('keyup', function () {
        $(this).trigger('checkval');
    });
});