const electron = require('electron')
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow
let session

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 800, height: 600, webPreferences:{preload:"./preload.js"}})

  // and load the index.html of the app.
  mainWindow.loadURL(url.format({
    //pathname: 'weixin.sogou.com',
    //protocol: 'http:',
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  session = mainWindow.webContents.session
  console.log(session.getUserAgent())
  session.setProxy({
    proxyRules : "http=127.0.0.1:8001;https=127.0.0.1:8001"
  },()=>{
    console.log("Session set with proxy")
  })

  // Open the DevTools.
  mainWindow.webContents.openDevTools()
  
  mainWindow.webContents.executeJavaScript('window.location.href', true, (result)=>{console.log(result)})

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

// AnyProxy: module example from https://github.com/alibaba/anyproxy#work-as-a-module-for-nodejs
var proxy = require("anyproxy");

//create cert when you want to use https features
//please manually trust this rootCA when it is the first time you run it
!proxy.isRootCAFileExists() && proxy.generateRootCA();

var options = {
    type          : "http",
    port          : 8001,
    hostname      : "localhost",
    rule          : require("./proxyRules.js"),
    dbFile        : null,  // optional, save request data to a specified file, will use in-memory db if not specified
    webPort       : 8002,  // optional, port for web interface
    socketPort    : 8003,  // optional, internal port for web socket, replace this when it is conflict with your own service
    //throttle      : 10,    // optional, speed limit in kb/s
    disableWebInterface : false, //optional, set it when you don't want to use the web interface
    setAsGlobalProxy : false, //set anyproxy as your system proxy
    silent        : false //optional, do not print anything into terminal. do not set it when you are still debugging.
};
new proxy.proxyServer(options);