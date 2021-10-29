module.exports.config = {
	name: "tagad",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Leo", 
	description: "noprefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "",
    cooldowns: 1, 
};

module.exports.handleEvent = ({ event, api}) => {
if (event.body.indexOf("@Lê Đại")==0 || (event.body.indexOf("@Đại")==0)) {
		return api.sendMessage(`📯Thông báo: Hiện tại admin đang bận.\n📲Vui lòng sử dụng lệnh /callad để gặp!\n🔰Fb: https://fb.me/daimeng1998` , event.threadID, event.messageID)
		}
};

module.exports.run = () => {}