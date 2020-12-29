const fetch = require('node-fetch');
const Discord = require('discord.js')

async function workworkwork(message, args, text, client, prefix, instance){
    const uuid = await fetch(`https://api.mojang.com/users/profiles/minecraft/${args[0]}`).then(response => response.json()).catch(() => {
        message.channel.send('Error: Invalid Minecraft Username')
    })

    const embed = new Discord.MessageEmbed()
    .setTitle(`${args[0]}'s UUID is ${uuid.id}`)
    .setImage(`https://minotar.net/armor/bust/${args[0]}/100.png`)

    message.channel.send(embed)
}

module.exports = {
    name: 'uuid',
    description: 'Get aMinecraft user\'s UUID.',
    category: 'Minecraft API',
    cooldown: '3s',
    aliases: ['getuuid'],
    minArgs: 1,
    maxArgs: 1,
    expectedArgs: '<minecraft username>',
    callback: (message, args, text, client, prefix, instance) => {
        workworkwork(message, args, text, client, prefix, instance)
    }
}