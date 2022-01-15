const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setColor('YELLOW') 
.setAuthor(`Chingle Müzik Menüsü`, client.user.avatarURL())
.setDescription(`Chingle botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`__Şarkı Başlatma__`,`⚙ \`${prefix}play\` Şarkıyı Başlatır. / Sıraya ekler.`,true)
.addField(`__Şarkı Durdura__`,`⚙ \`${prefix}stop\` Şarkıyı Durdurur.`,true)
.addField(`__Şarkı Atlama__`,`⚙ \`${prefix}skip\` Şarkıyı Atlar.`,true)
.addField(`__Devam Ettirme__`,`⚙ \`${prefix}resume\` Durdurduğunuz Şarkıyı Devam Ettirirsiniz.`,true)
.addField(`__Şarkı Adını Öğrenme__`,`⚙ \`${prefix}np\` Çalan Şarkının Adını Öğrenirsiniz.`,true)
.addField(`__Döngü__`,`⚙ \`${prefix}loop\` Çalan Şarkıyı Döngüye Sokarsınız.`,true)
.addField(`__Bilgilendirme__`,` \`${prefix}davet\` | Chingle'yi Sunucunuza Davet Edersiniz\n \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n  \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
.setImage(``)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "müzik",
  aliases: ["muzik","music"]
}
