// Creating the promise object
// const p = new Promise((resolve, reject) => {

// })
const p = new Promise(function(resolve, reject) {
    // resolve (1);
    //for reject, do not pass a string... rather, pass an error object
    reject(new Error("Fail!"));
});

// p.then(result => console.log(result));  // p.then gives us access to the successful operation and we can log it
p.catch(err => console.log('Error', err.message));

// Always pass in your resolve and reject
const promise = new Promise(function(resolve, reject) {
    let x = 4
    if(x < 5) {
        resolve('Success');
    } else {
        reject(new Error('Error Message'));
    }
});

// YOu use a .then method and the .catch method to consume a promise
// The .then method accepts two callback functions  - onFulfilled and onRejected  - promise.then(onFulfilled, onRejected) both of these are optional
promise
    .then(result => console.log(result))
    .catch(error => console.log('Error', error.message));


// ANOTHER EXAMPLE
function getUsers() {
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            resolve([
                {username: "ElozinoLopez", email: "elozinolopez@gmail.com"},
                {username: "Faruq Hameed", email: "faruqismelendes@gmail.com"},
            ])
        }, 5000)
    })
}

// setting the property to be printable output when onFulfilled executes - defining unfulfilled
function onFulfilled(users){
    console.log(users);
}

// assigning the selected printable output to the getUser function
const promis = getUsers();

// consuming the promise
promis.then(onFulfilled);


// REPLACING A CALLBACK WITH A PROMISE EXAMPLE
// Here, we are replacing the callbacks in index.js with promise

// console.log("Before");
// getUser(1, function(user){
//     console.log(user);
// });
// console.log("After");

// function getUser(id, callback) {
//     setTimeout(() => {
//         console.log("Getting a user from the database");
//         callback ({id: id, gitHubUserName: "ElozinoLopez"})    // replace return with callback
        
//     }, 3000)
// }

// function getRepositories() {
//     return ["Repo1", "Repo2", "Repo3"]
// }


// Calling the repo of the user from github

console.log("Before");
// get user
const thePromise = getUser(1);
// thePromise.then(user => console.log(user));

console.log("After");

function getUser(id) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log("Getting a user from the database");
            resolve ({id: id, gitHubUserName: "ElozinoLopez"})          
        }, 3000)
    })    
}

function getRepositories(user) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log("Calling GitHub API...");
            resolve(["Repo1", "Repo2", "Repo3"]);
        }, 2000) 
    })       
}

// Add a function to get all the commits from the user repo

function getUserCommits (repos) {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            console.log('Calling user commits...');
            resolve(["Commit1", "Commit2", "Commit3"])
        }, 3000)
    })        
}

