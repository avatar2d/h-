const fs = require("fs");
module.exports.config = {
    name: "ổn",     // Đổi tên tùy thích

version: "0.0.1", // Bản beta
hasPermssion: 0,
credits: "Đại",        // người tạo
description: "rep tin không cần dấu lệnh",  
commandCategory: "không cần dấu lệnh",
usages: "",
cooldowns: 3,
};
module.exports.handleEvent = function({ api, event, client }) {
var { threadID, messageID } = event;
if (event.body.indexOf("ổn")==0 || (event.body.indexOf("Ổn")==0) || (event.body.indexOf("khóc")==0) || (event.body.indexOf("Khóc")==0) ||(event.body.indexOf("Không sao")==0) || (event.body.indexOf("Ko sao")==0)) {    // input( đầu vào): thêm thì code này vào || (event.body.indexOf("text")==0)
var reply = {
body: "Mọi chuyện cũng sẽ ổn ☺️", // Câu trả lời của bot.
attachment: fs.createReadStream(__dirname + `/noprefix/ổn.mp4`)     // Tên link video .có thể xóa đi nếu không cần video.

}
api.sendMessage(reply, threadID, messageID);
}
}
module.exports.run = function({ api, event, client }) {

}

//©Đại
