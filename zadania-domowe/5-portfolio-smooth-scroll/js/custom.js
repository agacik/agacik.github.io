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
    
    $('nav a').click(function() {
        $('html, body').animate({
            
            scrollTop: $(this.hash).offset().top - 60}, 500);
    });
    
});