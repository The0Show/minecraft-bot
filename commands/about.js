const fetch = require('node-fetch');
const packagefile = require('../package.json');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'about',
    description: 'Get bot info',
    category: 'Utilities',
    cooldown: '3s',
    aliases: ['botinfo'],
    minArgs: 0,
    maxArgs: 0,
    callback: async ({ message }) => {
        let contributors = "";
        const response = await fetch("https://api.github.com/repos/The0Show/minecraft-bot/contributors").then(res => res.json());

        /** 
         * Bit confused here. Would it not be easier to do something like this:
         * 
         * if (element.login !== "The0Show")
         *      contributors += `[${element.login}](${element.html_url})\n`;
         * 
         * I'd recommend doing that instead.
         */
        response.forEach(element => {
            if (element.login !== "The0Show")
                contributors = `${contributors}[${element.login}](${element.html_url})\n`;
        });

        const embed = new MessageEmbed()
        .setTitle(`Minecraft Bot v${packagefile.version} (click to read changelogs)`)
        .setURL(`https://github.com/The0Show/minecraft-bot/blob/main/changelogs/${packagefile.version}.md`)
        .setDescription(`Made by [The0Show](https://the0show.com)\n\n**Contributors**\n${contributors || 'No other contributors'}`)

        message.channel.send(embed);
    }
}