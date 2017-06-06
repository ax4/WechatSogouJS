//ref: https://gist.github.com/emenoh/65708b03f1a99d92f14db9b0d60d8fd0
"use strict";

const Nightmare = require('nightmare');
const url = "http://weixin.sogou.com";
//just an example
const path = "./testfile.png";
//we'll save the screenshot in the same directory
const userAgent = "Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Mobile/10A5376e";
//make sure we load the mobile version

//this is where the magic happens!
//create a custom action for Electron via NightmareJS API

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
		.evaluate(function(){//we have a fancy evaluate here to get the viewport of the current window
		const body = document.querySelector('body');
		var h = body.scrollHeight;
		var w = body.scrollWidth;
		
			return {
				height: h,
				width: w
			}
		})
		.then(function(dimensions) {//here's where we set the viewport from above eval
		console.log("dimensions", dimensions)
		return nightmare
		.viewport(dimensions.width, dimensions.height)
		.wait(500)
		.screenshot(path)//finally take a screenshot
		})
	})
	.then(function() {
    	//nightmare.end(function() {
      	//console.log('done with url: ', url);
    	//})
    });
  