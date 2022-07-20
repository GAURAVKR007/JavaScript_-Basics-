function fibonacciGenerator (n) {
    var arr = [];
    var a = 0;
   
   arr.push(a);
   if(n===1){
     return arr;
   }
   
     var b = 1;
   arr.push(b);
 
   if(n===2){
     return arr;
   }
     var c;
 
     for(let i = 0;i<n-2;i++){
         c = a+b;
         b = c;
         a = b;
 
         arr.push(c);
 
     }
 
     return arr;
     
 }
 
 fibonacciGenerator(2);
 