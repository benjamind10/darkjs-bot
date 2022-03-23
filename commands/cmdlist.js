module.exports = {
  name: 'cmdlist',
  descrption: 'This a commands list',
  execute(client, message, args) {
    const { MessageEmbed } = require('discord.js');

    let commands = [];
    const fs = require('fs');
    const commandFiles = fs
      .readdirSync('./commands')
      .filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
      commands.push(file);
    }

    const cmdlist = commands.map(e => {
      return e.slice(0, -3);
    });

    const finalCommands = cmdlist.join('\r\n');

    const newEmbed = new MessageEmbed()
      .setTitle('Command List')
      .setDescription('This is all the commands the bot has')
      .addFields({
        name: 'List of working commands:',
        value: finalCommands,
      });

    message.channel.send({ embeds: [newEmbed] });
  },
};
