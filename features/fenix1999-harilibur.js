let handler = async (m, { conn, text, usedPrefix, command }) => {
  m.reply(wait)
 let molor = await scraper.HariLibur()
let list = molor.libnas_content.map((a, index) => `*${index + 1}* ${a.summary}\nDate: ${a.dateMonth}`).join("\n\n")
const hasil = `*LIST OF HOLIDAYS*
*Upcoming holidays:* ${molor.nextLibur}

*LIST OF HOLIDAYS ${new Date().getFullYear()}*

${list}`
m.reply(hasil)
}
handler.help = ["harilibur"].map(a => a + ' *[get hari libur]*')
handler.tags = ["internet","main"]
handler.command = ["harilibur"]
module.exports = handler