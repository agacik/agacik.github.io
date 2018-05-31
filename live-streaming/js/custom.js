'use strict';
$(function() {
//    ScrollMenu
    $(window).scroll(function() {
        var winTop = $(window).scrollTop();
        if (winTop >= 30) {
            $(".navbar").addClass("scroll");
        } else{
            $(".navbar").removeClass("scroll");
        }
    });
    
//    SmoothScroll
    $('nav a').click(function() {
        $('html, body').animate({
            
            scrollTop: $(this.hash).offset().top - 66}, 500);
    });
    
//    Hamburber Menu Close Icon
    $('.navbar-toggler').click(function() {
        $('.navbar-toggler i').toggleClass('fa-times');
    })
    
    
    
//    View more lesson
    var jsonUrl = "https://jsonplaceholder.typicode.com/users";
    var output = $('.lesson__more');
    var myHTML = "";
    
    var getData = function () {
        $.ajax({
            url: jsonUrl,
            dataType: 'json',
            success: function(response){
                response.forEach(function(element, i){
                    myHTML = myHTML + "<div class='col-sm-12 lesson__content'><div class='row'>";
                        myHTML = myHTML + "<div class='col-sm-1'>";
                            myHTML = myHTML + "<h2 class='lesson__content__number'> " + element.id + "</h2></div>";
                            myHTML = myHTML + "<div class='col-sm-11 lesson__content__wrapper'>" + "<h2 class='lesson__content__title'>" + element.name + "</h2>";
                            myHTML = myHTML + "<p class='lesson__content__paragraph'>" + element.email + "</p>";
                                myHTML = myHTML + "<ul class='lesson__content__point'>";
                                    myHTML = myHTML + "<li class='lesson__content__list'> " + element.address.street + "<span class='lesson__content__duration'> (" + element.company.name + ")</span></li>";
                                myHTML = myHTML + "</ul>";
                        myHTML = myHTML + "</div>";
                    myHTML = myHTML + "</div>";
                    myHTML = myHTML + "</div>";
                });
                output.html(myHTML);
            }
        });
        

        
    };
    
    $('.lesson__button--more').one('click', function(e){
        getData();
        $(this).hide();
    });
    

//    FAQ - Show Hide Answer
    $('.faq__content__question').click(function() {
        $(this).toggleClass('faq__content__question--show').next().toggleClass('faq__content__answer--show');
    })    
    
});
