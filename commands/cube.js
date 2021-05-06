const { MessageEmbed } = require("discord.js");

module.exports = {
  name: 'cube',
  description: 'Grab a minecraft user\'s head in cube form.',
  category: 'Minecraft Skins',
  cooldown: '3s',
  minArgs: 1,
  maxArgs: 1,
  expectedArgs: '<minecraft username>',
  callback: async ({ message }) => {
    const embed = new MessageEmbed()
    .setTitle(`${message.args[0]}'s cube:`)
    .setFooter("Powered by Minotar | https://minotar.net/")
    .setImage(`https://minotar.net/cube/${message.args[0]}/100.png`)

    message.channel.send(embed);
  }
}