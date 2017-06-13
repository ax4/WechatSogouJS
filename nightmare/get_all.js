//ref: https://gist.github.com/emenoh/65708b03f1a99d92f14db9b0d60d8fd0
"use strict";
//var query_type = 'a';
//var query_kw = 'hao';

const Nightmare = require('nightmare');
const url = "http://weixin.sogou.com";
//just an example
const path = "./testfile.png";
//we'll save the screenshot in the same directory
const userAgent = "Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Mobile/10A5376e";
//make sure we load the mobile version

//this is where the magic happens!
//create a custom action for Electron via NightmareJS API
function gzhSearch(query_type, query_kw){
Nightmare.action('emulateDevice',
  //define the action to run inside Electron
  function(name, options, parent, win, renderer, done) {
    // This task runs in the remote process
    parent.respondTo('emulateDevice', function(settings, done) {// <---- See settings
		win.webContents.on('did-finish-load', function(){
		  win.webContents.enableDeviceEmulation(settings);// Set settings here...
		});
		done();//call done
	});
    //call the action creation `done`
    done();//call done
  },
  // use the IPC child's `call` to call the action added to the Electron instance
  function(settings, done) {
  	console.log('emulateDevice', settings);
    this.child.call('emulateDevice', settings, done);
  });

  //here is our emulated device settings, basic iPhone 6 size here
  const mobilesettings = 	{
    screenPosition: 'mobile',
    screenSize: { width: 375, height: 667 },
    deviceScaleFactor: 0,
    viewPosition: { x: 0, y: 0 },
    viewSize: { width: 375, height: 667 },
    fitToView: false,
    offset: { x: 0, y: 0 }
  }

  //create a new instance of nightmare to use
  var nightmare = Nightmare({ show: true });
  var recur = function(click_){
    nightmare
    .evaluate(function(click_){
      if(click_<9){
        document.querySelector('#next_page').click();
        return click_+1;
      }
      else{
        return -1;   //finish: click_=8
      }
    }, click_)
    .wait(1000)
    .then(function(result){
      if(result==-1){
        return -1;
      }
      else{
        recur(result+1);
        return 1;
      }
    })
  };






	nightmare
	.then(function(){
		return nightmare
		.emulateDevice(mobilesettings)//here's our action called
	})
	.then(function(){
		return nightmare
		.useragent(userAgent)//load our ua string
		.goto(url)//load our url
		.wait(500)
    .evaluate(function(query_type, query_kw){
      if (!query_type){
        query_type = 'a';
      }
      if (!query_kw){
        query_kw = 'default';
      }
      //var query_type = 'a',
          //query_kw = 'python';
      document.getElementById("query").value = query_kw;
      if(query_type!=='a'&&query_type!=='p'){
        return 'error';
      }
      else if(query_type == 'p'){
        document.getElementsByTagName("a")[7].click();
      }
      else{
        document.getElementsByTagName("a")[8].click();
      }
      //document.getElementsByClassName("btn-search")[0].click();
      return query_type;
    }, query_type, query_kw)
    .wait(3000)
    .click("#resetbtn")
    .then(function(){
      return nightmare
      .evaluate(function(recur){    //pass the function recur to then by evaluate.
        return recur;
      }, recur)
      .then(function(result){
        recur(0);
        return nightmare
        .wait(10000)     //wait until clicking 10 times : 10*0.5 = 5000
        .evaluate(function () {     //get account information
          var get_gzh_name = function(gzh){
            var obj = gzh.querySelector('.gzh-tit');
            if (obj){
              return obj.textContent;
            }
            else{
              return null;
            }
            //return gzh.querySelector('.gzh-tit').textContent;
          }
          var get_gzh_id = function(gzh){
            var obj = gzh.querySelector('.gzh-name');
            if (obj){
              return obj.textContent.slice(4);
            }
            else{
              return null;
            }
            //return gzh.querySelector('.gzh-name').textContent.slice(4);  //
          }
          var get_gzh_month = function(gzh){
            var obj = gzh.querySelector('.gzh-num');
            if (obj) {
              return obj.textContent.match(/\d+/)[0];
            }
            else{
              return null;
            }
            //return gzh.querySelector('.gzh-num').textContent.match(/\d+/)[0];
          }
          var get_gzh_intro = function(gzh, text){
            // 'dd' and text has the same size and use the same index 6/6/2017
            // however, it may changes, if weixin.sogou make some change to its templates
            var obj = gzh.querySelectorAll('dd');
              for(var i = 0; i < text.length; i++){
                if(text[i].textContent.search(/功能/)!==-1){
                  return obj[i].textContent;
                }
            }
            return null;
          }
          var get_gzh_auth = function(gzh, text){
            // 'dd' and text ('dt') has the same size and use the same index 6/6/2017
            // however, it may changes, if weixin.sogou make some change to its templates
            var obj = gzh.querySelectorAll('dd');
              for(var i = 0; i < text.length; i++){
                if(text[i].textContent.search(/认证/)!==-1){
                  return obj[i].textContent;
                }
            }
            return null;
          }
          var get_gzh_recent = function(gzh){
            var obj = gzh.querySelector('dl dd a');
            if(obj){
              return obj.href;
            }
            else{
              return null;
            }
          }
          var get_gzh_recent_date = function(gzh){
            //parseInt(all_gzh[i].querySelector('dl dd a span').textContent.match(/\d+/)[0])||null}
            var obj = gzh.querySelector('dl dd a span');
            if (obj){
              return parseInt(obj.textContent.match(/\d+/)[0])
            }
            else{
              return null;
            }
          }
          var gzh_list = Array();
          var all_gzh = document.querySelectorAll('.wx-news-list2 li');
          for(var i = 0; i < all_gzh.length; i++){
            var obj = {name: get_gzh_name(all_gzh[i]), id: get_gzh_id(all_gzh[i]), month_num: get_gzh_month(all_gzh[i]),
            recent_href: get_gzh_recent(all_gzh[i]), recent_date: get_gzh_recent_date(all_gzh[i]) };
            var text = all_gzh[i].querySelectorAll('dt');
            obj['intro'] = get_gzh_intro(all_gzh[i], text);
            obj['auth'] = get_gzh_auth(all_gzh[i], text);
            gzh_list.push(obj);
          }
          console.log(gzh_list);
          return gzh_list;
        })
        .then(function(res){
          console.log("gzh_list is :\n", res)
        })
      })  //recur+get data   from line 116
      console.log('hahaha');
    })

    ////////////////////


	})
	.then(function() {
    /*
    	nightmare.end(function() {
      	console.log('done with url: ', url);
    	})
    */
    });
};

gzhSearch("a","stem");
