// injection technique borrowed from http://stackoverflow.com/questions/840240/injecting-jquery-into-a-page-fails-when-using-google-ajax-libraries-api
require('./renderer.js')

window.onload = function() {
    console.log("hello this is from manipulateGoogle");
    require('./render2.js')
};

if (typeof module === 'object') {window.module = module; module = undefined;}
var script = document.createElement("script");
    script.src = "https://code.jquery.com/jquery-2.1.4.min.js";
    script.onload = script.onreadystatechange = function() {
      $(document).ready(function() {
        $("#lst-ib").val("Hello, World!");
      });
    };
    document.appendChild(script);
if (window.module) module = window.module;