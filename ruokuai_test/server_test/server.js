var fs = require('fs'), 
    port = process.env.port || 1337,
    express = require('express'),
    app = express(),
    timeout = require('connect-timeout'),
    Ruokuai = require('./Ruokuai.js');

//timeout http://stackoverflow.com/questions/21708208/express-js-response-timeout
//app.use(timeout(5000));
//allow CROS http://enable-cors.org/server_expressjs.html
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    if (!req.timedout) next();
});

app.get('/', function (req, res) {
    res.send("helloworld");
});

app.get('/long', timeout('20s'),function (req, res) {
    var img = decodeURIComponent(req.query.img);
    //console.log(img, typeof(img)); //debug use
    Ruokuai.Captcha(img, (e)=>{res.send(e);});
});

var server = app.listen(port, function () {
    console.log("Ruokuai server online");
});