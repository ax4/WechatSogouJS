function spider_start(page) {
    if (page) {
        localStorage.spiderCounter = page;
    }
    var result = getArticlesHref(); 
    addToLocalResults(result);
    decreaseSpiderCounter();
    NextPage();
}

function spider_continue() {
    if (localStorage.spiderCounter == null || localStorage.spiderCounter == 0) {
        return console.log("spider task complete!");
    }
    var result = getArticlesHref(); 
    addToLocalResults(result);
    decreaseSpiderCounter();
    NextPage();
}

function addToLocalResults(item) {
    var temp = [];
    temp = JSON.parse(localStorage.spiderResults);
    if (typeof(item)=="string"){
        temp.push(item);
    }
    else if (typeof(item)=="object"){
        temp.concat(item);
    }
    else{
        return console.log("unknow typeof ", item); 
    }

    localStorage.spiderResults = JSON.stringify(temp);
}

function decreaseSpiderCounter(){
    if (localStorage.spiderCounter == null || localStorage.spiderCounter == 0){
        return console.log("error when decreaseSpiderCounter(), check localStorage.spiderCounter"); 
    }
    localStorage.spiderCounter -= 1; 
}