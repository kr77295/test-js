let score = "vinay";

// console.log(typeof score);
// console.log(typeof (score));

let valueInNUmber = Number(score)
// console.log(typeof valueInNUmber);
// console.log( valueInNUmber);
//if THE score is "33abc" the value wil be NAN
//if the score is "undefined" the value will be NAN
//if the score is "vinay" the value will be NAN;
//if the score is "NULL" the value will be 0;
//if the score is true the value will be 1;
//if the score is false the value will be 0;

//in conversion logic for boolean.
 // 1 => true ; 0 => false
 //""=> false
 //
 //"string"=> true


////tables logic ///////

let number = 5;
for (let i = 1; i <= 10; i++) {
    // console.table([number + " * " + i + " = " + (number * i)]);
    let n = number * i;
    // console.log(n);
}

// *****************operations *******************//

let str1 = "hello";
let str2 = " vinay";

let str3 = str1 + str2;
// console.log(str3)

// console.log("1" + 2);
// console.log(1 +"2");
// console.log("1" + "2");
// console.log(1 + 2 + "2");
// console.log("1" + 2 + 2);
// console.log(+true);
// console.log(+"");


let num1, num2, num3

num1 = num2 = num3 = 2 + 2


let gameCounter = 100
++gameCounter;
// console.log(gameCounter);

// console.log("2">1);// true
// console.log("02">1)//true 

// console.log(null > 0) //false;
// console.log(null == 0) //false;
// console.log(null >= 0) //true;  

/* null is converted into 0 and then the conversin happems
so the log gives the true */

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);   /*false*/
console.log(undefined <= 0);
console.log(undefined >= 0);

// === 

console.log("vinay","2" === 2);
 /* it checks very stricty like even the datatype is also checked, 
so we get the log as false because both are differnet datataype */ 
console.log("vinay","2" == 2);
/* this wont ckeck very strictly it just checks the value is same and gives the result 
here in the console we get the output as true , it doesnot check the datatype */
 