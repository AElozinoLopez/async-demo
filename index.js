console.log("Before");
const user = getUser(1);
console.log("After");
console.log("The third");

function getUser(id) {
    setTimeout(() => {
        console.log("Getting a user from the database", id);
        return {id: id, gitHubUserName: "ElozinoLopez"}
    }, 3000)
}