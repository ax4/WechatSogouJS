/*
* 诺快打码 http 接口(上传)，node.js 示例代码 
* 注意：需要安装restler : npm install restler
*/

var rest = require('restler'),
    fs = require('fs'),
    settings = require('../config.js').settings,
    Base64File = require('js-base64-file'),
    shortid = require('shortid');

const path = `${__dirname}/temp/`;

function Ruokuai(data, cb = function(captcha){console.log("Received", captcha);}) {
    if (data.includes("base64")) {
        data = data.split(",")[1];
    }
    var image = new Base64File;
    var filename = shortid.generate() + ".jpg"

    image.save(data, path, filename, (err)=>{
        rest.post('http://api.ruokuai.com/create.json', {
            multipart: true,
            data: {
                'username': settings.username,
                'password': settings.password,
                'typeid': '3060',
                'softid': settings.softid,
                'softkey': settings.softkey,
                'image': rest.file("./temp/" + filename, null, fs.statSync("./temp/"+ filename).size, null, 'image/jpg')// base64 code of the image 
            },
            headers: {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:24.0) Gecko/20100101 Firefox/24.0',
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).on('complete', function (res) {
            var captcha = JSON.parse(res);
            console.log('Captcha Encoded.');
            cb(captcha); 
        });
    });
}

var data = require('./data.js').data;
data.forEach(e => { Ruokuai(e);})
//Ruokuai(data[0]);