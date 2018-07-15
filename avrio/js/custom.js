'use strict';
$(function () {

//    Show Hide Mobile Menu
$('.menu__mobile').click(function() {
    $('.menu').show()
})
    
$('.menu').click(function() {
    $('.menu').hide()
})    

    
//    Show Hide Mobile Menu Icon
    $('.menu__mobile--open').click(function () {
        $(this).fadeOut(500);
        $('.menu__mobile--close').fadeIn(1500);
    });
    
        $('.menu__mobile--close').click(function () {
        $(this).fadeOut(500);
        $('.menu__mobile--open').fadeIn(1500);
    })
    

    //    Sport Animation
    if ($(window).width() > 768) {
        $('.sporty__item').hover(function () {
            $(this).css('width', '30%');
            $(this).next().css('width', '15%');
            $(this).prev().css('width', '15%');
        }, function () {
            $(this).css('width', '20%');
            $(this).next().css('width', '20%');
            $(this).prev().css('width', '20%');
        });

        $('.sporty__item:first-of-type').hover(function () {
            $(this).css('width', '25%');
            $(this).next().css('width', '15%');
        }, function () {
            $(this).css('width', '20%');
            $(this).next().css('width', '20%');
        });

        $('.sporty__item:last-of-type').hover(function () {
            $(this).css('width', '25%');
            $(this).prev().css('width', '15%');
        }, function () {
            $(this).css('width', '20%');
            $(this).prev().css('width', '20%');
        });
    }
});
