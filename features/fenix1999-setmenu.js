
let handler = async (m, {conn, text}) => {
global.menu = text
if (text === 'doc') {
m.reply('Success Set the menu to Documentt ✅')
} else if (text === 'simple') {
m.reply('Success. Set the menu to be simple ✅')
} else if (text === 'gif') {
m.reply('successful set menu to gif ✅')
} else if (text === 'payment') {
m.reply('successfully set the menu to payment ✅')
} else if (text === 'edit') {
m.reply('successful set menu to edit message  ✅')
} else m.reply('The menu has been successfully reset‼️\n\n===========================\n*•THE FOLLOWING IS A LIST OF MENU DISPLAYS*\n• doc : displays the menu with documentMessage\n• simple : displays the menu with simpleMenu\n• gif : displays the menu with Gif\n• payment : displays the menu with RequestPaymentMessage\n================= ========\n\n*Example:* .setmenu doc')
}
handler.command = handler.help = ['setmenu']
handler.tags = ['owner']
handler.rowner = true
module.exports = handler