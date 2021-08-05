const Discord = require('discord.js')
module.exports = {
  name: "serverinfo",
  description: "Shows server info",
  execute(message, args) {
    let animated = []
    let normal = []
    message.guild.emojis.cache.forEach(e => {
          if (e.animated) {
              animated.push(`<a:${e.name}:${e.id}>`)
          } else if (!e.animated) {
              normal.push(`<:${e.name}:${e.id}>`)
          }
    })
    let guild = message.guild
    if (!guild) return;
    let embed = new Discord.MessageEmbed()
    .setTitle(guild.name)
    .setDescription(`
            ❯ **Server Name:**  ${guild.name}
            ❯ **Member Count:**  ${guild.memberCount}
            ❯ **Server ID:**  ${guild.id ? guild.id : console.log("None guild ID")}
            ❯ **AFK channel:**  ${guild.afkChannel ? `<#${guild.afkChannelID}>` : "N/A"}
            ❯ **AFK timeout:**  ${guild.afkTimeout ? guild.afkTimeout : "N/A"} 
            ❯ **Emojis:**  
             ⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⠀⠀⠀⠀⠀❱ Animated:  ${animated.length > -1 ? animated.join(" ") : "none"}
             ⠀⠀⠀⠀⠀❱ Normal:  ${normal.length > -1 ? animated.join(" ") : "none"}
            `)
    .setColor('#08798b')
    .setFooter(message.author.id, message.author.displayAvatarURL())
    message.channel.send(embed)
  }
}
