const { Client, Intents } = require('discord.js');
require('dotenv').config();

const intents = [
  Intents.FLAGS.GUILDS,
  Intents.FLAGS.GUILD_MESSAGES
]

const client = new Client({ intents });

client.once('ready', () => {
  const guild = client.guilds.cache.get(process.env.GUILD_ID);  

  
  console.log('Watch out you sussy bakas... 👦 🔫🤖');
});

client.on("messageCreate", (message) => {
  if (message.content === 'ping') {
    message.reply({
        content: 'Whats up you sussy baka?'
    })
  }
});


client.login(process.env.BOT_TOKEN);
