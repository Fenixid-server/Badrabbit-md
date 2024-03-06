/*####################################
                 F E N I X - V 15
             MADE BY F E N I X
       
✅ WhatsApp: wa.me/94773010580
👥 Github: https://github.com/devon19998
#####################################*/
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*• Example:* ${usedPrefix + command} New Name`
   await conn.groupUpdateSubject(m.chat, text);    
  }

  handler.help = ['setnamegc'].map(a => a + ' *[New name]*')
  handler.tags = ['group']
  handler.command = /^setnamegc$/i
  handler.group = true
  handler.admin = true
  handler.botAdmin = true
  
  module.exports = handler