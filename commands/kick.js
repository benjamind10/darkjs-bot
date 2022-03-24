module.exports = {
  name: 'kick',
  description: 'This is a kick command',
  execute(client, message, args) {
    const { ADMIN_ROLE } = require('../config');
    //   if you want to validate with roles...
    if (message.member.roles.cache.has(ADMIN_ROLE)) {
      const member = message.mentions.users.first();
      if (member) {
        const memberTarget = message.guild.members.cache.get(
          member.id
        );
        memberTarget.kick();
        message.channel.send('User has been kicked');
      } else {
        message.channel.send("You couldn't kick that member.");
      }
    } else
      message.channel.send("You don't have the right permissions");
  },
};
