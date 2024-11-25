alert("check about 50")

var number1 = Number(prompt('Enter the first number'))
var number2 = Number(prompt('Enter the second number'))
var total = number1 + number2

if(number1==50){
    document.getElementById('test5').innerText = ('true')
}
else if(number2==50){
    document.getElementById('test5').innerText = ('true')
}
else if(total==50){
    document.getElementById('test5').innerText = ('true')
}
else{document.getElementById('test5').innerText = ('false')}

