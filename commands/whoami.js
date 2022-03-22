module.exports = {
  name: 'whoami',
  descrption: 'This a whoami commands',
  execute(message, args) {
    const { admin_role } = require('../config.json');

    if (message.member.roles.cache.has(admin_role)) {
      message.channel.send(
        `You are ${message.author.username} and you are an Admin.`
      );
    } else {
      message.channel.send(`You are ${message.author.username}`);
    }
  },
};
