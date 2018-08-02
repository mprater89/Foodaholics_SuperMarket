// (function (exports, require, module, __filename, __dirname) { <-- Module wrapper function

console.log(__filename);
console.log(__dirname);
var url = 'http:/mylogger.io/log';
function log(message){
    console.log(message);
}
//This exports it as an object, not needed for a function with not other functions.
// module.exports.log = log;


//This allows us to export a single function. This allows the function to be called directly.
//Ex: log(message) instead of logger.log(message)
module.exports = log;
// })