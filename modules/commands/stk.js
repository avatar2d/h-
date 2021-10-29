const fs = require("fs");
module.exports.config = {
    name: "stk",     // Đổi tên tùy thích

version: "0.0.1", // Bản beta
hasPermssion: 0,
credits: "Lê Đại",        // người tạo
description: "Donate cho admin",  
commandCategory: "không cần dấu lệnh",
usages: "",
cooldowns: 3,
};
module.exports.handleEvent = function({ api, event, client }) {
var { threadID, messageID } = event;
if (event.body.indexOf("stk")==0 || (event.body.indexOf("Stk")==0)) {     // input( đầu vào): thêm thì code này vào || (event.body.indexOf("text")==0)
var reply = {
body: "★★Donate Cho Admin★★\n\n😎ADMIN NAME: Lê Đại\n\n💸Stk: 1.Mb Bank: 0353048229\n🔎LE VAN DAI\n\n💸Stk: 2.VT Pay: 0353048229\n🔎LE VAN DAI\n\n👀FB ADMIN: https://fb.me/daimeng1998\n\n🎉Admin: Nhận đky gói cước và nạp thẻ giá rẻ nhé🎉\n\n💓Chúc một ngày tốt lành💓\n\n❗🧬😝XIN CẢM ƠN😝🧬❗", // Câu trả lời của bot.
attachment: fs.createReadStream(__dirname + `/noprefix/stk.gif`)     // Tên link video .có thể xóa đi nếu không cần video.

}
api.sendMessage(reply, threadID, messageID);
}
}
module.exports.run = function({ api, event, client }) {

}

//©Đại
