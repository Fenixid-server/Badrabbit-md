/*####################################
                 F E N I X - V 15
             MADE BY F E N I X
       
✅ WhatsApp: wa.me/94773010580
👥 Github: https://github.com/devon19998
#####################################*/
const {
    Prodia
} = require("prodia.js");
const apiKey = "df165bab-9893-4f02-92bf-e8b09592b43a";
const prodia = new Prodia(apiKey);

let handler = async (m, {
    command,
    usedPrefix,
    conn,
    text,
    args
}) => {
conn.txt2img = conn.txt2img ? conn.txt2img : {};
    const input_data = await prodia.getSDmodels();
    try {
          let data = input_data.map((item, index) => ({
            title: item.replace(/[_-]/g, ' ').replace(/\..*/, ''),
            id: item
        }));
    await m.reply(wait)
    if (!text) return  m.reply("*• Example:* .setmodel *[number]*\n\n*[ LIST MODEL ]*\n" + data.map((item, index) => `*${index + 1}.* ${item.title}`).join("\n"))
    let hasil = data[text - 1].id
    m.reply(`[ ✓ ] Success set model_id *${hasil}*`)
    conn.txt2img = hasil
    } catch (e) {
        await m.reply(eror)
    }
}
handler.help = ["setmodel *[number]*"]
handler.tags = ["ai"]
handler.command = /^(setmodel)$/i

module.exports = handler