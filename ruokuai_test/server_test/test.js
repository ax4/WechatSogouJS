/*
* 诺快打码 http 接口(上传)，node.js 示例代码 
* 注意：需要安装restler : npm install restler
*/

var rest = require('restler'),
    fs = require('fs'),
    settings = require('../config.js').settings,
    Base64File = require('js-base64-file');

const path = `${__dirname}/`;

function Ruokuai(data) {
    if ()

    var image = new Base64File;
    image.save(data, path, filename);


    rest.post('http://api.ruokuai.com/create.json', {
        multipart: true,
        data: {
            'username': settings.username,
            'password': settings.password,
            'typeid': '3060',
            'softid': settings.softid,
            'softkey': settings.softkey,
            'image': rest.file(filename, null, fs.statSync(filename).size, null, 'image/gif')// base64 code of the image 
        },
        headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:24.0) Gecko/20100101 Firefox/24.0',
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).on('complete', function (data) {
        var captcha = JSON.parse(data);
        console.log('Captcha Encoded.');
        console.log(captcha);
    });

}

