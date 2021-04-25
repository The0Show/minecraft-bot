module.exports = {
    name: 'newname',
    description: 'Read about my new name!',
    category: 'Utilities',
    cooldown: '3s',
    aliases: [''],
    minArgs: 0,
    maxArgs: 0,
    callback: async (message, args, text, client, prefix, instance) => {
        message.channel.send('You can read about my new name here: https://the0show.medium.com/minecraft-skin-grabber-minecraft-bot-118a9aaaacda')
    }
}