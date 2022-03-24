module.exports = {
  name: 'role',
  description: 'This command adds a role',
  permissions: ['ADMINISTRATOR'],
  async execute(client, message, args) {
    const member = message.mentions.members.first();

    const roleName = args[1];
    const role = message.guild.roles.cache.find(
      role => role.name === roleName
    );

    try {
      member.roles.add(role);
    } catch (error) {
      message.channel.send('Error');
    }
  },
};
