async function workworkwork(message, args, text, client, prefix, instance){
    const m = await message.channel.send('Ping...')
    const delay = m.createdTimestamp - message.createdTimestamp
    m.edit('Pong!\n```\nLatency: ' + delay + 'ms\nAPI Latency: ' + Math.round(client.ws.ping) + 'ms\n```')
}

module.exports = {
    name: 'ping',
    description: 'Test the bot\'s latency.',
    category: 'Utilites',
    cooldown: '3s',
    aliases: ['p', 'pong', 'test'],
    minArgs: 0,
    maxArgs: 0,
    callback: (message, args, text, client, prefix, instance) => {
        workworkwork(message, args, text, client, prefix, instance)
    }
}