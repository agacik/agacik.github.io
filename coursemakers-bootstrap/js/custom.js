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
    
});

$(document).ready(function(){
    $('.navbar-toggler-icon').click(function(){
        $(this).toggleClass('open');
    });
}); 