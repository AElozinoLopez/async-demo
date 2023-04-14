console.log("Before");
getUser(1);
console.log("After");
console.log("The third");

function getUser(id) {
    setTimeout(() => {
        console.log("Getting a user from the database");
    }, 3000)
}