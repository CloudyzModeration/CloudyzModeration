// this command is still in work

const Discord = require('discord.js')
module.exports = {
  name: "afk",
  description: "Sets your status as AFK",
  execute(message, args) {
    let embed = new Discord.MessageEmbed()
    .setTitle("You're now AFK :cry:")
    .setDescription("<a:success:869127820562010132> » Successfully set your status as AFK.")
    .setColor("#77104c")
    .setFooter(message.author.username, message.author.displayAvatarURL())
    message.channel.send(embed)
  }
}
