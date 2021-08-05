const Discord = require('discord.js')
module.exports = {
   name: "ping",
   description: "Shows the bot ping and API latency",
   execute(message, args) {
         message.channel.send("`Calculating the ping...`").then(m =>{
            let client = message.client
            let ping = m.createdTimestamp - message.createdTimestamp;
            let apilatency = client.ws.ping 
            let embed = new Discord.MessageEmbed()
            .setTitle('Bot Ping')
            .setDescription(`❯ Latency: ${ping}ms\n❯ API latency: ${apilatency}ms`)
            .setColor("#08798b")
            .setFooter(message.author.id, message.author.displayAvatarURL())

            m.edit('', embed)
        });
   }
}
