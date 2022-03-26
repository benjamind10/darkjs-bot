module.exports = {
  name: 'roles',
  description: 'Display all roles',
  permissions: ['ADMINISTRATOR'],
  async execute(client, message, args) {
    console.log(message.guild.roles);
  },
};
