const { MessageEmbed } = require("discord.js");

module.exports = {
  name: 'bust',
  description: 'Grab a minecraft user\'s body in profile picture form.',
  category: 'Minecraft Skins',
  cooldown: '3s',
  minArgs: 1,
  maxArgs: 1,
  expectedArgs: '<minecraft username>',
  callback: async ({ message }) => {
    const embed = new MessageEmbed()
    .setTitle(`${message.args[0]}'s bust:`)
    .setFooter("Powered by Minotar | https://minotar.net/")
    .setImage(`https://minotar.net/armor/bust/${message.args[0]}/100.png`)

    message.channel.send(embed);
  }
}