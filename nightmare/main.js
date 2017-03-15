var Nightmare = require('nightmare');		
var nightmare = Nightmare({
  switches: {
    'proxy-server': '127.0.0.1:8001',
    'ignore-certificate-errors': true
  },
  show: true,
  webPreferences: {
    webSecurity: false,
    partition: 'persist: testing'
  }
});
 
nightmare
  .goto('http://weixin.sogou.com')
  .type('#upquery', 'github nightmare')
  .click('.swz')
  .wait('#sogou_vr_11002601_title_9')
  .evaluate(function () {
    return document.querySelector('#sogou_vr_11002601_title_9').href;
  })
  .end()
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });

require('./proxyServer.js')