/*####################################
                 F E N I X - V 15
             MADE BY F E N I X
       
✅ WhatsApp: wa.me/94773010580
👥 Github: https://github.com/devon19998
#####################################*/
let handler = async (m, {conn, groupMetadata }) => {
conn.reply(m.chat, `${await groupMetadata.id}`, m)
}
handler.help = ['getid'].map(a => a + ' *[get id group]*')
handler.tags = ['group']
handler.command = /^(getid|idgc|gcid)$/i

handler.restrict = true

module.exports = handler