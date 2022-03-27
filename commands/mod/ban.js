module.exports = {
  name: 'ban',
  description: 'This is a ban command',
  permissions: ['ADMINISTRATOR', 'BAN_MEMBERS'],
  execute(client, message, args) {
    const member = message.mentions.users.first();
    if (member) {
      const memberTarget = message.guild.members.cache.get(member.id);
      memberTarget.ban();
      message.channel.send('User has been banned');
    } else {
      message.channel.send("You couldn't ban that member.");
    }
  },
};
