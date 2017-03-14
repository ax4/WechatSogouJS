var Nightmare = require('nightmare');
require('nightmare-iframe-manager')(Nightmare);		
var nightmare = Nightmare({
  show: true,
  webPreferences: {
    webSecurity: false,
    partition: 'persist: testing'
  }
});
 
nightmare
  .goto('http://weixin.sogou.com')
  .type('#upquery', 'github nightmare')
  .click('#loginBtn')
  .evaluate(function(){
    document.getElementsByTagName("iframe")[0].id="wrapper"
  })
  .wait("#wrapper")
  .enterIFrame('#wrapper')
  .enterIFrame('#ptlogin_iframe')
  //.title()
  //.then(function(title){
    //console.log(title);
  //})
  .evaluate(function(){
    return window.location;
  })
  .then(function(result){
    console.log("recieve result", result);
  })
  .catch(function(err){
    console.log("failed with: ", err);
  })


  /* 
  .wait('iframe')
  .enterIFrame('#ptlogin_iframe')
  .click('#switcher_plogin')
  .type('#u','123')
  .then()
  .catch()
*/

  /* 
  .evaluate(function () {
    return document.querySelector('#sogou_vr_11002601_title_9').href;
  })
  .end()
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });*/