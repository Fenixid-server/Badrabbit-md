/*####################################
                 F E N I X - V 15
             MADE BY F E N I X
       
✅ WhatsApp: wa.me/94773010580
👥 Github: https://github.com/devon19998
#####################################*/
const fs = require('fs');
const path = require('path');

const handler = async (m, { conn }) => {
  const directory = './Fenix1999';

  function deleteFilesExceptOne(directory, fileNameToKeep) {
    fs.readdir(directory, (err, files) => {
      if (err) {
        console.error('Terjadi kesalahan:', err);
        return;
      }
      files.forEach((file) => {
        const filePath = path.join(directory, file);
        if (file !== fileNameToKeep) {
          fs.unlink(filePath, (err) => {
            if (err) {
              console.error(`Failed to delete file ${file}:`, err);
            } else {
              console.log(`File ${file} deleted successfully.`);
            }
          });
        }
      });

      m.reply(`Successfully deleted files in the fenix1999 folder✅`);
    });
  }

  deleteFilesExceptOne(directory, 'creds.json');
};

handler.command = handler.help = ['csessi', 'clearsessi'];
handler.tags = ['owner'];
handler.rowner = true;

module.exports = handler;