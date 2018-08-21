//Delete row - Start

var delateButton = document.getElementsByClassName('delate-button');
for (var i=0; i < delateButton.length; i++) {
    delateButton[i].onclick = function() {
        row = this.parentNode.parentNode;
        row.remove();
    }
}

//Delete row - End
