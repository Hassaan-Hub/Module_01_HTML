// = → Assignment
// 👉 It means: “put this value into the variable.”

// == → Comparison (loose)
// 👉 It means: “Are these two values equal?”
// 👉 It ignores type (it converts "6" to 6 internally)

// === → Comparison (strict)
// 👉 It means: “Are these exactly the same?”
// 👉 It checks both value and type



var fullname = "Mark"
if(fullname === "Mark"){
    console.log("Mark is in the class!");
}

var number = 6
//    ( ture & false)
if(number === "6"){    // its must
    console.log("This is Num is 06!");
    
}else if(number == "6"){
    console.log("This is Num is 16!");
    
}


var name1 = "hello"
if(name1 === "hello"){
    console.log("hello guys my new vloge!");
    
}

var num1 = 23;
if(num1 >= 23){
    console.log("true!");
    
}
var num = 23;
if(num <= 23){
    console.log("true!");
    
}


var condition = "next"
if(condition == "next"){
    console.log("Hackathon Postpone!");
    
}

var condition = "hackathon"
if(condition == "hackathon"){
    console.log("Hackathon Postpone!");
}else{
    console.log("Hackathon is on time!");
    
}

if(condition == "sunny"){
    console.log("Hackathon is on time!");    
}

var country = prompt("Where do you live?")
if(country == "Pakistan"){
    alert("Pakistan zindabad")
}else if(country == "Dubai"){
    alert("apke to maze")
}else if(country == "America"){
    alert("Nice country")
}else alert("Jeye Saad Hussain Rizwi")
