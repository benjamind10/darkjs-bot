const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'help',
  description: 'Get the Command List',
  aliases: ['commands', 'cmd', 'h'],
  permissions: ['SEND_MESSAGES'],
  cooldown: 10,
  async execute(client, message, args) {
    if (args[0]) {
      let command = args[0];
      let cmd = client.commands.get(command);

      if (!cmd) {
        return message.channel.send("Couldn't find that command!");
      } else if (cmd) {
        let description = cmd.description
          ? cmd.description
          : 'No description available.';
        let aliases = cmd.aliases
          ? cmd.aliases.join(', ')
          : 'No aliases available.';
        let botPerms = cmd.botPerms
          ? cmd.botPerms.join(', ')
          : 'No permissions required.';
        let userPerms = cmd.userPerms
          ? cmd.userPerms.join(', ')
          : 'No permissions required.';
        let ownerOnly = cmd.ownerOnly ? 'Yes' : 'No';
        let nsfwOnly = cmd.nsfwOnly ? 'Yes' : 'No';
        let cooldown = cmd.cooldown ? cmd.cooldown : 'No cooldown.';
        let isDisabled = cmd.isDisabled ? 'Yes' : 'No';

        let helpEmbed = new MessageEmbed()
          .setTitle(`Help for **${cmd.name}**`)
          .addField('Name', `${cmd.name}`, true)
          .addField('Description', `${description}`, true)
          .addField('Aliases', `${aliases}`, true)
          .addField('Owner Only', `${ownerOnly}`, true)
          .addField('NSFW Only', `${nsfwOnly}`, true)
          .addField('Cooldown', `${cooldown}`, true)
          .addField('Disabled', `${isDisabled}`, true)
          .addField('Required Bot Permissions', `${botPerms}`, true)
          .addField('Required User Permissions', `${userPerms}`, true)
          .setColor('GREEN');

        return message.channel.send({ embeds: [helpEmbed] });
      }
    } else if (!args[0]) {
      message.channel.send('Select a command from the cmdlist');
    }
  },
};
