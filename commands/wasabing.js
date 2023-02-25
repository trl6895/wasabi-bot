const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("wasabing")
    .setDescription("Responds to being called"),
  async execute(interaction) {
    await interaction.reply("yes?");
  },
};
