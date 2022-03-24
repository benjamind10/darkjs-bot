module.exports = {
  name: 'ban',
  description: 'This is a ban command',
  execute(client, message, args) {
    const { ADMIN_ROLE } = require('../config');
    let isAdmin;

    for (role in ADMIN_ROLE) {
      if (message.member.roles.cache.has(ADMIN_ROLE[role])) {
        isAdmin = true;
      } else isAdmin = false;
    }
    //   if you want to validate with roles...
    if (isAdmin) {
      const member = message.mentions.users.first();
      if (member) {
        const memberTarget = message.guild.members.cache.get(
          member.id
        );
        memberTarget.ban();
        message.channel.send('User has been banned');
      } else {
        message.channel.send("You couldn't ban that member.");
      }
    } else
      message.channel.send("You don't have the right permissions");
  },
};
