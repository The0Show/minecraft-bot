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
  callback: async({ message }) => {
    const embed = new MessageEmbed()
    .setTitle(`${message.args[0]}'s body:`)
    .setFooter("Powered by Minotar | https://minotar.net/")
    .setImage(`https://minotar.net/armor/body/${message.args[0]}/100.png`)

    message.channel.send(embed);
  }
}