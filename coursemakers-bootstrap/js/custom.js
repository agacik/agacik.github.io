$(function() {

//Remove Waves Effect in MDBootstrap    
$("a, li").removeClass("waves-effect waves-light");

    
//Show/Hidden Label Script    
$(function () {
    'use strict';
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
    
    
//Hover Dropdown Menu Script    
    $('.nav-link').hover(
        function(){ $(this).next('div.dropdown-menu-custom').addClass('show'), 
                    $(this).parent().addClass('show')},
        function(){ $(this).next('div.dropdown-menu-custom').removeClass('show'),
                    $(this).parent().removeClass('show')});
    $('div.dropdown-menu-custom').hover(
        function(){ $(this).addClass('show')},
        function(){ $(this).removeClass('show')});
    
    
    
    
//Filter in site Author Script    
    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');

        if(value == "all")
        {
            $('.filter').fadeIn('1000');
        }
        else
        {
            $(".filter").not('.'+value).fadeOut('3000');
            $('.filter').filter('.'+value).fadeIn('3000');

        }
    });
    
    
    $('.filter-button').click(
        function(){ $(this).siblings().removeClass('filter-active')});
    $('.filter-button').click(
        function(){ $(this).addClass('filter-active')});
        

    
    
//FAQ Animate
    $('.faq-quesion').click(
        function(){ $(this).next().toggleClass('faq-active')});

    
    
//Smooth Scrool
    $('a[href*="#"]:not([href="#"])').click(function(){
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top}, 500, )
    });
    
    
    
//Animate backgroung
    $(window).scroll(function() {
        $('#bg-dot-big').animate({
            backgroundPositionY: -(window.pageYOffset)
        }, 0).fadeIn(0);
        
        $('#bg-line').animate({
            backgroundPositionY: -(window.pageYOffset)
        }, 100);
    })
    
//    $(window).scroll(function() {
//        var winTop = $(window).scrollTop()
//        if (winTop >= 30) {
//            $("#bg-dot-big").css({
//                '-webkit-animation': 'slide 20s linear infinite'
//            })
//        } else {
//            $("#bg-dot-big").css({
//                '-webkit-animation': 'slide_down 20s linear infinite'
//            })
//        } });
    
    
});

