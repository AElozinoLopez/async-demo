// Creating the promise object
// const p = new Promise((resolve, reject) => {

// })
const p = new Promise(function(resolve, reject) {
    // resolve (1);
    //for reject, do not pass a string... rather, pass an error object
    reject(new Error("Fail!"));
});

p.then(result => console.log(result));  // p.then gives us access to the successful operation and we can log it
p.catch(err => console.log('Error', err.message));
