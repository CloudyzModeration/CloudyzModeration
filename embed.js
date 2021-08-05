const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "embed",
  aliases: [],
  description: "create an embed!",
  async execute(message, args, Discord, client) {
    const embedChannel = message.mentions.channels.first();
    if (!embedChannel) {
      message.channel.send("`You did not mention the channel.`");
      return;
    }

    const content = args.slice(1).join(" ");

    // Embed settings;
    let embedColor = content.split("|")[0];
    if (!embedColor) {
      message.channel.send("`You did not mention the embed color.`");
      return;
    }

    let embedTitle = content.split("|")[1];
    if (!embedTitle) {
      message.channel.send("`You did not mention the embed title.`");
      return;
    }

    let embedDescription = content.split("|")[2];
    if (!embedDescription) {
      message.channel.send("`You did not mention the embed description.`");
      return;
    }

    // Final creation of embed;
    let embed = new MessageEmbed()
      .setColor(embedColor)
      .setTitle(embedTitle)
      .setDescription(embedDescription)
      .setFooter(
        `${message.author.tag} | ${message.author.id}`,
        message.author.displayAvatarURL({ dynamic: true })
      );

    embedChannel.send(embed);
  },
};

// a!embed <channel mention> colorInHEX|title|description
