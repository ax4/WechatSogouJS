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
   .evaluate(function(query_date){
    //   .type("#date_start", query_date)
   // .type("#date_end", query_date)
      document.querySelector("#date_start").value = query_date;
      document.querySelector("#date_end").value = query_date;
   }, query_date)
   .click("#time_enter")
   .wait(500)
   .evaluate(function(query_kw){
       document.querySelector(".s-sea").value = query_kw; 
   }, query_kw)
   .click("#search_enter")
   .wait(500)
   .evaluate(function(){
     obj0 = document.querySelector('.mun')
     obj1 = document.querySelectorAll('.txt-box')
     if(obj0){
       return parseInt(document.querySelector('.mun').textContent.match(/\d/g).join(''));
     }
     else if(obj1){
       return parseInt(document.querySelectorAll('.txt-box').length);
     }
     else{
       return parseInt(0)
     }
   })
  .end()
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });