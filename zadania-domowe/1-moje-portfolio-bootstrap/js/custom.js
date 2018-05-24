'use strict';
$(function() {
    $(window).scroll(function() {
        var winTop = $(window).scrollTop();
        if (winTop >= 100) {
            $(".navbar").addClass("scroll");
        } else{
            $(".navbar").removeClass("scroll");
        }
    });
    
    $('nav a').click(function() {
        $('html, body').animate({
            
            scrollTop: $(this.hash).offset().top - 56}, 500);
    });
    
    $('.navbar-toggler-icon').click(function() {
        $('.navbar-toggler-icon i').toggleClass('fa-times');
    })
    
});