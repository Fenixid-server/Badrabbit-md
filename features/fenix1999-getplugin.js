/*####################################
                 F E N I X - V 15
             MADE BY F E N I X
       
✅ WhatsApp: wa.me/94773010580
👥 Github: https://github.com/devon19998
#####################################*/
const fs = require('fs')
const path = require('path')
let handler = async (m, { usedPrefix, command, text }) => {
    if (!text) throw `where is the text?\n\nexempel: ${usedPrefix + command} menu`
    const filename = path.join(__dirname, `./${text}${!/\.js$/i.test(text) ? '.js' : ''}`)
    const listPlugins = fs.readdirSync(path.join(__dirname)).map(v => v.replace(/\.js/, ''))
    if (!fs.existsSync(filename)) return m.reply(`
'${filename}' not found!
${listPlugins.map(v => v).join('\n').trim()}
`.trim())
    m.reply(fs.readFileSync(filename, 'utf8'))
}
handler.help = ['getplugin'].map(v => v + ' *[filename]*')
handler.tags = ['owner']
handler.command = /^(getplugin|get ?plugin|gp)$/i

handler.rowner = true

module.exports = handler