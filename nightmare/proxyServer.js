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
    silent        : true //optional, do not print anything into terminal. do not set it when you are still debugging.
};
new proxy.proxyServer(options);