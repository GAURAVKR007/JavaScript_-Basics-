var money = prompt("Enter the Money to Purchase the milk [in INR]")
function getMilk(rs,cost_per_bottle) {
  // var Milk = (Dollar*79)/48;
    var Milk = Math.floor(rs/cost_per_bottle);
    console.log("You can get "+Milk+"L of Milk");
  return calcChange(rs,cost_per_bottle)
}

function calcChange(money,cost_per_bottle){
   return money%cost_per_bottle;
}
var remaining_money = getMilk(money,56);
console.log("The remaining money is : "+ remaining_money);
