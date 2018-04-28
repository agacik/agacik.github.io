'use strict';
document.getElementsByTagName("type=['submit']").onclick = pobierzImie;

function pobierzImie(e) {
    e.preventDefault()
    var imie = document.getElementsByName("fname")[0].value;
    console.log("Imię wynosi: " + imie);
    var nazwisko = document.getElementsByName("lname")[0].value;
    console.log("Nazwisko wynosi: " + nazwisko);    
}
