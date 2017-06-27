const Nightmare = require('nightmare');

const url = "http://weixin.sogou.com";

var nightmare = Nightmare({ show: true });

var query_type = 'p',
    query_kw = 'rmrbwx'
    query_date = "2017-06-27";

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
   .wait(500)
   .type("#date_start", query_date)
   .type("#date_end", query_date)
   .click("#time_enter")
   .wait(500)
   .evaluate(function(query_kw){
       document.querySelector(".s-sea").value = query_kw; 
   }, query_kw)
   .click("#search_enter")
   .wait(500)
   .evaluate(function(){
     obj = document.querySelector('.mun')
     if(obj){
       return parseInt(document.querySelector('.mun').textContent.match(/\d/g).join(''));
     }
     else{
       return 10;
     }
   })
  //.end()
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });