'use strict';
$(function() {
    $(window).scroll(function() {
        var winTop = $(window).scrollTop();
        if (winTop >= 30) {
            $(".navbar").addClass("scroll");
        } else{
            $(".navbar").removeClass("scroll");
        }
    });
    
    $('nav a').click(function() {
        $('html, body').animate({
            
            scrollTop: $(this.hash).offset().top - 66}, 500);
    });
    
    $('.navbar-toggler').click(function() {
        $('.navbar-toggler i').toggleClass('fa-times');
    })
    
});