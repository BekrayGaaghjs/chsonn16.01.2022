 const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setAuthor(`Chingle Sayaç Komutları`, client.user.avatarURL())
.setColor('YELLOW')
.setDescription(`Chingle botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`__Sayaç Ayarla__`,` \`${prefix}sayaç-ayarla\` Sunucunuzda Sayacı Ayarlar.`,true)
.addField(`__Oto Cevap Liste__`,` \`${prefix}sayaç-hg-mesaj\` Sunucunuzdaki Sayacın Hoş Geldin Mesajını Ayarlar.`,true)
.addField(`__Oto Cevap Sil__`,`  \`${prefix}sayaç-bb-mesaj\` Sunucunuzdaki Sayacın Görüşürüz Mesajını Ayarlar.`,true)
.addField(`__Bilgilendirme__`,` \`${prefix}davet\` | Lord Creative'yi Sunucunuza Davet Edersiniz\n \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n   \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
  .setImage(``)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "sayaç",
  aliases: []
}