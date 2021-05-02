module.exports = {
    name: 'ping',
    description: 'Test the bot\'s latency.',
    category: 'Utilities',
    cooldown: '3s',
    aliases: ['p', 'pong', 'test'],
    minArgs: 0,
    maxArgs: 0,
    callback: async (message, args, text, client, prefix, instance) => {
        const m = await message.channel.send('Ping...')
        const delay = m.createdTimestamp - message.message.createdTimestamp
        m.edit('Pong!\n```\nLatency: ' + delay + 'ms\nAPI Latency: ' + Math.round(message.client.ws.ping) + 'ms\n```')
    }
}