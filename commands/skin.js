const { MessageEmbed } = require("discord.js");

module.exports = {
  name: 'skin',
  description: 'Grab a minecraft user\'s skin.',
  category: 'Minecraft Skins',
  cooldown: '3s',
  minArgs: 1,
  maxArgs: 1,
  expectedArgs: '<minecraft username>',
  callback: async ({ message }) => {
    const embed = new MessageEmbed()
    .setTitle(`${message.args[0]}'s skin:`)
    .setFooter("Powered by Minotar | https://minotar.net/")
    .setImage(`https://minotar.net/skin/${message.args[0]}`)

    message.channel.send(embed);
  }
}