var year = prompt("Enter the year")
var isLeap = false;
if(year%4===0 && year%100!==0){
    isLeap = true;
} else if(year%400===0){
    isLeap = true;
} else{
    isLeap = false;
}

if(isLeap){
  console.log(year+" is a Leap year")
} else{
  console.log(year+" is not a Leap year")
}
