alert("check whether a given positive number is a multiple of 3 or 7")
var number = Number(prompt('Enter the number'))
var check3 = number % 3
var check7 = number % 7

if(check3==0){
    document.getElementById('test6').innerText = ('true')
}
else if(check7==0){
    document.getElementById('test6').innerText = ('true')
}
else{
    document.getElementById('test6').innerText = ('false')
}