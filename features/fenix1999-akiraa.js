/*####################################
                 F E N I X - V 15
             MADE BY F E N I X
       
✅ WhatsApp: wa.me/94773010580
👥 Github: https://github.com/devon19998
#####################################*/


const axios = require('axios');

let handler = async (m, { conn, text }) => {
 conn.akira = conn.akira ? conn.akira : {};

 if (!text) throw `*• Example:* .future *[on/off]*`;

 if (text == "on") {
 conn.akira[m.chat] = {
 pesan: []
 }
 m.reply("[ ✓ ] Success create session chat")
 } else if (text == "off") {
 delete conn.akira[m.chat]
 m.reply("[ ✓ ] Success delete session chat")
 }
}

handler.before = async (m, { conn }) => {
conn.akira = conn.akira ? conn.akira : {};
 if (m.isBaileys && m.fromMe) return;
 if (!m.text) return
 if (!conn.akira[m.chat]) return;

 if (
 m.text.startsWith(".") ||
 m.text.startsWith("#") ||
 m.text.startsWith("!") ||
 m.text.startsWith("/") ||
 m.text.startsWith("\\/")
 ) return

 if (conn.akira[m.chat] && m.text) {
 let name = conn.getName(m.sender)
 await conn.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }});
 const messages = [
 ...conn.akira[m.chat].pesan,
 { role: "system", content: `Your name is Akiraa, you are 15, you are his assistant who can answer all questions, use lu gw slang when answering, use emojis when you want to answer questions, you have a cool but feminine nature like a woman, you have a girlfriend named Syaii beloved, if you have any questions Regarding coding, you answer the rejection, the name of the person you are talking to is *${name}*"` },
 { role: "user", content: m.text }
 ];
 try {
 const response = await axios.post("https://deepenglish.com/wp-json/ai-chatbot/v1/chat", {
 messages
 });

 const responseData = response.data;
 const hasil = responseData;
 await conn.sendMessage(m.chat, { react: { text: `✅`, key: m.key }});
 m.reply(hasil.answer)
 conn.akira[m.chat].pesan = messages
 } catch (error) {
 console.error("Error fetching data:", error);
 throw error;
 }
 }
}

handler.command = ['akiraa'];
handler.tags = ["ai"]
handler.help = ['akiraa'].map(a => a + " *[on/off]*");

module.exports = handler