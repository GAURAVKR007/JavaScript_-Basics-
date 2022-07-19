var weight = prompt("Enter your weight in Kg");
var height = prompt("Enter your height in meters");
function bmiCalculator(weight,height) {
  return Math.round((weight/(Math.pow(height,2))));
}

var bmi = bmiCalculator(weight,height);
console.log("Your BMI index is : "+bmi)
