

let handler = async (m, { conn, text, usedPrefix, command }) => {
  m.reply(`*[ F E N I X I D UPTIME ]*
${namebot} has been active since *${Func.toTime(process.uptime() * 1000)}* ago`)
}
handler.help = ["runtime","uptime"].map(a => a + ' *[Time running]*')
handler.tags = ["info"]
handler.command = ["runtime","uptime"]
module.exports = handler