module.exports = {
  name: 'role',
  description: 'This command adds a role',
  permissions: ['ADMINISTRATOR', 'MANAGE_ROLES'],
  async execute(client, message, args) {
    try {
      const member = message.mentions.members.first();

      args.shift();
      const roleName = args.slice(0).join(' ');
      const role = message.guild.roles.cache.find(
        role => role.name === roleName
      );

      try {
        member.roles.add(role);
        message.reply(`Role \`${roleName}\` added to: ${member}`);
      } catch (error) {
        message.channel.send('Error');
      }
    } catch (e) {
      console.log(e);
    }
  },
};
