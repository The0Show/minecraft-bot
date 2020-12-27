const Discord = require('discord.js');
const WOKCommands = require('wokcommands');
const fetch = require('node-fetch');
const client = new Discord.Client();

const { token, prefix } = require('./config.json');

client.once('ready', () => {
    console.log('Ready!');
    if(client.guilds.cache.size == 1){
        client.user.setActivity(`Minecraft Skin Grabber is now Minecraft Bot: <announcement link coming soon> | ${prefix}help`, { type: 'LISTENING' });
        return;
    }
    client.user.setActivity(`Minecraft Skin Grabber is now Minecraft Bot: <announcement link coming soon> | ${prefix}help`, { type: 'LISTENING' });

    new WOKCommands(client, 'commands', 'features')
    .setDefaultPrefix(prefix)
    .setCategoryEmoji('Minecraft Skins', '🙋‍♂️')
});

client.login(token);