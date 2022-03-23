module.exports = {
  name: 'ban',
  description: 'This is a ban command',
  execute(message, args) {
    const { admin_role } = require('../config.json');
    //   if you want to validate with roles...
    if (message.member.roles.cache.has(admin_role)) {
      const member = message.mentions.users.first();
      if (member) {
        const memberTarget = message.guild.members.cache.get(member.id);
        memberTarget.ban();
        message.channel.send('User has been banned');
      } else {
        message.channel.send("You couldn't ban that member.");
      }
    } else message.channel.send("You don't have the right permissions");
  },
};
