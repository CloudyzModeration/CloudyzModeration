// emojis are custom & made by the bot owner, change the emojis to your own!

const Discord = require('discord.js')
module.exports = {
    name: 'kick',
    description: "This command kicks a member!",
    execute(message, args){
        if (message.member.hasPermission('KICK_MEMBERS')) {
          const target = message.mentions.members.first();
          if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            let embed = new Discord.MessageEmbed()
            .setTitle("<a:success:869127820562010132> » Kicked " + target)
            .setDescription("<a:success:869127820562010132> » `User has been kicked.`")
            .setColor("#08798b")
            .setFooter(message.author.id, message.author.displayAvatarURL())
            message.channel.send(embed)
            let pvEmbed = new Discord.MessageEmbed()
            .setTitle("Kick Information")
            .setDescription("You have been kicked from: " + message.guild.name + ".")
            .setColor("#08798b")
            .setFooter(message.author.id, message.author.displayAvatarURL())
            target.send(pvEmbed)  
            target.kick().catch(err => console.log(err))
          }else{
            let embed = new Discord.MessageEmbed()
            .setTitle("Kick")
            .setDescription("<a:failure:869127774139478047> » `You can't kick this user.`")
            .setColor("#08798b")
            .setFooter(message.author.id, message.author.displayAvatarURL())
            message.channel.send(embed)
          }
        } else {
          let embed = new Discord.MessageEmbed()
          .setTitle("Kick")
          .setDescription("<a:failure:869127774139478047> » `You do not have enough permission to kick this user.`")
          .setColor("#08798b")
          .setFooter(message.author.id, message.author.displayAvatarURL())
          message.channel.send(embed)
        }
    }
}
