module.exports = {
  name: 'roles',
  description: 'Display all roles',
  permissions: ['ADMINISTRATOR', 'BAN_MEMBERS'],
  async execute(client, message, args) {
    try {
      console.log(message.guild.roles);
    } catch (e) {
      console.log(e);
    }
  },
};
