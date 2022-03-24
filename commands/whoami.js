module.exports = {
  name: 'whoami',
  descrption: 'This a whoami commands',
  execute(client, message, args) {
    const { ADMIN_ROLE } = require('../config');

    if (message.member.roles.cache.has(ADMIN_ROLE)) {
      message.channel.send(
        `You are ${message.author.username} and you are an Admin.`
      );
    } else {
      message.channel.send(`You are ${message.author.username}`);
    }
  },
};
