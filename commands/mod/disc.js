module.exports = {
  name: 'disc',
  description: 'This is command disconnect users from voice chat',
  permissions: ['ADMINISTRATOR'],
  execute(client, message, args) {
    const member = message.mentions.users.first();
    if (member) {
      const memberTarget = message.guild.members.cache.get(member.id);
      memberTarget.voice.disconnect();
      message.channel.send('User has been disconnected');
    } else {
      message.channel.send("You couldn't disconnect that member.");
    }
  },
};
