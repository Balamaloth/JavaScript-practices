// 1. checking grades
 let marks = 85;
 if (marks >=90){
    console.log("grade: A+");
 }else if (marks >= 75){
 
console.log("garde: A");

 }
 else if(marks >=50){
    console.log("garde:B");
 }

 else{
    console.log("fail");
 }

// 2. temperature check 
let temp = 10;
if(temp >= 35){
    console.log("it's hot ");
}
 else if (temp >=  20) {
    console.log("it's warm");
 }
  else if ( temp >=10) {
    console.log("it's cool");
  }  
   else {
    console.log("it's cold ");
   }



                   // 3. time - based greeting 
   let hour =15;
   if ( hour < 12){
    console.log("good morning ");
   }
    else if (hour < 18){
        console.log("good afternoon");

    }
     else{
       console.log("good eveing");
     }


                     // 4. number comparison
     let num =0;
     if (num > 0){
        console.log("positive number");
     }
     else if (num <0){
        console.log("negative number");
     }

     else{
        console.log("zero");
     }


     // 5. age category
     let age =25;
     if (age < 13){
        console.log("child");
     }
     else if ( age <20){
        console.log("teenager");
     }
     else if(age < 60){
        console.log("adult");
     }
     else{
        console.log("senior citizen");
     }


     // 6. marks evaluation
     let score = 65;
     if (score >=90){
        console.log("excellent");
     }
     else if (score >=70){
        console.log("good");
     }
     else if ( score >= 50){
        console.log("average");

     }
     else{
        console.log("poor");
     }

     //  7. traffic light system 
     let signal = "yellow";
     if ( signal === "red"){
        console.log("stop");
     }
     else if (signal === "yellow"){
        console.log("get ready");
     }
     else if ( signal === "green"){
        console.log("go");
     }
     else{
        console.log("invalid signal");
     }


     // 8. checking discount eligiblity 
     let purchaseAmount = 1200;
     if ( purchaseAmount >=  2000){
        console.log("20% discount");
     }
     else if ( purchaseAmount >=1000){
        console.log("10% discount");
     }
     else if ( purchaseAmount >= 500){
        console.log("5% discount");
     }
     else{
        console.log("no discoutn");
     }

     // 9. day of the week 
     let day =7 ;
     if (day === 1 ){
        console.log("monday");
     }
     else if (day === 2 ){
        console.log("tuesday");
     }
     else if ( day === 3 ){
        console.log(" wednesday");
     }
     else if ( day === 4 ){
        console.log(" thursday");
     }
     else if (day === 5 ){
        console.log("friday");
     }
     else if(day === 6  ){
        console.log("saturday");
     }
     else{
        console.log("sunday");
     }

     // 10. exam result based oon marks 
     let result =45 ;
     if (result >=90){
        console.log("outstading");
     }
     else if (result >=75){
        console.log("very good ");
     }
     else if (result >=50){
        console.log("passed");
     }
     else{
        console.log("failed");
     }
