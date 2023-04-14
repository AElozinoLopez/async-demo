console.log("Before");
const user = getUser(1);
console.log("After");
console.log("The third");

function getUser(id) {
    setTimeout(() => {
        console.log("Getting a user from the database", id);
        return {id: id, gitHubUserName: "ElozinoLopez"}    // returning an object. It will not be called in the program unless you use a method to deal with the asynchronous code
        
    }, 3000)
}