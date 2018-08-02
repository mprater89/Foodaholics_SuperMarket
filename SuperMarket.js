const log = require('./logger');

function trendResponse(trend){
    console.log('This is a trend: ' + trend);
    console.log(module);
    console.log(log);
}

trendResponse('tacos');
log('message');