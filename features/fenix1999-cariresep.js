/*####################################
                 F E N I X - V 15
             MADE BY F E N I X
       
✅ WhatsApp: wa.me/94773010580
👥 Github: https://github.com/devon19998
#####################################*/
const { cariresep, detailresep } = require('../scrape/api');

let handler = async (m, { conn, text, usedPrefix, command }) => {
  conn.resep = conn.resep ? conn.resep : {};
  if (!text) throw `Enter the name of the food\n*Example:* ${usedPrefix + command} fried rice`;
  let resep = await cariresep(text);
  let hasil = `*± C A R I R E S E P . C O M*\n 
*Creator:* ${resep.creator} 
*• Result search from:* ${text}
Type one of the numbers below to display food details\n*━━「 SESRCH RESULT 」━━*\n\n` + resep.data.map((item, index) => `*${index + 1}.* ${item.judul}`).join("\n");
  conn.reply(m.chat, hasil, m);

  conn.resep[m.chat] = resep
};

handler.before = async (m, { conn }) => {
  conn.resep = conn.resep ? conn.resep : {};
  if (m.isBaileys) return;
  if (!conn.resep[m.chat]) return;
  if (!m.text) return;
  if (isNaN(m.text) || m.text <= 0 || m.text > conn.resep[m.chat].data.length) return m.reply("🚫 Enter numbers instead of letters");
  let { data, creator } = conn.resep[m.chat];
  let pilihan = data[m.text - 1].link;
  
    let url = await detailresep(pilihan);
    let hasil = `*± C A R I R E S E P . C O M*
*creator:* ${creator}
*Food name:* ${url.data.judul || "nothing"}
*Cooking time:* ${url.data.cooking_time || "nothing"}
*Difficulty level:* ${url.data.bahan || "nothing"}`;
    conn.sendFile(m.chat, url.data.thumb, null, hasil, m);
    delete conn.resep[m.chat];
};

handler.help = ["cariresep"].map(a => a + ' *[Name food]*');
handler.tags = ["internet"];
handler.command = ["carireiosep"];

module.exports = handler;