module.exports = {
  name: 'whoami',
  descrption: 'This a whoami commands',
  permissions: ['SEND_MESSAGES'],
  cooldown: 10,
  execute(client, message, args) {
    try {
      const { ADMIN_ROLE } = require('../../config');
      let isAdmin;

      for (role in ADMIN_ROLE) {
        if (message.member.roles.cache.has(ADMIN_ROLE[role])) {
          isAdmin = true;
        } else isAdmin = false;
      }

      if (isAdmin) {
        message.channel.send(
          `You are ${message.author.username} and you are an Admin.`
        );
      } else {
        message.channel.send(`You are ${message.author.username}`);
      }
    } catch (e) {
      console.log(e);
    }
  },
};
