let fs = require('fs');

let handler = async (m, { text, usedPrefix, command }) => {

  if (!text) throw `uhm... where's the text??\n\nbro its:\n${usedPrefix + command} <teks>\n\nexample:\n${usedPrefix + command} menu`;

  if (command === 'sf') {

    if (!m.quoted.text) throw `reply to the message!`;
    let path = `features/fenix1999-${text}.js`;
    await fs.writeFileSync(path,`/*####################################
                 F E N I X - V 15
             MADE BY FENIX ID SERVER
       
✅ WhatsApp: https://wa.link/c0yhyu
👥 Github: https://github.com/devon19998
#####################################*/` + "\n\n" + m.quoted.text);
    m.reply(`saved in ${path}`);
  } else if (command === 'df') {
    let path = `features/${text}.js`;
    if (!fs.existsSync(path)) throw `file plugin ${text}.js not found`;
    fs.unlinkSync(path);
    m.reply(`file plugin ${text}.js deleted successfully`);
  }
};
handler.help = ['sf', 'df'].map(v => v + ' *[Path]*');
handler.tags = ['owner']
handler.command = /^(sf|df)$/i;
handler.rowner = true;
module.exports = handler;