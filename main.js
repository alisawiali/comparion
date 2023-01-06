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




console.log("------Logical Operator---")

/*

Logical Operators منطقي
-- ! Not 
-- && And 
-- || or

*/

console.log(true); // true 
console.log(!true); // false
console.log(10 == "10"); // true
console.log(!(10 == "10"));  //false

console.log(10 == "10" && 10 > 8  || 10 > 10);

console.log(100  !== "100" || 10 >= 12);
console.log( 100 !== "100"  && 20 < 30);





console.log("-----if conditions -------")
let price = 100;
let dicount = true;
let country  = "Deutland";
let heimat = "berlin";
let rabat = 20;
let übernachten = "drei tage";
let age = 21;

if (dicount === false ){
    price -=  rabat;
}else if( heimat !== "berlin"){

    if( age >= 21 && übernachten === "vier tage"){
        price -= rabat;
    }else ( age === 21)
    price -= rabat;
} else if ( country !== "Deutland"){
    price -= rabat  +30 ;
}
else if( dicount === true){
    price -=  rabat;
}
console.log(price);

console.log("----Nested if conditions-------")

// nesdet bedeutet machen wir  if condition in dem if  z.b ^
