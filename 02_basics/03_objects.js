// const tinderUser = new Object() singleton object
const  tinderUser= {};// non single ton object
 tinderUser.id = "123acv"
 tinderUser.name = "sammy"
 tinderUser.isLoggedIn = false
//console.log(tinderUser);


//nested objects
const regularUser = {
    email : "vinay.kr@google.com",
    fullname:{
        userFullName : {
            firstName: "vinay",
            lastName:"kr"
        }
    }
}
 /* object assign ..syntax is const obj = object.assign(target, source)
 const obj3 = Object.assign({},obj1,obj2); 
 here empty parenthesis acts as an target and ojs acts are sources
*/
const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }
const obj4 = { 5: "c", 6: "d" }
//const obj3 = Object.assign({},obj1,obj2,obj4);


const obj3 = {...obj1,...obj2,...obj4}
// console.log(obj3);


const users = 
   [ 
    {
        id:1,
        email:"vkr69611@gmail.com"
    },
   {
        id:2,
        email:"vkr69611@yahoo.com"
    },
    {
        id:3,
        email:"vkr69611@google.com"
    }
]

//console.log(users[2].email,"(users[1].email)");


// console.log(Object(tinderUser));/*{ id: '123acv', name: 'sammy', isLoggedIn: false }*/
// console.log(Object.keys(tinderUser));/*[ 'id', 'name', 'isLoggedIn' ]*/
// console.log(Object.values(tinderUser));/*[ '123acv', 'sammy', false ]*/
// console.log(Object.entries(tinderUser))//[ [ 'id', '123acv' ], [ 'name', 'sammy' ], [ 'isLoggedIn', false ] ]
// /* converts every key value pair as an array */
// console.log(tinderUser.hasOwnProperty("isLoggedIn"));
//console.log(regularUser.fullname?.userFullName.firstName);



const course = {
    courseName : "js in hindi",
    price : "999",
    courseInstructor : "vinay"
}



const {courseInstructor:instructor} = course

console.log(instructor);



