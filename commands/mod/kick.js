module.exports = {
  name: 'kick',
  description: 'This is a kick command',
  permissions: ['ADMINISTRATOR', 'KICK_MEMBERS'],
  execute(client, message, args) {
    const member = message.mentions.users.first();
    if (member) {
      const memberTarget = message.guild.members.cache.get(member.id);
      memberTarget.kick();
      message.channel.send('User has been kicked');
    } else {
      message.channel.send("You couldn't kick that member.");
    }
  },
};
