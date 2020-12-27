const Discord = require('discord.js');
const fetch = require('node-fetch');
const client = new Discord.Client();

const { token, prefix } = require('./config.json');

const help = {
    "title": "Minecraft Bot",
    "description": "I am a bot the allows people to grab other user's skins directly from Discord! I also work in DMs too!",
    "footer": {
      "text": "Powered by Minotar | https://minotar.net/"
    },
    "thumbnail": {
      "url": "https://minotar.net/armor/bust/The0Show/100.png"
    },
    "author": {
      "name": "Minecraft Bot was created by The0Show#8908",
      "icon_url": 'https://cdn.discordapp.com/avatars/468093150217371649/958fb70d7627631e7dc5ec39a4fca68e.png?size=128'
    },
    "fields": [
      {
        "name": "mcb!head <minecraft user>",
        "value": "Grab a minecraft user's head."
      },
      {
        "name": "mcb!cube <minecraft user>",
        "value": "Grab a minecraft user's head in cube form."
      },
      {
        "name": "mcb!body <minecraft user>",
        "value": "Grab a minecraft user's body."
      },
      {
        "name": "mcb!bust <minecraft user>",
        "value": "Grab a minecraft user's body in profile picture form."
      },
      {
        "name": "mcb!skin <minecraft user>",
        "value": "Grab a minecraft user's skin."
      }
    ]
  };

client.once('ready', () => {
    console.log('Ready!');
    if(client.guilds.cache.size == 1){
        client.user.setActivity(`Minecraft Skin Grabber is now Minecraft Bot: <announcement link coming soon> | ${prefix}help`, { type: 'LISTENING' });
        return;
    }
    client.user.setActivity(`Minecraft Skin Grabber is now Minecraft Bot: <announcement link coming soon> | ${prefix}help`, { type: 'LISTENING' });
});

client.on('message', async message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

	if (command === 'head') {
        if (!args.length) {
            return message.channel.send(`You need to specify a Minecraft username!, ${message.author}!`);
        }

        const head = {
            "title": `${args[0]}'s head:`,
            "footer": {
              "text": "Powered by Minotar | https://minotar.net/"
            },
            "image": {
              "url": `https://minotar.net/helm/${args[0]}/100.png`
            },
            "fields": []
          };

        //const file = await fetch(`https://minotar.net/avatar/user/${args[0]}.png`).then(response => response.json());
    
        message.channel.send({ embed: head });
    }

    if (command === 'cube') {
        if (!args.length) {
            return message.channel.send(`You need to specify a Minecraft username!, ${message.author}!`);
        }

        const cube = {
            "title": `${args[0]}'s cube:`,
            "footer": {
              "text": "Powered by Minotar | https://minotar.net/"
            },
            "image": {
              "url": `https://minotar.net/cube/${args[0]}/100.png`
            },
            "fields": []
          };

        //const file = await fetch(`https://minotar.net/avatar/user/${args[0]}.png`).then(response => response.json());
    
        message.channel.send({ embed: cube });
    }

    if (command === 'body') {
        if (!args.length) {
            return message.channel.send(`You need to specify a Minecraft username!, ${message.author}!`);
        }

        const body = {
            "title": `${args[0]}'s body:`,
            "footer": {
              "text": "Powered by Minotar | https://minotar.net/"
            },
            "image": {
              "url": `https://minotar.net/armor/body/${args[0]}/100.png`
            },
            "fields": []
          };

        //const file = await fetch(`https://minotar.net/avatar/user/${args[0]}.png`).then(response => response.json());
    
        message.channel.send({ embed: body });
    }

    if (command === 'bust') {
        if (!args.length) {
            return message.channel.send(`You need to specify a Minecraft username!, ${message.author}!`);
        }

        const bust = {
            "title": `${args[0]}'s bust:`,
            "footer": {
              "text": "Powered by Minotar | https://minotar.net/"
            },
            "image": {
              "url": `https://minotar.net/armor/bust/${args[0]}/100.png`
            },
            "fields": []
          };

        //const file = await fetch(`https://minotar.net/avatar/user/${args[0]}.png`).then(response => response.json());
    
        message.channel.send({ embed: bust });
    }

    if (command === 'skin') {
        if (!args.length) {
            return message.channel.send(`You need to specify a Minecraft username!, ${message.author}!`);
        }

        const skin = {
            "title": `${args[0]}'s skin:`,
            "footer": {
              "text": "Powered by Minotar | https://minotar.net/"
            },
            "image": {
              "url": `https://minotar.net/skin/${args[0]}`
            },
            "fields": []
          };

        //const file = await fetch(`https://minotar.net/avatar/user/${args[0]}.png`).then(response => response.json());
    
        message.channel.send({ embed: skin });
    }

    if(command === 'help'){
        message.channel.send({ embed: help })
    }
});

client.login(token);