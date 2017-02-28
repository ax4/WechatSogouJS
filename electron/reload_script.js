console.log("Start reload_script.js ......")
if (typeof module === 'object') {window.module = module; module = undefined;}
var s = [].slice.call(document.getElementsByTagName("script"))
var loadJS = function (url, location) {
		//url is URL of external file, implementationCode is the code
		//to be called from the file, location is the location to 
		//insert the <script> element

		var scriptTag = document.createElement('script');
		scriptTag.src = url;


		var onload = function () {
			console.log("Success loadJS from", url);
			if (window.module) module = window.module;
		}
		scriptTag.onload = onload;
		scriptTag.onreadystatechange = onload;

		location.appendChild(scriptTag);
	};

/*
while(!$){
	//wait for jQuery to load
}*/	
s.forEach((e)=>{loadJS(e.src,document.body)})