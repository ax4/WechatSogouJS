var Nightmare = require('nightmare');
var nightmare = Nightmare({
  show: true,
  webPreferences: {
    webSecurity: false,
    partition: 'persist: testing'
  }
});

nightmare
  .goto('http://weixin.sogou.com')
  .click("#loginBtn")
  .then(function (result) {
    //console.log(result);
    console.log("Login using the browser")
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });