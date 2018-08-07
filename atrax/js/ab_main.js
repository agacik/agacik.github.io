'use strict';
$(function() {
//    ScrollMenu
    $(window).scroll(function() {
        var winTop = $(window).scrollTop();
        if (winTop >= 30) {
            $(".ab_navigation").addClass("ab_navigation_scroll");
        } else{
            $(".ab_navigation").removeClass("ab_navigation_scroll");
        }
    });
    
    
//    SmoothScroll
    $('.ab_navigation a').click(function() {
        $('html, body').animate({
            
            scrollTop: $(this.hash).offset().top - 55}, 500);
    });

    
//    Back To Top Arrow
    $(window).scroll(function() {
        var winTop = $(window).scrollTop();
        if (winTop >= 250) {
            $(".ab_backtotop").addClass("ab_backtotop_on");
        } else{
            $(".ab_backtotop").removeClass("ab_backtotop_on");
        }
    });
    
    
    
    
//    Hamburber Menu Open / Close
    $('.ab_navigation_hamburger, .ab_navigation_toggle').click(function() {
        $('.ab_navigation_wrapper').toggleClass('ab_navigation_on');
    });
    
    
    
});
