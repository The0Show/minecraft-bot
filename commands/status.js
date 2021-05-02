const Discord = require('discord.js');
const fetch = require('node-fetch');
var ping = require('ping');

module.exports = {
    name: 'status',
    description: 'Get the status for Minecraft, Minotar, and Hypixel.',
    category: 'Utilities',
    cooldown: '3s',
    aliases: ['isonline'],
    minArgs: 0,
    maxArgs: 0,
    callback: async (message, args, text, client, prefix, instance) => {
        message.channel.startTyping(100)
        fetch("https://status.mojang.com/check")
        .then(res => res.json())
        .then(async res => {
            const embed = new Discord.MessageEmbed()
            .setTitle("Minecraft Bot Status")
            res.forEach(obj => {
                embed.addField(Object.keys(obj)[0], `:${Object.values(obj)[0]}_circle:`)
            })
            const minotar = await ping.promise.probe("minotar.net")
            const hypixel = await ping.promise.probe("api.hypixel.net")
            if(minotar.alive) embed.addField("minotar.net", ":green_circle:")
            else if(!minotar.alive) embed.addField("minotar.net", ":red_circle:")
            if(hypixel.alive) embed.addField("api.hypixel.net", ":green_circle:")
            else if(!hypixel.alive) embed.addField("api.hypixel.net", ":red_circle:")
            .setFooter('By The0Show#8908 // Color Implementation by Skrt#1337', 'https://cdn.discordapp.com/avatars/468093150217371649/958fb70d7627631e7dc5ec39a4fca68e.jpg?size=2048')
            message.channel.send(embed)
            message.channel.stopTyping(true)
        })
    }
}
