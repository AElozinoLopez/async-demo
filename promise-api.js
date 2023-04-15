// Creating Settled Promises

// Creating a resolved promise
const resolvedPromise = Promise.resolve (1);

resolvedPromise.then(result => console.log(result))

// Creating a Rejected Promise

const rejectedPromise = Promise.reject(new Error('Enter reject reason'))

rejectedPromise.catch(err => console.log(err.message))


// RUNNING PARALLEL PROMISES
// Let's say you want to get 2 APIs - Facebook API and Twitter API and use the result for an operation

// Calling the first api
const firstApi = new Promise((resolve) => {
    setTimeout(() => {
        console.log('Calling the first API...')
        resolve(1)
    })
})

// Calling the second api
const secondApi = new Promise((resolve) => {
    setTimeout(() => {
        console.log('Calling the second API')
        resolve(2)
    })
})

// Calling both promises. This makes use of the .all() method of promise and it returns an array of objects
Promise.all([firstApi, secondApi])
    .then(result => console.log(result))

