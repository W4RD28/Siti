const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('neko')
		.setDescription('Replies with Nyaa!'),
	async execute(interaction) {
		await interaction.reply('Nyaa!');
	},
};