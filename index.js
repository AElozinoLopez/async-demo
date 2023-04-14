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
// They are used to get back a value from an asynchronous function

// CALLBACKS
// Calling a user from teh database using a callback
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

function getRepositories() {
    return ["Repo1", "Repo2", "Repo3"]
}


// Calling the repo of the user from github

console.log("Before");
// get user
getUser(1, function(user){
    console.log('User:', user);
// get user repositories form github
    getRepositories(user.gitHubUserName, (repos) => {
        console.log(('Repos:', repos));
// get user commits
        getUserCommits(repos, (commits) => {
            console.log('Commits:', commits);
        })
    })
});
console.log("After");

function getUser(id, callback) {
    setTimeout(() => {
        console.log("Getting a user from the database");
        callback ({id: id, gitHubUserName: "ElozinoLopez"})    // replace return with callback        
    }, 3000)
}

function getRepositories(user, callback) {
    setTimeout(() => {
        console.log("Calling GitHub API...");
        callback(["Repo1", "Repo2", "Repo3"]);
    }, 2000)    
}

// Add a function to get all the commits from the user repo

function getUserCommits (repos, callback) {
    setTimeout (() => {
        console.log('Calling user commits...');
        callback(["Commit1", "Commit2", "Commit3"])
    }, 3000)    
}

