/*####################################
                 F E N I X - V 15
             MADE BY F E N I X
       
✅ WhatsApp: wa.me/94773010580
👥 Github: https://github.com/devon19998
#####################################*/

let fetch = require('node-fetch')
let util = require('util')
let handler = async (m, { text }) => {
  if (!/^https?:\/\//.test(text)) throw 'Start *URL* with http:// or https://'
  let _url = new URL(text)
  let url = global.API(_url.origin, _url.pathname, Object.fromEntries(_url.searchParams.entries()), 'APIKEY')
  let res = await fetch(url)
  if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
    delete res
    throw `Content-Length: ${res.headers.get('content-length')}`
  }
  if (!/text|json/.test(res.headers.get('content-type'))) return conn.sendFile(m.chat, url, 'file', text, m)
  let txt = await res.buffer()
  try {
    txt = util.format(Func.jsonFormat((txt+'')))
  } catch (e) {
    txt = txt + ''
  } finally {
    m.reply(txt.slice(0, 65536) + '')
  }
}
handler.help = ['fetch', 'get'].map(v => v + ' *[url]*')
handler.tags = ['tools']
handler.command = /^(fetch|get)$/i

module.exports = handler