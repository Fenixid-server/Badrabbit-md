
let handler = async (m, { conn, args, usedPrefix, command }) => {
let text;
  if (args.length >= 1) {
    text = args.slice(0).join(" ");
  } else if (m.quoted && m.quoted.text) {
    text = m.quoted.text;
  } else return m.reply(Func.example(usedPrefix, command,"halo"));
    m.reply(wait)
    try {
    let chat = await Scraper.Gpt.ChatGpt(text)
    let hasil = "*AI ASSISTENT F E N I X I D*" + '\n' + chat.answer
    conn.reply(m.chat,hasil, m, adReply)
   } catch (e) {
m.reply(eror)
     } 
}
handler.help = ["ai","chagpt","openai"].map(a => a + " *[Question]*")
handler.tags = ["ai"]
handler.command = ["ai","chagpt","openai"]
module.exports = handler