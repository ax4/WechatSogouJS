function hey(){
    var img = document.getElementById("seccodeImage")
    var canvas = document.createElement("canvas")
    canvas.height = 44//img.height
    canvas.width = 140//img.width
    var ctx = canvas.getContext('2d')
    ctx.drawImage(img, 0, 0)
    document.getElementsByTagName("body")[0].appendChild(canvas)
    canvas.toDataURL()
    window.open(canvas.toDataURL())
}
