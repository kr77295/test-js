const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);

//concat method


// const allHeros = marvel_heros.concat(dc_heros)

// console.log("marvel===> ",allHeros)

//spread operator

const allNewHeros = [...dc_heros,...marvel_heros]


//console.log("allNewHeros ==>",allNewHeros);4


const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = anotherArray.flat(Infinity)
//console.log("real_another_array====> ",real_another_array);


console.log(Array.isArray("vinay"));//checking if its the Array
console.log(Array.from("vinay"));//for converting to Array
console.log(Array.from({name:"vnay"}));//intresting


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));










 