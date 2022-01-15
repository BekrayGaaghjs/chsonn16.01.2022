const Discord = require("discord.js")
const fs = require("fs")
const db = require("quick.db");
const ayarlar = require("../ayarlar/bot.json");

exports.run = async (client, message, args) => {
  	let p = db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix;

const embed = new Discord.MessageEmbed()
.setColor("YELLOW")
.setAuthor(`Chingle Davet`, client.user.avatarURL())
.setDescription('**• [Chingle`ı Ekleyin.](https://chinglebot.glitch.me/)**\n\n**• [Chingle Oy Ver](https://davet)**')
.setFooter(`${message.author.username} tarafından istendi!`) 
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)   
 };  

 exports.config = {
      name: 'davet',
   aliases: ["invitation","site"]
 };