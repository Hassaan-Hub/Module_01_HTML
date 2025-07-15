// var date = new Date()
// console.log(date);

// console.log(date.getDay());
// console.log(date.getMonth());
// console.log(date.getDate());
// console.log(date.getFullYear());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());

var weekdays = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thusday" , "Friday" , "Seturday"];

var date = new Date();
console.log(weekdays[date.getDay()]);

var month = ["Jan" , "Feb" , "March" , "April" , "May" , "Jun" , "Jul" , "Aug" , "set", "Oct", "Nov" , "Dec"];

var date = new Date();
console.log(month[date.getMonth()]);

console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());

console.log(Math.floor(date.getTime() / (1000 * 60 * 60 * 24 * 365.25)));


var doomsday = new Date("Jul 17,2025");
console.log(doomsday);

var currms = date.getTime();
var dmdms = doomsday.getTime();

var dfms = dmdms - currms;
console.log(dfms / (100 * 60 * 60 * 24 * 365.25));


var date = new Date()
date.getMonth(7)
date.getDate(16)
date.getFullYear(2025)
date.getHours(0)
date.getMinutes(55)
date.getSeconds(23);

console.log(date.toString());
console.log(date.toLocaleDateString());
console.log(date.toISOString());
console.log(date.toLocaleString());
console.log(date.toJSON());
console.log(date.toTimeString());