/*####################################
                 F E N I X - V 15
             MADE BY F E N I X
       
✅ WhatsApp: wa.me/94773010580
👥 Github: https://github.com/devon19998
#####################################*/
const { translate } = require('@vitalets/google-translate-api');
const defaultLang = 'id'
let handler = async (m, { args, usedPrefix, command }) => {
    if (!args[0] && !m.quoted) {
        throw `*• Example* :  ${usedPrefix + command} id how are you`
    }
    let lang = args[0]
    let text = args.slice(1).join(' ')
    if ((args[0] || '').length !== 2) {
        lang = defaultLang
        text = args.join(' ')
    }
    if (!text && m.quoted && m.quoted.text) text = m.quoted.text
    let result = await translate(text, { to: lang, autoCorrect: true }).catch(_ => null)     
    if (!result) throw '*Translation failed.*'
    m.reply(result.text.toString())
}
handler.help = ['translate', 'tl', 'trid', 'tr'].map(a => a + ' *[Lang Query]*')
handler.tags = ['tools']
handler.command = ['translate', 'tl', 'trid', 'tr']
module.exports = handler