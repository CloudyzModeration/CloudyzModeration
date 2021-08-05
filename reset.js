// resets the channel

//copy the thing below V
const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "reset",
    description: "czyszczenie kanału",
        execute(message, args) {
        if(!message.member.hasPermission("ADMINISTRATOR", "MANAGE_CHANNELS")) {
            return message.reply("`You do not have enough permission to use this command.`")
        }
        let reason = args.join(" ") || "No reason mentioned."
        if(!message.channel.deletable) {
            return message.reply("`You cannot reset this channel.`")
        }
        let newchannel =  message.channel.clone()
         message.channel.delete()
        let embed = new MessageEmbed()
    }
}
