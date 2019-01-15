// Initialize Firebase
var config = {
    apiKey: "AIzaSyC_59QKBzylz5ylMpYtK3ZiKIiSGPpJBMg",
    authDomain: "valkea.firebaseapp.com",
    databaseURL: "https://valkea.firebaseio.com",
    projectId: "valkea",
    storageBucket: "",
    messagingSenderId: "1024658846862"
  };
  firebase.initializeApp(config);

  var messageRef = firebase.database().ref('krople');
          

 document.getElementById('january-form').addEventListener('submit', submbitForm);
 

  
// FireBase Conect
 function submbitForm(e){
     e.preventDefault();


     var today  = new Date();
     var january_date = today.toLocaleDateString("en-US");
     var january_gender = document.querySelector('input[name=gender]:checked').value;
     var january_wiek = document.querySelector('input[name=wiek]:checked').value;
     var january_opcja = document.querySelector('input[name=pora]:checked').value;

     saveMessage(january_date, january_gender, january_wiek, january_opcja);

     document.querySelector('#january-form').style.display = 'none';
     document.querySelector('.january-thankfull').style.display = 'block';
 }



 function getRadioValue(id){
     return document.getElementById(id).value;
 }

 function saveMessage(january_date, january_gender, january_wiek, january_opcja){
     var newMessageRef = messageRef.push();
     newMessageRef.set({
        january_date: january_date,
        january_gender: january_gender,
        january_wiek: january_wiek,
        january_opcja: january_opcja,
     })
 }





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
            
            scrollTop: $(this.hash).offset().top - 80}, 500);
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
    
    
    
  // Porfolio - uses the magnific popup jQuery plugin

  $('.portfolio-popup').magnificPopup({
    type: 'image',
    removalDelay: 300,
    mainClass: 'mfp-fade',
    gallery: {
        enabled: true,
        navigateByImgClick: true,
        arrowMarkup: 'none',
    },
    zoom: {
        enabled: true,
        duration: 300,
        easing: 'ease-in-out',
        titleSrc: 'title',
        tCounter: false,
        opener: function (openerElement) {
        return openerElement.is('img') ? openerElement : openerElement.find('img');
      }
    }
  }); 
    
    
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
      
});
