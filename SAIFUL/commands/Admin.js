const axios = require("axios");
const request = require("request");
const fs = require("fs-extra");
const moment = require("moment-timezone");

module.exports.config = {
 name: "admin",
 version: "1.0.0",
 hasPermssion: 0,
 credits: "𝐒𝐡𝐚𝐡𝐚𝐝𝐚𝐭 𝐈𝐬𝐥𝐚𝐦",
 description: "Show Owner Info",
 commandCategory: "info",
 usages: "admin",
 cooldowns: 2
};

module.exports.run = async function({ api, event }) {
 const time = moment().tz("Asia/Dhaka").format("DD/MM/YYYY hh:mm:ss A");

 const callback = () => api.sendMessage({
 body: `💎💖🔥════════════════════════🔥💖💎
           🌟 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢 🌟
💎💖🔥════════════════════════🔥💖💎

👤 Name      : ✧ 𝐒𝐚𝐢𝐟𝐮𝐥 𝐈𝐬𝐥𝐚𝐦 ✧  
🚹 Gender    : ♂ Male  
❤️ Relation  : Single pro MEx  
🎂 Age       : 20+  
🕌 Religion  : Islam  
🎓 Education : HSC (2024)  
🏡 Address   : Dhaka, Dohar  

💎💖🔥════════════════════════🔥💖💎
        📌 𝗖𝗢𝗡𝗧𝗔𝗖𝗧 𝗟𝗜𝗡𝗞𝗦 📌
💎💖🔥════════════════════════🔥💖💎

📘 Facebook : 🌐 https://fb.com/61577052283173  
💬 WhatsApp : 📱 https://wa.me/01833225797  

💎💖🔥════════════════════════🔥💖💎
        ⏰ 𝗨𝗣𝗗𝗔𝗧𝗘𝗗 𝗧𝗜𝗠𝗘 ⏰
💎💖🔥════════════════════════🔥💖💎

🗓 ${time}  

💎💖🔥════════════════════════🔥💖💎
         ✨💖🔥 𝗧𝗵𝗮𝗻𝗸 𝗬𝗼𝘂 🔥💖✨
💎💖🔥════════════════════════🔥💖💎
 `,
 attachment: fs.createReadStream(__dirname + "/cache/owner.jpg")
 }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/owner.jpg"));

 return request("https://i.imgur.com/5mIpSGJ.jpeg")
 .pipe(fs.createWriteStream(__dirname + '/cache/owner.jpg'))
 .on('close', () => callback());
};
