//Delete row - Start

var deleteButton = document.getElementsByClassName('delete-button');
for (var i=0; i < deleteButton.length; i++) {
    deleteButton[i].onclick = function() {
        row = this.parentNode.parentNode;
        row.remove();
    }
}

//Delete row - End
