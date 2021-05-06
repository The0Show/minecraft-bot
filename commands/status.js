const ping = require('ping');
const fetch = require('node-fetch');
const { MessageEmbed }= require('discord.js');

const embed = new MessageEmbed()
.setTitle("Minecraft Bot Status")
.setFooter(
    'By The0Show#8908 // Color Implementation by Skrt#1337',
    'https://cdn.discordapp.com/avatars/468093150217371649/958fb70d7627631e7dc5ec39a4fca68e.jpg?size=2048'
)

module.exports = {
    name: 'status',
    description: 'Get the status for Minecraft, Minotar, and Hypixel.',
    category: 'Utilities',
    cooldown: '3s',
    aliases: ['isonline'],
    minArgs: 0,
    maxArgs: 0,
    callback: async({ message }) => {
        message.channel.startTyping(100);

        const res = await fetch("https://status.mojang.com/check").then(res => res.json());
        res.forEach(obj => {
            embed.addField(Object.keys(obj)[0], `:${Object.values(obj)[0]}_circle:`)
        });

        const minotar = await ping.promise.probe("minotar.net");
        const hypixel = await ping.promise.probe("api.hypixel.net");

        minotar.alive ? embed.addField("minotar.net", ":green_circle:") : embed.addField("minotar.net", ":red_circle:");
        hypixel.alive ? embed.addField("api.hypixel.net", ":green_circle:") : embed.addField("api.hypixel.net", "red_circle:");

        message.channel.send(embed);
        message.channel.stopTyping(true);
    }
}
