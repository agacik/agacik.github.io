'use strict';
$(function() {
    $(window).scroll(function() {
        var winTop = $(window).scrollTop();
        if (winTop >= 100) {
            $("#menu, #menu > ul > li > a").addClass("scroll");
        } else{
            $("#menu, #menu > ul > li > a").removeClass("scroll");
        }
    });
});