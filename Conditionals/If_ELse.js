  // if-esle statements Syntax

  var random = Math.random();
    random = Math.floor((random * 100)+1);

console.log("Random number is : "+random);

if(random > 50){
  console.log(random+" is greater than 50");
}else{
  console.log(random+" is smaller than 50");
}

if(random === 50){
  console.log(random+" is equal to 50");
}

 //  comparators in JavaScript

      //   1. ===     --> Check the equality and also consider data-type
      //   2. !==
      //   3. ==      --> Check the equality but doesn't consider check the data-type
      //   4. >
      //   5. <
      //   6. >=
      //   7. <=

      // Combining comparators

      //   1. &&     --> AND operator
      //   2. ||     --> OR operator
      //   3. !      --> Not operator
