const Discord = require('discord.js')
module.exports = {
  name: "servericon",
  aliases: ["serwer-icon", "serveravatar", "serweravatar"],
  user: {
    permissions: [],
    requiredRoles: [],
  },
  description: {
    usage: "!serwer-icon",
    category: "4fun",
  },
  execute(message, args) {
    const embed = new Discord.MessageEmbed()
      .setColor("#08798b")
      .setTitle(`Server Avatar`)
      .setURL(message.guild.iconURL())
      .setImage(message.guild.iconURL())
      .setFooter(
        `Command executed by: ${message.author.tag}`,
        message.author.displayAvatarURL({ dynamic: true })
      );

    message.channel.send(embed);
  },
};
