module.exports = {
  name: 'roles',
  description: 'Display all roles',
  permissions: ['ADMINISTRATOR', 'BAN_MEMBERS'],
  async execute(client, message, args) {
    console.log(message.guild.roles);
  },
};
