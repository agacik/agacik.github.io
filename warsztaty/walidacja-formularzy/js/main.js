'use strict';
//document.getElementById("wyslij").onclick = sprawdzImie;
//
//function sprawdzImie(e) {
//    e.preventDefault();
//    var imie = document.getElementById("name");
//    if (imie.value.trim > 0) {
//        console.log(imie);
//    }
//    else {
//        document.getElementById("name").nextSibling.innerHTML="<p>To pole jest wymagane</p>";
////        document.getElementById("name").createElement("<p>Niepoprawne imie</p>");
//    }
//};
//
//var submitButton = document.getElementById("wyslij");
//
//submitButton.onclick = function(e) {
//    e.preventDefault()
//    
//    validatorFormFields();
//}
//
//function     validatorFormFields() {
//    var nameTextBox = document.getElementById("name");
//    var emailTextBox = document.getElementById("email");
//    
//    if (nameTextBox.value.trim().length <=0) {
//        var errorMesageElement = document.createElement('p');
//        errorMesageElement.style.color = "red";
//        errorMesageElement.innerHTML = "Nie wpisano imienia!";
//        
//    }
//    if (emailTextBox.value.trim().length <=0) {
//
//    }
//    insertAfter(errorMesageElement, errorMesageElement);
//}
//
//function insertAfter(newNode, referentNode) {
//    referentNode.parentNode.insertBefore(newNode, referentNode.nextSibling);
//}

var lastCheckbox = document.getElementById("wszystkie-zgody");
var allCheckboxs = document.querySelectorAll("input[type=checkbox]");

lastCheckbox.onchange = function(e) {
    checkboxState(lastCheckbox.checked);
}

var submitButton = document.getElementById("wyslij");

function checkboxState(lastCheckboxState) {
    allCheckboxs[0].checked = lastCheckboxState;
    allCheckboxs[0].disable = lastCheckboxState;   
    
    allCheckboxs[1].checked = lastCheckboxState;
    allCheckboxs[1].disable = lastCheckboxState;
}

submitButton.addEventListener("click", validateForm)

function validateForm(e) {
    var textInputs = document.querySelectorAll("input[type=text]");
    
    for(var i = 0; i < textInputs.length; i++){
        if (textInputs[i].value.trim().length === 0){
        e.preventDefault();
        var warning = document.createElement('p');
        warning.id = "alert -" + i;
        warning.innerHTML = "To pole jest wymagane";
        textInputs[i].nextSibling = warning;
        } else{
            var nextElement = textInputs[i].nextElementSibling;
            
            if(nextElement.id === "alert -" + i) {
               nextElement.parentElement.removeChild(nextElement)
            }
        }
    }
    
   
    
}




if(allCheckboxs[0].checked === false) {
    e.preventDefault();
    var warning = document.createElement('p');
    
    warning.id = "alert-checkbox";
    warning.innerHTML = "To pole jest wymagane";
    
    allCheckboxs[0].nextSibling = warning;
}  else {
    
}
