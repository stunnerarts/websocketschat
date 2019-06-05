
var message = __filename + '||' + __dirname;

var url = 'http://.www.google.com';

const log = (message) => {
    console.log(`${message}`);
};
/*module.exports.log  = log;*/ //-- single function export

module.exports = log;
