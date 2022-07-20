// Program to print a pattern

// *
// **
// ***
// ****
// *****

// for however rows user wanted

  var rows = prompt("How many rows do you want");

  for(let i=1;i<=5;i++){
    for(let j=0;j<i;j++){
      console.log("* ");
    }
    console.log("\n");
  }
