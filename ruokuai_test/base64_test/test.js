/*
* 诺快打码 http 接口(上传)，node.js 示例代码 
* 注意：需要安装restler : npm install restler
*/

var rest = require('restler'),
	fs = require('fs'),
	filename = 'base64.jpg',
	settings = require('../config.js').settings,
	Base64File = require('js-base64-file');

const image = new Base64File;
const path = `${__dirname}/`;
var data = "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";
image.save(data, path, filename );


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