const axios = require('axios')
const { SlashCommandBuilder } = require('@discordjs/builders');

const URL = `https://www.dnd5eapi.co/api`;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dnd')
		.setDescription('Search the dnd 5e universe!')
		.addStringOption((option) =>
			option
				.setName('query-type')
				.setDescription('potions / spells / monsters')
				.setRequired(true)
		)
		.addStringOption((option) =>
			option
				.setName('query')
				.setDescription('acid-arrow / giant')
				.setRequired(true)
		),
	async execute(interaction) {
		console.log(interaction);
		await interaction.reply({
      content: await getData(interaction.options.getString('query-type'), interaction.options.getString('query')).data,
      fetchReply: true
    });
	}
};

async function getData(queryType, query) {
  let v = await axios.get(`${URL}/${queryType}/${query}/`)
  console.log('**********')
  console.log(v)
  console.log('**********')
  return v
}