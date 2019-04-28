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

Promise.all([cleanRoom(), removeGarbage(), winIcecream()]).then(function() {
    console.log('all finished');
});