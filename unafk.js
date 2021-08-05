const Discord = require('discord.js')
module.exports = {
  name: "unafk",
  description: "Sets your status as AFK",
  execute(message, args) {
    let embed = new Discord.MessageEmbed()
    .setTitle("You are not AFK anymore! :tada:")
    .setDescription("<a:success:869127820562010132> » Successfully removed your AFK status.")
    .setColor("#08798b")
    .setFooter(message.author.username, message.author.displayAvatarURL())
    message.channel.send(embed)
  }
}
