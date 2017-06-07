
const url = "http://weixin.sogou.com";

var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true });
var query_type = 'a',
    query_kw = 'thezoomin';

nightmare
  .goto(url)
  .wait(500)
  .evaluate(function(query_type, query_kw){
     if (!query_type){
       query_type = 'a';
     }
     if (!query_kw){
       query_kw = 'default';
     }
     document.getElementById("query").value = query_kw;
     if(query_type!=='a'&&query_type!=='p'){
       return 'error';
     }
     else if(query_type == 'p'){
       document.querySelector(".swz").click();
     }
     else{
       document.querySelector(".swz2").click();
     }
     return 1
   }, query_type, query_kw)
   .wait(1000)
   .evaluate(function(){
     obj = document.querySelector('.mun')
     if(obj){
       return parseInt(document.querySelector('.mun').textContent.match(/\d/g).join(''));
     }
     else{
       return 10;
     }
   })
  .end()
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });
