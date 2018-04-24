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