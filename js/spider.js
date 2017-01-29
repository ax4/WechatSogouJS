function spider_start(page) {
    localStorage.spiderCounter = 1; 
    localStorage.spiderResults = "[]"; 
    if (page) {
        localStorage.spiderCounter = page;
    }
    var result = getArticlesHref(); 
    addToLocalResults(result);
    decreaseSpiderCounter();
    setTimeout(NextPage,1000);
}

function spider_continue() {
    if (localStorage.spiderCounter == null || localStorage.spiderCounter == 0) {
        return console.info("spider task complete!");
    }
    var result = getArticlesHref(); 
    addToLocalResults(result);
    decreaseSpiderCounter();
    setTimeout(NextPage,1000);
}

function addToLocalResults(item) {
    if (localStorage.spiderResults == null){
        return console.info("error when addToLocalResults(), check localStorage.spiderResults");
    }

    var temp = [];
    temp = JSON.parse(localStorage.spiderResults);
    if (typeof(item)=="string"){
        temp.push(item);
    }
    else if (typeof(item)=="object"){
        temp = temp.concat(item);
    }
    else{
        return console.info("unknow typeof ", item); 
    }

    localStorage.spiderResults = JSON.stringify(temp);
}

function decreaseSpiderCounter(){
    if (localStorage.spiderCounter == null || localStorage.spiderCounter == 0){
        return console.info("error when decreaseSpiderCounter(), check localStorage.spiderCounter"); 
    }
    localStorage.spiderCounter -= 1; 
}