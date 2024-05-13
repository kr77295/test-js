// primitive 

/*7 types: 
string, 
boolean,
 number, 
 null, 
 undefined,
 symbol,
 bigint */
const Score = 100
 const scoreValue = 100.3
 const isLoggedIn = false
 const outsideTemperature = null
 let userEmail;
 const id = Symbol('123');
 const anotherId = Symbol('123')
 
 //non primitive - referance
/* arrays, objects, functions */

const heros = ["hulk", "ironman", "loki"];
let myObj = {
    name: "vinay",
    age: 26
}
const myFunction = function () {
    console.log("Hello world");
}
 console.log(typeof Score ); // number
 console.log(typeof scoreValue );// number
 console.log(typeof isLoggedIn );// boolean
 console.log(typeof outsideTemperature );//object
 console.log(typeof userEmail );//undefined
 console.log(typeof heros );//object
 console.log(typeof myObj );//object
 console.log(id === anotherId );//false
 console.log(id == anotherId );//false


