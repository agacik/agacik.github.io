'use strict';
document.getElementById("btn").addEventListener("click", 

function ustawTlo() {
    var paragraf01 = document.getElementById("first_paragraf");
    paragraf01.style.background = "red";
    var paragraf02 = document.getElementById("second_paragraf");
    paragraf02.classList.add("green");
});

document.getElementById("btn_remove").onclick = usunTlo;

    function usunTlo() {
    var paragraf01 = document.getElementById("first_paragraf");
    paragraf01.classList.remove("red");
    var paragraf02 = document.getElementById("second_paragraf");
    paragraf02.classList.remove("green");
}