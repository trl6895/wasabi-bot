const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("gif")
    .setDescription("Give me a gif")
    .addStringOption((option) =>
      option
        .setName("type")
        .setDescription("What kind of gif do you want?")
        .setRequired(true)
        .addChoices(
          { name: "sad", 
            value: "https://media.tenor.com/Zm5X22vb19gAAAAC/sad-rain.gif" 
          },
          {
            name: "spin",
            value:
              "https://tenor.com/view/pikachu-chair-spinning-pokemon-gif-17432353",
          },
          {
            name: "silly",
            value:
              "https://tenor.com/view/silly-seal-seal-seal-tongue-seal-funny-seal-cute-gif-25826560",
          }
        )
    ),
  async execute(interaction) {
    let type = interaction.options.getString("type");
    await interaction.reply(type);
  },
};
