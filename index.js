const { Client, GatewayIntentBits } = require('discord.js')
require('dotenv/config')

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
})

client.on('ready', () => {
    console.log('The bot is ready')
})

client.on('messageCreate', message => {
    if (message.content === 'wasabing?') {
        message.reply('yes')
    }
})

client.login(process.env.TOKEN)