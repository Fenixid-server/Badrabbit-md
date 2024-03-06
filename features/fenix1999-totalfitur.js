/*####################################
                 F E N I X - V 15
             MADE BY F E N I X
       
✅ WhatsApp: wa.me/94773010580
👥 Github: https://github.com/devon19998
#####################################*/
let fs = require ('fs')
let handler = async (m, { conn, args, command }) => {
let fitur = Object.values(features).filter(v => v.help && !v.disabled).map(v => v.help).flat(1)
let totalf = Object.values(global.features).filter(
    (v) => v.help && v.tags
  ).length;
let hasil = fitur.length
let txt = `*[ FENIX  -  FEATURE ]*\n`
 txt += `*• Total features* : ${hasil}\n*• Total Folder:* ${totalf}`
   conn.reply(m.chat, txt, fkontak, adReply)
}  
handler.help = ['totalfitur'].map(a => a + ' *[total features view]*')
handler.tags = ['info']
handler.command = ['totalfitur']
module.exports = handler