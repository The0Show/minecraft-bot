const Discord = require('discord.js');
const { MessageEmbed } = Discord
const WOKCommands = require('wokcommands');
const fetch = require('node-fetch');
const client = new Discord.Client({
    partials: ["MESSAGE", "REACTION"]
});
require('dotenv').config()
const ping = require('ping')

const prefix = 'mcb!'

client.once('ready', () => {
    console.log('Ready!');
    client.user.setActivity(`${client.guilds.cache.size} servers`, { type: 'WATCHING' });

    new WOKCommands(client, 'commands', 'features')
    .setDefaultPrefix('mcb!')
    .setCategoryEmoji('Minecraft Skins', '🙋‍♂️')
    .setCategoryEmoji('Utilities', '🔧')
    .setCategoryEmoji('Minecraft Servers', '🌐')
    .setCategoryEmoji('Minecraft API', '🟩')
    .setBotOwner('468093150217371649')
});

client.once('rateLimit', rldata => {
    console.log('I\'m being ratelimited, and this proves that I\'m doing so much work for you. Please pay me. I want some RAM.\n\nRate Limit Timeout:\n' + rldata.timeout)
})

client.login(process.env.DISCORD_TOKEN);