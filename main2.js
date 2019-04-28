// function returns a Promise
let cleanRoom  = function() {
    return new Promise(function(resolve, reject) {
        resolve('Cleaned the room');
    });
};

let removeGarbage = function(message) {
    return new Promise(function(resolve, reject) {
        resolve(message + ' remove the Garbage');
    });
};

let winIcecream = function(message) {
    return new Promise(function(resolve, reject) {
        resolve(message + ' won the Icecream');
    });
};
// I can catch the message in the result 
// and then pass it to the next function
cleanRoom().then(function(result){
    return removeGarbage(result);
}).then(function(result) {
    return winIcecream(result)
}).then(function(result) {
    console.log('finished ' + result)
})


