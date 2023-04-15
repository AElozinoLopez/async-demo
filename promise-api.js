// Creating Settled Promises

const resolvedPromise = Promise.resolve (1);

resolvedPromise.then(result => console.log(result))

// Creating a Rejected Promise

const rejectedPromise = Promise.reject(new Error('Enter reject reason'))

rejectedPromise.catch(err => console.log(err.message))