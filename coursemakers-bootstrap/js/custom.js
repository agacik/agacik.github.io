$(function() {

$("a, li").removeClass("waves-effect waves-light");

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
    
    $('.nav-link').hover(
        function(){ $(this).next('div.dropdown-menu-custom').addClass('show'), 
                    $(this).parent().addClass('show')},
        function(){ $(this).next('div.dropdown-menu-custom').removeClass('show'),
                    $(this).parent().removeClass('show')});
    $('div.dropdown-menu-custom').hover(
        function(){ $(this).addClass('show')},
        function(){ $(this).removeClass('show')});
    
    
    
});

