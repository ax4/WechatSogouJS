/*
    Accessing an iframe (different domain) with PhantomJS
    Example by deerme.org
*/

var page = require('webpage').create(), system = require('system'), t, address;
if (system.args.length === 1)
{
    console.log('Usage: phantomfs iframe.js <some URL>');
    phantom.exit();
}

t = Date.now();
address = system.args[1];
page.open(address, function (status)
{
    if (status !== 'success')
    {
            console.log('FAIL to load the address');
    }
    else
    {
        t = (Date.now()) - t;
        title = page.evaluate( function(){
            return document.title;
        });
        linkTitle = page.evaluate( function(){
            document.getElementById("loginBtn").click()

            if ( typeof(jQuery) == "undefined" )
            {
                // Force Load
                page.injectJs('http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js');
            }
            // first iframe #aswift_2
            // second iframe #google_ads_frame3
            return jQuery("#ptlogin_iframe").contents().find("#switcher_plogin").attr("id");

        });
        console.log('Loading time: ' + t + ' msec');    
        console.log('Webpage title: ' + title);
        console.log('Link title (iframe adsense): ' + linkTitle);
    }
    phantom.exit();
});