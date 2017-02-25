function getURI(){
    var img = document.getElementById("seccodeImage")
    var canvas = document.createElement("canvas")
    canvas.height = 44//img.height
    canvas.width = 140//img.width
    var ctx = canvas.getContext('2d')
    ctx.drawImage(img, 0, 0)
    document.getElementsByTagName("body")[0].appendChild(canvas)
    return canvas.toDataURL()
}

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function sendRuokuai(imgBase64){
    var url = "http://localhost:1337/long?img=";
    var temp = httpGet(url + encodeURIComponent(imgBase64)); 
    console.log("Receive from Ruokuai", temp); 
    return JSON.parse(temp).Result; 
}

function autoFill(){
    var image = getURI(); 
    var entry = sendRuokuai(image); 
}