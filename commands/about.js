const { MessageEmbed } = require('discord.js')
const packagefile = require('../package.json')

module.exports = {
    name: 'about',
    description: 'Get bot info',
    category: 'Utilities',
    cooldown: '3s',
    aliases: ['botinfo'],
    minArgs: 0,
    maxArgs: 0,
    callback: async (message, args, text, client, prefix, instance) => {
        const embed = new MessageEmbed()
        .setTitle(`Minecraft Bot v${packagefile.version} (click to read changelogs)`)
        .setURL(`https://github.com/The0Show/minecraft-bot/blob/main/changelogs/${packagefile.version}.md`)

        message.channel.send(embed)
    }
}