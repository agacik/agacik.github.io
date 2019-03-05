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


  

          
// January Qiuz - START
 var januaryRef = firebase.database().ref('krople').child('january');
 
 document.getElementById('january-form').addEventListener('submit', submbitJanuary);
 
// FireBase Conect
 function submbitJanuary(e){
     e.preventDefault();

     var today  = new Date();
     var january_date = today.toLocaleDateString();
     var january_time = today.toLocaleTimeString();
     var january_gender = document.querySelector('input[name=gender]:checked').value;
     var january_wiek = document.querySelector('input[name=wiek]:checked').value;
     var january_opcja = document.querySelector('input[name=pora]:checked').value;

     saveJanuary(january_date, january_time, january_gender, january_wiek, january_opcja);

     document.querySelector('#january-form').style.display = 'none';
     document.querySelector('.january-thankfull').style.display = 'block';

     
     var mostViewedPosts = firebase.database().ref('krople');

     $('#pills-january').append(mostViewedPosts);


 }


// Get Value of Input ID
 function getRadioValue(id){
     return document.getElementById(id).value;
 }

 // FireBase Add
 function saveJanuary(january_date, january_time, january_gender, january_wiek, january_opcja){
     var newMessageRef = januaryRef.push();
     newMessageRef.set({
        january_id: january_time,
        january_date: january_date,
        january_gender: january_gender,
        january_wiek: january_wiek,
        january_opcja: january_opcja,
     }, function(error) {
        if (error) {
          // The write failed...
          $('.january-thankfull').text('Nastąpił błąd połączenia z bazą danych. Spróbuj ponownie.');
        } else {
          // Data saved successfully!

          const newElement = 
          $(`
         <div>
         <h3 class="mb-5">Dziękuję za odpowiedź</h3>
         <h4>Twoje odpowiedzi</h4>
             <span class="d-block"> <strong>${'Data wypelniania ankiety: '}</strong> ${january_date}</span>
             <span class="d-block"> <strong>${'Godzina wypełniania ankiety: '}</strong>${january_time} </span>
             <span class="d-block"> <strong>${'Płeć z ankiety: '}</strong> ${january_gender} </span>
             <span class="d-block"> <strong>${'Wiek z ankiety: '}</strong> ${january_wiek} </span>
             <span class="d-block"> <strong>${'Pytanie z ankiety: '}</strong> ${january_opcja} </span>
         </div>
         `);

          $('.january-thankfull').append(newElement);
        }
      }
     )
 }
 // January Qiuz - END




 // February Qiuz - START
 var februaryRef = firebase.database().ref('krople').child('february');

 document.getElementById('february-form').addEventListener('submit', submbitForm);
 
// FireBase Conect
 function submbitForm(e){
     e.preventDefault();

     var today  = new Date();
     var february_date = today.toLocaleDateString();
     var february_time = today.toLocaleTimeString();
     var february_gender = document.querySelector('input[name=february-gender]:checked').value;
     var february_wiek = document.querySelector('input[name=february-wiek]:checked').value;
     var february_opcja = document.querySelector('input[name=february-pora]:checked').value;

     saveMessage(february_date, february_time, february_gender, february_wiek, february_opcja);

     document.querySelector('#february-form').style.display = 'none';
     document.querySelector('.february-thankfull').style.display = 'block';
 }


// Get Value of Input ID
 function getRadioValue(id){
     return document.getElementById(id).value;
 }

 // FireBase Add
 function saveMessage(february_date, february_time, february_gender, february_wiek, february_opcja){
     var newMessageRef = februaryRef.push();
     newMessageRef.set({
        february_id: february_time,
        february_date: february_date,
        february_gender: february_gender,
        february_wiek: february_wiek,
        february_opcja: february_opcja,
     })
 }
 // February Qiuz - END



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




const leadingZero = function(element) {
    if (element < 10) return element = "0" + element;
    return element;
}

const showCount = function() {
    const currentYear = (new Date).getFullYear();
    const month = 1;
    const day = 18;
    const dateToday = new Date();

    //rok, miesiąc, dzień, godzina, minuta
    const uberImportantDate = new Date(currentYear, month-1, day, 9, 30);
    const msInADay = 24 * 60 * 60 * 1000; //1 dzień w milisekundach - to w nich przecież zwracany czas metodą getTime

    const timeDifference = (uberImportantDate.getTime() - dateToday.getTime());

    const eDaysToDate = timeDifference / msInADay;
    const daysToDate = Math.floor(eDaysToDate);

    //musimy tutaj sprawdzić, czy powyższa zmienna nie jest 0,
    //bo inaczej poniżej byśmy mieli % 0 czyli dzielenie przez 0
    if (daysToDate < 1) {
        daysToDateFix = 1;
    } else {
        daysToDateFix = daysToDate;
    }

    const eHoursToDate = (eDaysToDate % daysToDateFix)*24;
    const hoursToDate = Math.floor(eHoursToDate);

    const eMinutesToDate = (eHoursToDate - hoursToDate)*60;
    const minutesToDate = Math.floor(eMinutesToDate);

    const eSecondsToDate = Math.floor((eMinutesToDate - minutesToDate)*60);
    const secondsToDate = Math.floor(eSecondsToDate);

    // const tekst = 'Do moich kolejnych urodzin pozostało: '
    //         +daysToDate+' dni, '
    //         +hoursToDate+ ' godzin, '
    //         +minutesToDate+ ' minut i '
    //         +leadingZero(secondsToDate)+' sekund';

    // const element = document.getElementById('pills-february');
    // const elementTabs = document.getElementById('pills-home-tab');
    const element = $('#pills-profile-tab-february');
    const elementTabs = $('#pills-profile-tab-february').children('#pills-home-tab');
    const elementContent = $('#pills-february');
    
    

    //jeżeli czas się skończył
        const timeDiff = uberImportantDate - dateToday;
        if (timeDiff < 0) {;
            elementTabs.classList.add('disabled');
        } else {
            // element.innerHTML = tekst;
            elementTabs.addClass('active show');
            element.siblings().children().removeClass('active show');
            elementContent.addClass('active show');
            elementContent.siblings().removeClass('active show');

            setTimeout(function() {
                showCount()
            }, 500);
        }
    }


showCount();

$('#pills-home-tab').click(function(){
    $(this).parent().siblings().children().removeClass('active show');
    console.log(this);
    $(this).children().addClass('active show');
    $(this).parent().siblings().children().removeClass('active show');
});