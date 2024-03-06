/*####################################
                 F E N I X - V 15
             MADE BY F E N I X
       
✅ WhatsApp: wa.me/94773010580
👥 Github: https://github.com/devon19998
#####################################*/
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `• *Example:* ${usedPrefix + command} halo`
m.reply(wait)
  try {
let gemini = await Func.fetchJson(`https://gmni.vercel.app/api/ask?text=${text}`)
m.reply(gemini.text)
} catch (e) {
m.reply(eror)
   }
}
handler.help = ["gemini"].map(a => a + " *[query]*")
handler.tags = ["ai"]
handler.command = ["gemini"]
module.exports = handler