'use strict';

var paragraf = document.getElementById('opis');
var przycisk = document.querySelector('button');

przycisk.onclick = function(){
    paragraf.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, sint.';
}