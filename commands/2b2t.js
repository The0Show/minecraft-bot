const Discord = require('discord.js')
const fetch = require('node-fetch');
const fs = require('fs');

async function workworkwork(message, args, text, client, prefix, instance){
    const introembed = new Discord.MessageEmbed()
    .setTitle('2b2t Commands')
    .setDescription('Thanks to the [2b2t.io](https://2b2t.io/) and [2b2t.dev](https://2b2t.dev/) APIs, I can give you 2b2t info! Use the below commands to get 2b2t info!')
    .addField('mcb!2b2t queue', 'Get the current regular and priority queue!', true)
    .addField('mcb!2b2t seen <minecraft username>', 'See when a user was last on 2b2t.', true)
    .addField('mcb!2b2t stats <minecraft username>', 'See a user\'s stats.', true)

    if(!args.length) return message.channel.send(introembed)

    message.channel.startTyping(100)

    if(args[0] === 'stats'){
        if(!args[1]) return message.channel.send('Usage: `mcb!2b2t stats <minecraft username>`')

        const stats = await fetch(`https://api.2b2t.dev/stats?username=${args[1]}`).then(response => response.json())
        const lastseen = await fetch(`https://api.2b2t.dev/seen?username=${args[1]}`).then(response => response.json())

        if(!stats[0]){
            const d = await fetch(`https://api.mojang.com/users/profiles/minecraft/${args[1]}`).then(response => response.json()).catch(() => {
                message.channel.send('That Minecraft username is invalid.')
                message.channel.stopTyping(true)
            })
            
            if(!d){
            } else {
                message.channel.send(`${args[1]} hasn't joined 2b2t yet.`)
                message.channel.stopTyping(true)
            }
        }

        const statembed = new Discord.MessageEmbed()
        .setTitle(`${args[1]}'s 2b2t Stats (ID: ${stats[0].id})`)
        .addField('Kills', stats[0].kills, false)
        .addField('Deaths', stats[0].deaths, false)
        .addField('Joins', stats[0].joins, false)
        .addField('Leaves', stats[0].leaves, false)
        .addField('Last Seen On', lastseen[0].seen + ' (EDT)', false)
        .setThumbnail(`https://minotar.net/armor/bust/${args[1]}/100.png`)

        message.channel.send(statembed)
        message.channel.stopTyping(true)
        return
    }
    
    if(args[0] === 'queue'){
        const rawprioqueueinfo = await fetch(`https://api.2b2t.dev/prioq`).then(response => response.json())
        const rawregqueueinfo = await fetch(`https://2b2t.io/api/queue`).then(response => response.json())
        const regqueueinfo = rawregqueueinfo[0]
        const prioqueueinfo = rawprioqueueinfo
        const queueembed = new Discord.MessageEmbed()
        .setTitle('2b2t Queue')
        .addField('Regular', regqueueinfo[1], true)
        .addField('Priority', prioqueueinfo[1], true)

        message.channel.send(queueembed)
        message.channel.stopTyping(true)
        return
    }

    message.channel.send(introembed)
    message.channel.stopTyping(true)
}

module.exports = {
    name: '2b2t',
    description: 'Get 2b2t info.',
    category: 'Minecraft Servers',
    cooldown: '3s',
    aliases: ['2builders2tools'],
    minArgs: 0,
    maxArgs: -1,
    callback: (message, args, text, client, prefix, instance) => {
        workworkwork(message, args, text, client, prefix, instance)
    }
}