// console.log("Before");
// const user = getUser(1);
// console.log("After");
// console.log("The third");

// function getUser(id) {
//     setTimeout(() => {
//         console.log("Getting a user from the database", id);
//         return {id: id, gitHubUserName: "ElozinoLopez"}    // returning an object. It will not be called in the program unless you use a method to deal with the asynchronous code
        
//     }, 3000)
// }

// To get the return object we have to use any of the methods for dealing with asynchronous codes.
// These methods are: Callbacks, Promises, and Async and Await

// CALLBACKS
console.log("Before");
getUser(1, function(user){
    console.log(user);
});
console.log("After");

function getUser(id, callback) {
    setTimeout(() => {
        console.log("Getting a user from the database");
        callback ({id: id, gitHubUserName: "ElozinoLopez"})    // replace return with callback
        
    }, 3000)
}