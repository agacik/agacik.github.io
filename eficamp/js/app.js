(function(){
    console.log('Witamy na Campie 2018! ');
    
    const button = document.querySelector('#go');
    const other = document.querySelector('#other');    
    const input = document.querySelector('#input');
    const result = document.querySelector('#result');
    const close = document.querySelector('#close')
    
    button.addEventListener('click', () => {
        console.log('Click', input.value);
        result.innerText = input.value;
        input.value = "";
        input.placeholder = 'Hasło';
        close.style.display = "inline-block";
        other.style.visibility = "visible";
    })
     
})();
