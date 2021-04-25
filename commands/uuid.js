const fetch = require('node-fetch');
const Discord = require('discord.js')

module.exports = {
    name: 'uuid',
    description: 'Get a Minecraft user\'s UUID.',
    category: 'Minecraft API',
    cooldown: '3s',
    aliases: ['getuuid'],
    minArgs: 1,
    maxArgs: 1,
    expectedArgs: '<minecraft username>',
    callback: async (message, args, text, client, prefix, instance) => {
        const uuid = await fetch(`https://api.mojang.com/users/profiles/minecraft/${args[0]}`).then(response => response.json()).catch(() => {
            message.channel.send('Error: Invalid Minecraft Username')
        })
    
        const embed = new Discord.MessageEmbed()
        .setTitle(`${args[0]}'s UUID is ${uuid.id}`)
        .setImage(`https://minotar.net/armor/bust/${args[0]}/100.png`)
    
        message.channel.send(embed)
    }
}