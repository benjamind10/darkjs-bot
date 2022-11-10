const Discord = require('discord.js');

module.exports = {
  name: 'invite',
  description: "Get the bot's",
  permissions: ['ADMINISTRATOR'],
  cooldown: 10,
  async execute(client, message, args) {
    try {
      let embed = new Discord.MessageEmbed()
        .setTitle('Invite Me')
        .setColor('RANDOM')
        .setDescription(
          "**Get DarK`BoT's Invite Link [Here](https://discord.com/api/oauth2/authorize?client_id=955227986318225458&permissions=8&scope=bot)**\n**"
        )
        .setFooter({ text: `Requested By: ${message.author.username}` });
      message.channel.send({ embeds: [embed] });
    } catch (e) {
      console.log(e);
    }
  },
};
