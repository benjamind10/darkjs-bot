module.exports = {
  name: 'cmdlist',
  permissions: ['SEND_MESSAGES'],
  descrption: 'This a commands list',
  cooldown: 10,
  execute(client, message, args) {
    const { MessageEmbed } = require('discord.js');

    let commands = client.commands.map(command => {
      return command.name;
    });

    let command_count = client.commands.size;

    const finalCommands = commands.join('\r\n');

    const newEmbed = new MessageEmbed()
      .setTitle('Command List')
      .setDescription('This is all the commands the bot has')
      .addFields({
        name: `List of all working commands: (${command_count})`,
        value: finalCommands,
      });

    message.channel.send({ embeds: [newEmbed] });
  },
};
