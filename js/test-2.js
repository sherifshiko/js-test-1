

alert("determine  whether a given year is a leap year or not")

var year = Number(prompt("Enter the year"));

var result= year % 4


if (result==0){
   document.getElementById('test2').innerText = (year+' this year is leap year')
   
}else{
    document.getElementById('test2').innerText = (year+' this year is not leap year')
    
}



