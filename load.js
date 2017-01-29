var loadJS = function (url, location) {
    //url is URL of external file, implementationCode is the code
    //to be called from the file, location is the location to 
    //insert the <script> element

    var scriptTag = document.createElement('script');
    scriptTag.src = url;


    var onload = function () {
        console.log("Success loadJS from", url);
    }
    scriptTag.onload = onload;
    scriptTag.onreadystatechange = onload;

    location.appendChild(scriptTag);
};

loadJS('https://ax4.github.io/WechatSogouJS/js/search_articles.js', document.body);
loadJS('https://ax4.github.io/WechatSogouJS/js/spider.js', document.body);