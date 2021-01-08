const Discord = require('discord.js');
const WOKCommands = require('wokcommands');
const fetch = require('node-fetch');
const client = new Discord.Client();

const { token, prefix } = require('./botsettings.json');

client.once('ready', () => {
    console.log('Ready!');
    client.user.setActivity(`Minecraft Skin Grabber is now Minecraft Bot! (mcb!newname) | ${prefix}help`, { type: 'PLAYING' });

    new WOKCommands(client, 'commands', 'features')
    .setDefaultPrefix(prefix)
    .setCategoryEmoji('Minecraft Skins', '🙋‍♂️')
    .setCategoryEmoji('Utilities', '🔧')
    .setCategoryEmoji('Minecraft Servers', '🌐')
    .setCategoryEmoji('Minecraft API', '🟩')
});

client.login(token);