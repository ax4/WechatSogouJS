var NextPage = require("./search_articles.js").NextPage;
var getArticlesAll = require("./search_articles.js").getArticlesAll;

spider_start = function (page) {
    localStorage.spiderCounter = 1;
    if (localStorage.spiderResults == null) {
        localStorage.spiderResults = "[]";
    }

    if (page) {
        localStorage.spiderCounter = page;
    }
    var result = getArticlesAll();
    addToLocalResults(result);
    decreaseSpiderCounter();
    setTimeout(NextPage, 1000);
}

spider_continue = function () {
    if (localStorage.spiderCounter == null) {
        return console.info("No Spider Task");
    }
    if (localStorage.spiderCounter == 0) {
        localStorage.removeItem("spiderCounter");
        return console.info("Spider Task Complete!");
    }
    if (antiSpiderCheck()){
        console.info("sogou antispider");
        //return autoFill();
        return; 
    }

    setTimeout(function () {
        var result = getArticlesAll();
        addToLocalResults(result);
        decreaseSpiderCounter();
    }, 2000)

    setTimeout(NextPage, 3000);
}

function addToLocalResults(item) {
    if (localStorage.spiderResults == null) {
        return console.info("error when addToLocalResults(), check localStorage.spiderResults");
    }

    var temp = [];
    temp = JSON.parse(localStorage.spiderResults);
    if (typeof (item) == "string") {
        temp.push(item);
    }
    else if (typeof (item) == "object") {
        temp = temp.concat(item);
    }
    else {
        return console.info("unknow typeof ", item);
    }

    localStorage.spiderResults = JSON.stringify(temp);
}

function decreaseSpiderCounter () {
    if (localStorage.spiderCounter == null || localStorage.spiderCounter == 0) {
        return console.info("error when decreaseSpiderCounter(), check localStorage.spiderCounter");
    }
    localStorage.spiderCounter -= 1;
}

saveToFile = function () {
    function download(filename, text) {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }
    download('results.json', localStorage.spiderResults);
    localStorage.clear();
}

function antiSpiderCheck(){
    return window.location.href.includes("antispider");
}

//spider_continue();
//document.onreadystatechange = spider_continue; 
