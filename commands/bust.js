async function workworkwork(message, args, text, client, prefix, instance){
    if (!args.length) {
        return message.channel.send(`You need to specify a Minecraft username!, ${message.author}!`);
    }

    const skin = {
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

    message.channel.send({ embed: skin });
}

module.exports = {
    name: 'bust',
    description: 'Grab a minecraft user\'s body in profile picture form.',
    category: 'Minecraft Skins',
    cooldown: '3s',
    aliases: [''],
    minArgs: 1,
    maxArgs: 1,
    expectedArgs: '<minecraft username>',
    callback: (message, args, text, client, prefix, instance) => {
        workworkwork(message, args, text, client, prefix, instance)
    }
}