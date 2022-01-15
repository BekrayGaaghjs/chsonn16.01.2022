  
const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setColor('YELLOW') 
.setAuthor(`Chingle Genel Komutlar`, client.user.avatarURL())
.setDescription(`Chingle botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`__Komut Sayısı__`,`  \`${prefix}komutlar\` Botun Komut Sayısını Gösterir`,true)
.addField(`__Davet Et__`,`  \`${prefix}davet\` Botumuzu Davet Edersiniz`,true)
.addField(`__Bot Bilgi__`,` \`${prefix}botbilgi\` Botumuzun İstatistikleri`,true)
.addField(`__Profil__`,`  \`${prefix}profil\` Kullanıcı Profilinizi Gösterir`,true)
.addField(`__Adam Asmaca__`,`  \`${prefix}adamasmaca\` Adam Asmaca Oynarsınız`,true)
.addField(`__Korona Bilgi__`,`  \`${prefix}koronabilgi\` Anlık Korona Bilgisi`,true)
.addField(`__Hava Durumu__`,`  \`${prefix}havadurumu\` Yazdığınız Şehirin HavaDurumunu Gösterir.`,true)
.addField(`__Steam__`,`  \`${prefix}steam\` Yazdığınız Oyunun Steam'deki Bilgisini Gösterir.(Fiyatı vb.)`,true)
.addField(`__Bilgilendirme__`,` \`${prefix}davet\` | Chingle'yi Sunucunuza Davet Edersiniz\n  \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n   \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
.setImage(``)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "genel",
  aliases: []
}
