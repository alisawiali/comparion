console.clear();
console.log("-------Comparison Operation--------") // مقارنة
/*
    == Equal متساوي
    != Not Equal غير متساوي


    === Identical تطابق
    !== Not Identical لم تكن متطابقة

     > Larger  أكبر
     <= Larger Than or Equal أكبر من أو يساوي

      < Smaller Than  اصغر من
      <= Smaller Than or equal أصغر من أو يساوي
*/


console.log( 100 == "100"); // compare value  equal  ----> true
console.log(-100 == "-100"); // compare value only ---> true

console.log(100 != "100"); // false 
console.log(100 === "100");// false  compare value +  type

console.log(100 !== "100"); // true  becouse not identical
console.log( 100 !== 100); // flase becouse nicht right, becouse we have 100 seem


console.log( 10 > 20);
console.log( 10 > 100);
console.log( 10 >= 10);

console.log( 10 < 20);
console.log( 30 < 30);
console.log( 30 <= 30);


console.log( "Omer".length === "Imad".length);