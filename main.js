const { Client } = require('discord.js');
const WOKCommands = require('wokcommands');
require('dotenv').config();

const client = new Client({
    partials: ["MESSAGE", "REACTION"]
});

client.on('ready', () => {
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

client.on('rateLimit', rldata => {
    console.log(
        'I\'m being ratelimited, and this proves that I\'m doing so much work for you. Please pay me. I want some RAM.\n\nRate Limit Timeout:\n' +
        rldata.timeout
    );
});

client.login(process.env.DISCORD_TOKEN);