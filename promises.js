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
// The .then methos accepts two callback functions  - onFulfilled and onRejected  - promise.then(onFulfilled, onRejected) both of these are optional
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

// setting the property to be printable output when onFulfilled executes
function onFulfilled(users){
    console.log(users);
}

// assigning the selected printable output to the getUser function
const promis = getUsers();

// consuming the promise
promis.then(onFulfilled);