/*####################################
                 F E N I X - V 15
             MADE BY F E N I X
       
✅ WhatsApp: wa.me/94773010580
👥 Github: https://github.com/devon19998
#####################################*/

let handler = async (m, { conn, text, usedPrefix, command }) => {
  m.reply(wait)
let cerpen = await Scraper.Random.randomCerpen()
let { status, judul, penulis, sumber, cerita} = cerpen
if (status !== true) throw `*cerpen not found*`
let hasil = `*± R A N D O M   C E R P E N*
================================
*°Title:* ${title}
*°Source:* ${source}
*°Author:* ${author}
================================
${cerita}
`
conn.reply(m.chat, hasil, m, adReply)
}
handler.command = handler.help = ["cerpen"].map(a => a + ' *[random cerpen]*')
handler.tags = ["fun"]
handler.limit = true
module.exports = handler