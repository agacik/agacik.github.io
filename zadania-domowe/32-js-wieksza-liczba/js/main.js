var btn = document.querySelector('button')

btn.onclick = function () {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    if (num1 > num2) {
        console.log("Większą liczbą jest liczba " + num1);
        document.getElementById('num1').classList.add('wieksza');
        document.getElementById('num2').classList.remove('wieksza');
    } else {
        if (num1 == num2) {
            console.log("Te liczby są równe");
            document.getElementById('num1').classList.remove('wieksza');
            document.getElementById('num2').classList.remove('wieksza');
        } else {
            console.log("Większą liczbą jest liczba " + num2)
            document.getElementById('num2').classList.add('wieksza');
            document.getElementById('num1').classList.remove('wieksza');
        }
    }
    return
}
