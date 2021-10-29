const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "tát",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Lê Đại",
  description: "Tát người Bạn Muốn",
  commandCategory: "Hành động",
  usages: "tát",
  cooldowns: 5,
  dependencies: {"request": "","fs": "","axios": ""}
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
        const request = require('request')
                const fs = require('fs')
                  var mention = Object.keys(event.mentions)[0];
let tag = event.mentions[mention].replace("@", "");
        var link = [
          "https://i.imgur.com/HdYQ3IR.gif",
             ];
   var callback = () => api.sendMessage({body: `${tag} , Tặng cho m vài cái tát` , mentions: [{
          tag: tag,
          id: Object.keys(event.mentions)[0]
        }],
  attachment: fs.createReadStream(__dirname + "/cache/tát.gif")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/tát.gif"));
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/tát.gif")).on("close",() => callback());
   };