module.exports = {
  name: 'whoami',
  descrption: 'This a whoami commands',
  execute(message, args) {
    const { admin_role } = require('../config.json');
    let id = '692963810193178664';
    let isAdmin = message.guild.roles.cache.get(admin_role);
    console.log(isAdmin);

    isAdmin
      ? message.channel.send(
          `You are ${message.author.username} and you are a Admin`
        )
      : message.channel.send(`You are ${message.author.username}`);
  },
};
