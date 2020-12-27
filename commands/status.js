const Discord = require('discord.js');
const fetch = require('node-fetch');

async function workworkwork(message, args, text, client, prefix, instance){
    const mcstatus = await fetch(`https://status.mojang.com/check`).then(response => response.json());
    if(mcstatus[0]["minecraft.net"] === 'green'){
        var minecraftdotnet = 'Online'
    } else if(mcstatus[0]["minecraft.net"] === 'yellow'){
        var minecraftdotnet = 'Online with issues'
    }
    else {
        var minecraftdotnet = 'Offline'
    }
    if(mcstatus[1]["session.minecraft.net"] === 'green'){
        var sessiondotminecraftdotnet = 'Online'
    } else if(mcstatus[1]["session.minecraft.net"] === 'yellow'){
        var sessiondotminecraftdotnet = 'Online with issues'
    }
    else {
        var sessiondotminecraftdotnet = 'Offline'
    }
    if(mcstatus[2]["account.mojang.com"] === 'green'){
        var accountdotmojangdotcom = 'Online'
    } else if(mcstatus[2]["account.mojang.com"] === 'yellow'){
        var accountdotmojangdotcom = 'Online with issues'
    }
    else {
        var accountdotmojangdotcom = 'Offline'
    }
    if(mcstatus[3]["authserver.mojang.com"] === 'green'){
        var authserverdotmojangdotcom = 'Online'
    } else if(mcstatus[3]["authserver.mojang.com"] === 'yellow'){
        var authserverdotmojangdotcom = 'Online with issues'
    }
    else {
        var authserverdotmojangdotcom = 'Offline'
    }
    if(mcstatus[4]["sessionserver.mojang.com"] === 'green'){
        var sessionserverdotmojangdotcom = 'Online'
    } else if(mcstatus[4]["sessionserver.mojang.com"] === 'yellow'){
        var sessionserverdotmojangdotcom = 'Online with issues'
    }
    else {
        var sessionserverdotmojangdotcom = 'Offline'
    }
    if(mcstatus[5]["api.mojang.com"] === 'green'){
        var apidotmojangdotcom = 'Online'
    } else if(mcstatus[5]["api.mojang.com"] === 'yellow'){
        var apidotmojangdotcom = 'Online with issues'
    }
    else {
        var apidotmojangdotcom = 'Offline'
    }
    if(mcstatus[6]["textures.minecraft.net"] === 'green'){
        var texturesdotminecraftdotnet = 'Online'
    } else if(mcstatus[6]["textures.minecraft.net"] === 'yellow'){
        var texturesdotminecraftdotnet = 'Online with issues'
    }
    else {
        var texturesdotminecraftdotnet = 'Offline'
    }
    if(mcstatus[7]["mojang.com"] === 'green'){
        var mojangdotcom = 'Online'
    } else if(mcstatus[7]["mojang.com"] === 'yellow'){
        var mojangdotcom = 'Online with issues'
    }
    else {
        var mojangdotcom = 'Offline'
    }
    
    const statusembed = new Discord.MessageEmbed()
    .setTitle('Minecraft Bot Status')
    .addField(`minecraft.net`, minecraftdotnet, false)
    .addField(`session.minecraft.net`, sessiondotminecraftdotnet, false)
    .addField(`account.mojang.com`, accountdotmojangdotcom, false)
    .addField(`authserver.mojang.com`, authserverdotmojangdotcom, false)
    .addField(`sessionserver.mojang.com`, sessionserverdotmojangdotcom, false)
    .addField(`api.mojang.com`, apidotmojangdotcom, false)
    .addField(`textures.minecraft.net`, texturesdotminecraftdotnet, false)
    .addField(`mojang.com`, mojangdotcom, false)
    .setFooter('By The0Show#8908', 'https://cdn.discordapp.com/avatars/468093150217371649/958fb70d7627631e7dc5ec39a4fca68e.jpg?size=2048')

    message.channel.send(statusembed)
}

module.exports = {
    name: 'status',
    description: 'Get the status for Minecraft, Minotar, and Hypixel.',
    category: 'Utilites',
    cooldown: '3s',
    aliases: ['isonline'],
    minArgs: 0,
    maxArgs: 0,
    callback: (message, args, text, client, prefix, instance) => {
        workworkwork(message, args, text, client, prefix, instance)
    }
}