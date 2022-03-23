module.exports = {
  name: 'unban',
  description: 'This is a unban command',
  execute(client, message, args) {
    const { admin_role } = require('../config.json');
    //   if you want to validate with roles...
    if (message.member.roles.cache.has(admin_role)) {
      const member = args[0];
      console.log(member);
      if (member) {
        message.guild.members.unban(member);
        message.channel.send('User has been unbanned');
      } else {
        message.channel.send("You couldn't unban that member.");
      }
    } else
      message.channel.send("You don't have the right permissions");
  },
};