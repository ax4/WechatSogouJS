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
function pSearch(query_type, query_kw){
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
      return query_type;
    }, query_type, query_kw)
    .wait(3000)
    .click("#resetbtn")
    .evaluate(function () {
      var get_p_name = function(p){
        var obj = p.querySelector('h4 a div');
        if (obj){
          return obj.textContent;
        }
        else{
          return null;
        }
      };

      var get_href = function(p){
        var obj = p.querySelector('h4 a');
        if (obj){
          return obj.href;
        }
        else{
          return null;
        }
      };

      var get_summary = function(p){
        var obj = p.querySelectorAll('p');
        for(var i = 0; i < obj.length; i++){
          if(obj[i].getAttribute('data-type') == "article_summary"){
            return obj[i].textContent || null;
            break;
          }
        }
      };

      var get_gzh = function(p){
        var obj = p.querySelector('p .s2');
        /*
        for(var i = 0; i < obj.length; i++){
          if(obj[i].getAttribute('class') == "time"){
            var src = y.querySelector('.s2');
            if(src){
              return src.getAttribute('data-sourcename');
            }
            else{
              return null;
            }
            break;
          }
        }
        */
        if(obj){
          return obj.innerText;
        }
        else{
          return null;
        }
      };

      var get_date = function(p){
        var obj = p.querySelector('p .s3');
        if (obj){
          return obj.getAttribute('data-lastmodified');
        }
        else{
          return null;
        }
      };

      var p_list = Array();
      var all_p = document.querySelectorAll('.list-txt');
      for(var i = 0; i < all_p.length; i++){
        var obj = {name: get_p_name(all_p[i]), href: get_href(all_p[i]), date: get_date(all_p[i]),
        gzh: get_gzh(all_p[i]), summary: get_summary(all_p[i])};
        p_list.push(obj);
      }
      console.log(p_list);
      return p_list;
    })
		.then(function(res){
      console.log("p_list is :\n", res)
    })
	})
	.then(function() {
    	nightmare.end(function() {
      	console.log('done with url: ', url);
    	})
    });
};

pSearch("p","stem");
