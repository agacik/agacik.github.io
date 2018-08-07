(function(){
    console.log('Witamy na Campie 2018! ');
    
    const button = document.querySelector('#go');
    const input = document.querySelector('#input');
    const result = document.querySelector('#result');
    
    button.addEventListener('click', () => {
        console.log('Click', input.value);
        result.innerText = input.value;
    })
})();
