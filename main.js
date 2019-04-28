// takes a callback function with 2 arguments
let promiseToCleanTheRoom = new Promise(function(resolve, reject) {

    // cleaning the room

    let isClean = false;

    if(isClean){
        resolve('clean'); 
    }else {
        reject('not clean')
    }

});

// execute promise, .then method gets called when the promis is resolved
promiseToCleanTheRoom.then(function(fromResolve){
    console.log('the room is ' + fromResolve)
}).catch(function(fromReject){
    console.log('the room is ' + fromReject)
})
    

