const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "suggest",
    description: "zasugeruj coÅ!",
    execute(message, args, Discord) {

        if(message.content.includes('@everyone') || message.content.includes('@here')) return;
        
        const channel = message.guild.channels.cache.get('868464302523310080');

        const suggestion = args.join(' ');
        if(!suggestion) return message.channel.send('You didnt mention your suggestion.');

        const embed = new MessageEmbed()
        .setColor('#08798b')
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setTitle("Suggestion!")
        .setDescription(`${suggestion}`);

        channel.send(embed).then(m =>{
            m.react('ð');
            m.react('ð');
        })
    }
}
