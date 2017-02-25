var Ruokuai = require('./Ruokuai.js');

var data = require('./data.js').data;
console.log("Sending How Many Data?  ", data.length)
data.forEach(e => { Ruokuai.Captcha(e);})
//Ruokuai(data[0]);