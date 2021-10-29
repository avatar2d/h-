module.exports.config = {
    name: "kbb",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "JustGon", //Giữ Credit tôn trọng thằng làm ra//mod by Jukie
    description: "búa bao kéo",
    commandCategory: "Giải trí",
    usages: "[tag]",
    cooldowns: 0,
    dependencies: {
    }
};
module.exports.run = async function ({ event, api, args, Currencies,Users,Threads }) {
    function outMsg(data) {
        api.sendMessage(data, event.threadID, event.messageID);
       }
          var data = await Currencies.getData(event.senderID);
          var money = data.money           
    if(!args[0]) {
        outMsg("⚡️Vui lòng nhập 'kéo' hoặc 'búa' hoặc 'bao'")
    }
    else{
    var turnbot = ["✌️","👊","✋"]
          var botturn = turnbot[Math.floor(Math.random() * turnbot.length)] 
          const userturn = args[0];
          const coins = args.join(" ").replace(userturn, ""); 
          if(coins < 5)
          api.sendMessage(`⚡️Số đặt cược của bạn phải lớn hơn 5$`,event.threadID,event.messageID)
          else{
          if(money < coins)  
          api.sendMessage(`⚡️Số dư bạn không đủ ${coins}$ để có thể chơi`,event.threadID,event.messageID)
          else {           
          if (userturn == "kéo"||userturn == "búa"||userturn == "bao") {
            if (userturn == turnbot) {
              return outMsg(`⚡️Hòa\nUser : ${userturn}\nBot : ${botturn}\nHòa, số dư không thay đổi`)
            } else if (userturn == "kéo") {
              if (botturn == "👊") {
                Currencies.setData(event.senderID, options = {money: money -`${coins}`})
                return outMsg(`⚡️Bot win\nUser : ${userturn}\nBot : ${botturn}\nBạn đã thua và mất ${coins}$`)
                
              } else if (botturn == "✋") {
                Currencies.setData(event.senderID, options = {money: money +`${coins}`})
                return outMsg(`⚡️User win\nUser : ${userturn}\nBot : ${botturn}\nBạn đã thắng và được cộng ${coins}$`)
                
            }
          } else if (userturn == "búa") {
            if (botturn == "✋") {
              Currencies.setData(event.senderID, options = {money: money -`${coins}`})
              return outMsg(`⚡️Bot win\nUser : ${userturn}\nBot : ${botturn}\nBạn đã thua và mất ${coins}$ `)
              
            } else if (botturn == "✌️") {
              Currencies.setData(event.senderID, options = {money: money +`${coins}`})
              return outMsg(`⚡️User win\nUser : ${userturn}\nBot : ${botturn}\nBạn đã thắng và được cộng ${coins}$`)
              
          }
        } else if (userturn == "bao") {
          if (botturn == "✌️") {
            Currencies.setData(event.senderID, options = {money: money -`${coins}`})
            return outMsg(`⚡️Bot win\nUser : ${userturn}\nBot : ${botturn}\nBạn đã thua và mất ${coins}$ `)
            
          } else if (botturn == "👊") {
            Currencies.setData(event.senderID, options = {money: money +`${coins}`})
            return outMsg(`⚡️User win\nUser : ${userturn}\nBot : ${botturn}\nBạn đã thắng và được cộng ${coins}$ `)
            
        }
      }
    }
        } 
      }
    }
}