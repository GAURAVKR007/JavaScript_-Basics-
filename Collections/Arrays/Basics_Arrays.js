  // Greet the guest which are present in the array
var list = ["Gaurav", "Parveer", "Mandeep", "Mihir", "Arvind", "Harsh", "Aman"];

var name = prompt("What is Your Name");
var first = name.slice(0,1);
first = first.toUpperCase();
var rest = name.slice(1,name.length).toLowerCase();
var fullName = first+rest;
if(list.includes(fullName)){
  alert("Welcome to the party")
} else {
  alert("You are not invited")
}
