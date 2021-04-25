const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'body',
    description: 'Grab a minecraft user\'s body.',
    category: 'Minecraft Skins',
    cooldown: '3s',
    aliases: [''],
    minArgs: 1,
    maxArgs: 1,
    expectedArgs: '<minecraft username>',
    callback: async (message, args, text, client, prefix, instance) => {
      if (!args.length) {
        return message.channel.send(`You need to specify a Minecraft username!, ${message.author}!`);
      }
      
      const embed = new MessageEmbed()
      .setTitle(`${args[0]}'s body:`)
      .setFooter("Powered by Minotar | https://minotar.net/")
      .setImage(`https://minotar.net/armor/body/${args[0]}/100.png`)

      message.channel.send(embed);
    }
}