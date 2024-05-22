//singleton
//object.create

//object literals

const mysym = Symbol("key1")

const jsUser = {
    name:"vinay",
    "full_name":"vinat ykr",
    [mysym]:"mykey1",
    age:25,
    email:"vinay@goofgle.com",
    location:"bellary",
    idLoggedIn: false,
    lastLoginDays : ["Monday","tuesday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser.full_name);
// console.log(jsUser["full_name"]);
// console.log(jsUser[mysym]);



jsUser.email = "cvke@gmail.vom"
//Object.freeze(jsUser)
// console.log(jsUser.email);
jsUser.email = "mkicrosigt@voim"
// console.log(jsUser.email);



jsUser.greeting = function(){
    console.log("hello js user");
}
jsUser.greetingTwo  = function(){
    console.log(`hello js user,${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());



