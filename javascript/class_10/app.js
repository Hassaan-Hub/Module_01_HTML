var cityName = prompt("Enter your City Name" , "Karachi").toUpperCase() 

cityName = cityName.toLowerCase();

console.log(cityName);

var cities = ["islamabad", "lahore", "karachi", "peshawar", "quetta"];

for(var i = 0; i < cities.length; i++){
    if(cityName == cities[i]){
        alert("City is Found")
    }else{
        alert("City is Not Found")
    }
}