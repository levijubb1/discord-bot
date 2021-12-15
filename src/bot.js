const { Client, Intents, Collection } = require('discord.js');
const fs = require('fs');
require('dotenv').config();

const intents = [
  Intents.FLAGS.GUILDS,
  Intents.FLAGS.GUILD_MESSAGES
]

const client = new Client({ intents });

// Setting up command files
client.commands = new Collection();
const commandFiles = fs.readdirSync('./src/commands').filter(file => file.endsWith('.js'));
for (const commandFile of commandFiles) {
  const command = require(`./commands/${commandFile}`);
  client.commands.set(command.data.name, command);
}

client.once('ready', () => {
  console.log('Watch out you sussy bakas... 👦 🔫🤖');
});

client.on("messageCreate", (message) => {
  if (message.author.id != process.env.CLIENT_ID && message.content.toLowerCase().includes('sussy baka')) {
    message.reply({
      content: "Did I hear someone say sussy baka? 👀"
    })
  }
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({
      content: 'Sussy baka bot encountered an error 😭.',
      ephemeral: true
    });
	}
});



client.login(process.env.BOT_TOKEN);
