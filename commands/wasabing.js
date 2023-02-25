const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("wasabing")
    .setDescription("Responds to being called")
    .addStringOption((option) =>
      option
        .setName("interaction")
        .setDescription("What do you want to say?")
        .addChoices(
          { name: "hi!", value: "hello!" },
          { name: "leaving", value: "bye-bye!" }
        )
    ),
  async execute(interaction) {
    const reply = interaction.options.getString("interaction") ?? "yes?";
    await interaction.reply(reply);
  },
};
