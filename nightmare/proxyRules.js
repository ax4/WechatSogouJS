//replace all the images with local one: https://github.com/alibaba/anyproxy/blob/master/rule_sample/rule_use_local_data.js
var fs      = require("fs");

var LOCAL_IMAGE = "./temp/image.png";

module.exports = {

    summary:function(){
        return "replace all the images with local one";
    },

    //mark if use local response
    shouldUseLocalResponse : function(req,reqBody){
        if(/(img01|img02|img03|img04)/g.test(req.url)){
            req.replaceLocalFile = true;
            return true;
        }else{
            return false;
        }
    },

    dealLocalResponse : function(req,reqBody,callback){
        if(req.replaceLocalFile){
            callback(200, {"content-type":"image/png"}, fs.readFileSync(LOCAL_IMAGE) );
        }
    },

    replaceServerResDataAsync: function(req,res,serverResData,callback){
        //append "hello world" to all web pages

        //for those non-unicode response , serverResData.toString() should not be your first choice.
        //this issue may help you understanding how to modify an non-unicode response: https://github.com/alibaba/anyproxy/issues/20
        if(true){
            var newDataStr = serverResData.toString();
            newDataStr += "hello world!";
            callback(newDataStr);
        }else{
            callback(serverResData);
        }

    }
};
