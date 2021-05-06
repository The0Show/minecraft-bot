const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');

const introembed = new MessageEmbed()
.setTitle('2b2t Commands')
.setDescription('Thanks to the [2b2t.io](https://2b2t.io/) and [2b2t.dev](https://2b2t.dev/) APIs, I can give you 2b2t info! Use the below commands to get 2b2t info!')
.addFields(
    { name: 'mcb!2b2t queue', value: 'Get the current regular and priority queue!', inline: true },
    { name: 'mcb!2b2t stats <minecraft username>', value: 'See a user\'s stats', inline: true }
)

module.exports = {
    name: '2b2t',
    description: 'Get 2b2t info.',
    category: 'Minecraft Servers',
    cooldown: '3s',
    aliases: ['2builders2tools'],
    minArgs: 0,
    maxArgs: -1,
    callback: async({ message, args }) => {
        if (!args[0])
            return message.channel.send(introembed);
    
        message.channel.startTyping(100);
    
        if(message.args[0] === 'stats') {
            if (!message.args[1])
                return message.channel.send('Usage: `mcb!2b2t stats <minecraft username>`');
    
            const stats = await fetch(`https://api.2b2t.dev/stats?username=${message.args[1]}`).then(response => response.json());
            const lastseen = await fetch(`https://api.2b2t.dev/seen?username=${message.args[1]}`).then(response => response.json());
    
            if(!stats[0]){
                const d = await fetch(`https://api.mojang.com/users/profiles/minecraft/${message.args[1]}`).then(response => response.json()).catch(() => {
                    message.channel.send('That Minecraft username is invalid.');
                    message.channel.stopTyping(true);
                })
                
                if (d) {
                    message.channel.send(`${message.args[1]} hasn't joined 2b2t yet.`);
                    message.channel.stopTyping(true);
                }
            }
    
            const statembed = new MessageEmbed()
            .setTitle(`${message.args[1]}'s 2b2t Stats (ID: ${stats[0].id})`)
            .addFields(
                { name: 'Kills', value: stats[0].kills, inline: false },
                { name: 'Deaths', value: stats[0].deaths, inline: false },
                { name: 'Joins', value: stats[0].joins, inline: false },
                { name: 'Leaves', value: stats[0].leaves, inline: false },
                { name: 'Last Seen On', value: lastseen[0].seen + ' (EDT)', inline: false }
            )
            .setThumbnail(`https://minotar.net/armor/bust/${message.args[1]}/100.png`)
    
            message.channel.send(statembed);
            message.channel.stopTyping(true);
            return;
        }
        
        if(message.args[0] === 'queue'){
            const rawprioqueueinfo = await fetch(`https://api.2b2t.dev/prioq`).then(response => response.json());
            const rawregqueueinfo = await fetch(`https://2b2t.io/api/queue`).then(response => response.json());
            const regqueueinfo = rawregqueueinfo[0];
            const prioqueueinfo = rawprioqueueinfo;
            const queueembed = new MessageEmbed()
            .setTitle('2b2t Queue')
            .addFields(
                { name: 'Regular', value: regqueueinfo[1] + " players", inline: true },
                { name: 'Priority', value: prioqueueinfo[1] + " players", inline: true }
            )
    
            message.channel.send(queueembed);
            message.channel.stopTyping(true);
            return;
        }
    
        message.channel.send(introembed);
        message.channel.stopTyping(true);
    }
}