const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('See if the bot is working.'),
	async execute(interaction) {
		await interaction.reply('Sussy baka bot is always watching... 👀');
	},
};