let score = "vinay";

console.log(typeof score);
console.log(typeof (score));

let valueInNUmber = Number(score)
console.log(typeof valueInNUmber);
console.log( valueInNUmber);
//if THE score is "33abc" the value wil be NAN
//if the score is "undefined" the value will be NAN
//if the score is "vinay" the value will be NAN;
//if the score is "NULL" the value will be 0;
//if the score is true the value will be 1;
//if the score is false the value will be 0;

////tables logic ///////

let number = 5;
for (let i = 1; i <= 10; i++) {
    // console.table([number + " * " + i + " = " + (number * i)]);
    let n = number * i;
    console.log(n);
}




