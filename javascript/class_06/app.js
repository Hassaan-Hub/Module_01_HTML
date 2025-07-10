var country = prompt("Enter a country");
    
if(country === "Pakistan" || country === "India" || country === "china" || country === "Afghanistan"){
        alert("Country exist in Asia !")
}else{
    alert("Country doesn't exist in Asia !")
}


var chackMoney = prompt("If you have enough money?")
var chackVisa = prompt("if you have country Visa?")
var chackPassport = prompt("if you have a passport?")


if(chackMoney == "Yes" && chackVisa == "Yes" && chackPassport == "Yes"){
    alert("You are ready to Fly")
}else{
    alert("Yahin Raho Bhai jan !")
}


var num = prompt("Enter a Number")

if(num <= 0 ){
    alert("Please Enter a greater number")
}else{
    if (num % 3 === 0 && num % 5 === 0){
        alert("Fizz Buzz")
    }else if(num % 5 ===0){
        alert("Buzz")
    }else if(num % 3 === 0){
        alert("Fizz")
    }else{
        alert("Game Over")
    }
}