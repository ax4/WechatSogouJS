// injection technique borrowed from http://stackoverflow.com/questions/840240/injecting-jquery-into-a-page-fails-when-using-google-ajax-libraries-api
require('./renderer.js')

window.onload = function() {
    console.log("hello this is from manipulateGoogle");

    try{
      jQuery
    }
    catch(err){
      document.body.appendChild(script);
    }
};

if (typeof module === 'object') {window.module = module; module = undefined;}
var script = document.createElement("script");
    script.src = "https://code.jquery.com/jquery-2.1.4.min.js";
    //script.async = false;
    script.onload = script.onreadystatechange = function() {
      console.log("script loaded, jQuery")
      require('./reload_script')
    };
    setTimeout(function(){document.head.appendChild(script);},20)
    //document.appendChild(script);
if (window.module) module = window.module;