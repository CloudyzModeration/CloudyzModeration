const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js')
module.exports = {
  name: "userinfo",
  aliases: ["user-info", "me", "ui"],
  user: {
    permissions: [],
    requiredRoles: [],
  },
  description: "userinfo",
  execute(message, args)  {
    const user = message.mentions.users.first() || message.author;
    const guildMember = message.guild.members.cache.get(user.id);

    let userbot;
    if (message.author.bot == true) {
      userbot = "<a:success:869127820562010132> » Yes.";
    } else {
      userbot = "<a:failure:869127774139478047> » No.";
    }

    const embed = new MessageEmbed()
      .setColor("#08798b")
      .setAuthor(
        `Information about: ${user.tag}`,
        user.displayAvatarURL({ dynamic: true })
      )
      .setThumbnail(user.displayAvatarURL({ dynamic: true }))
      .addFields(
        {
          name: "Tag & ID:",
          value: `${user.tag} | **${user.id}**`,
        },
        {
          name: "Joined the server:",
          value: new Date(guildMember.joinedTimestamp).toLocaleDateString(),
        },
        {
          name: "Account created: ",
          value: new Date(user.createdTimestamp).toLocaleDateString(),
        },
        { name: "Role Count: ", value: guildMember.roles.cache.size },
        { name: "Is a bot: ", value: userbot },
        { name: "Nickname: ", value: guildMember.nickname || "No nickname found." }
      );

    message.channel.send(embed);
  },
};
