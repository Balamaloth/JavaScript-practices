// var 
/* var is the old way of declaring variables in JavaScript (before ES6 in 2015).
 It’s still valid today but not recommended for modern code because it has some confusing behaviors */

 var name =  "bala";
 console.log(name); // bala 

 /*    === var ===
  can re-declare and re-assign */
  var fruit = " apple ";
  var fruit = " mango "; // re-declared (allowed)
  console.log(fruit); // mango

   // re-assign 
   var color = "red";
   color = " blue" // re-assignned (allowed)
   console.log(color); // blue

   // var is a function-scoped, hoisted, re-declarable, and re-assignable