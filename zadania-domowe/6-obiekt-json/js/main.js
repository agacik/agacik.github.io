'use strict';

var jsonPracownicy = {
    "pracownicy":[
        {
            firstName: "Krystian", 
            lastName: "Dziopa"
        }, 
        {
            firstName: "Anna", 
            lastName: "Szapiel"},
        {
            firstName: "Piotr", 
            lastName: "Żmuda"}
    ]
}

jsonPracownicy.pracownicy.forEach( function(osoba, i){
    console.log("Index elementu tablicy: " + i + " - Imię pracownika: " + osoba.firstName + ", Naziwsko pracownika: " + osoba.lastName);
    
});
