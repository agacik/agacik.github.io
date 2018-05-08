$(function(){
    'use strict';
    $('#btn-start').click(function(){
        $('p:last').insertBefore('p:first');
    })
    
    $('#btn-end').click(function(){
        $('p:first').insertAfter('p:last');
    })
    
});