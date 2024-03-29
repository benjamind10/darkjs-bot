module.exports = {
  name: 'remrole',
  description: 'This command removes a role',
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
        member.roles.remove(role);
        message.reply('Role removed.');
      } catch (error) {
        message.channel.send('Error');
      }
    } catch (e) {
      console.log(e);
    }
  },
};
