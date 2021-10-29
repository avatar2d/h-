const request = global.nodemodule["request"];
  const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "đấm",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Vinhbeat",
  description: "đấm",
  commandCategory: "Hành động",
  usages: "[tag người]",
  cooldowns: 5,
};

module.exports.run = function({
  api,
  event,
  args
}) {
  var out = (msg) => api.sendMessage(msg, event.threadID, event.messageID);
  if (!args.join(" ")) return out("Bạn chưa tag người");
  else
  return request('https://api.vinhbeat.repl.co/dam.php', (err, response, body) => {
    let picData = JSON.parse(body);
    var mention = Object.keys(event.mentions)[0];
    let getURL = picData.url;
    let ext = getURL.substring(getURL.lastIndexOf(".") + 1);
    let tag = event.mentions[mention].replace("@", "");
    let callback = function() {
      api.sendMessage({
        body: tag + ", đấm bỏ mẹ m này...",
        mentions: [{
          tag: tag,
          id: Object.keys(event.mentions)[0]
        }],
        attachment: fs.createReadStream(__dirname + `/cache/anime.${ext}`)
      }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/anime.${ext}`), event.messageID);
    };
    request(getURL).pipe(fs.createWriteStream(__dirname + `/cache/anime.${ext}`)).on("close", callback);
  });
}