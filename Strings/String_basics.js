// count no. of Characters
var count = prompt("What is your name")
alert("Characters typed : "+count.length);

// var count = prompt("What is your name")
// var total = 200;
// alert("Characters typed : "+count.length+" Out of : "+total);
// alert("You still had "+(total-count.length)+" Characters left");

// How to Capitalize Strings

var name = prompt("What is Your Name : ");
var first = name.slice(0,1);
first = first.toUpperCase();
var rest = name.slice(1,name.length).toLowerCase();
alert("Hello "+first+rest);
