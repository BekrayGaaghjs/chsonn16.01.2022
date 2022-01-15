const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('Yazmam İçin Her Hangi Bir Şey Yazmalısın!');
  
  message.delete();
  message.channel.send(mesaj);
};

exports.config = {
name: "yaz615",
  aliases: []
}