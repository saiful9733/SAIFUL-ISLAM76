module.exports.config = {
  name: "prefix",
  version: "1.0.0", 
  hasPermssion: 0,
  credits: "Shahadat SAHU",
  description: "Display the bot's prefix and owner info",
  commandCategory: "Information",
  usages: "",
  cooldowns: 5
};

module.exports.handleEvent = async ({ event, api, Threads }) => {
  var { threadID, messageID, body } = event;
  if (!body) return;

  var dataThread = await Threads.getData(threadID);
  var data = dataThread.data || {};
  const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
  const prefix = threadSetting.PREFIX || global.config.PREFIX;
  const groupName = dataThread.threadInfo?.threadName || "Unnamed Group";

  const triggerWords = [
    "prefix", "mprefix", "mpre", "bot prefix", "what is the prefix", "bot name",
    "how to use bot", "bot not working", "bot is offline", "prefx", "prfix",
    "perfix", "bot not talking", "where is bot", "bot dead", "bots dead",
    "dấu lệnh", "daulenh", "what prefix", "freefix", "what is bot", "what prefix bot",
    "how use bot", "where are the bots", "where prefix"
  ];

  let lowerBody = body.toLowerCase();
  if (triggerWords.includes(lowerBody)) {
    return api.sendMessage(
`🌟━━━━━━━━━━━━━━━━━🌟
　　　『 𝐏𝐑𝐄𝐅𝐈𝐗 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍 』
🌟━━━━━━━━━━━━━━━━━🌟
╔═════════════════════════╗
        🌟 𝗕𝗢𝗧 𝗜𝗡𝗙𝗢 🌟
╚═════════════════════════╝

🛠 Prefix   : [ ${prefix} ]  
🤖 Bot Name : ─꯭─⃝‌‌𝐒𝐚𝐢𝐟𝐮𝐥 𝐂𝐡𝐚𝐭 𝐁𝐨𝐓  
👑 Admin    : 𝐘𝐨𝐮𝐑 𝐒𝐚𝐢𝐟𝐮𝐥  

╔═════════════════════════╗
        📦 𝗕𝗢𝗫 𝗜𝗡𝗙𝗢 📦
╚═════════════════════════╝

⚡ Prefix    : ${prefix}  
🎭 Box Name  : ${groupName}  
🆔 Box TID   : ${threadID}  

╔═════════════════════════╗
       👤 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢 👤
╚═════════════════════════╝

📛 Name      : ✧ 𝐒𝐚𝐢𝐟𝐮𝐥 𝐈𝐬𝐥𝐚𝐦 ✧  
🌐 Facebook  : www.facebook.com/61577052283173  
💬 Messenger: m.me/61577052283173  
📱 WhatsApp  : https://wa.me/+8801833225797  

═════════════════════════
       💠 𝗧𝗵𝗮𝗻𝗸 𝗬𝗼𝘂 𝗙𝗼𝗿 𝗨𝘀𝗶𝗻𝗴 💠
═════════════════════════`,
      threadID,
      null
    );
  }
};

module.exports.run = async ({ event, api }) => {
  return api.sendMessage("Type 'prefix' or similar to get the bot info.", event.threadID);
};
