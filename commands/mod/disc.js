module.exports = {
  name: 'disc',
  description: 'This is command disconnect users from voice chat',
  permissions: ['ADMINISTRATOR'],
  execute(client, message, args) {
    try {
      const member = message.mentions.users.first();
      if (member) {
        const memberTarget = message.guild.members.cache.get(member.id);
        if (!memberTarget.voice.channel) {
          return message.reply('User is not in a channel');
        }
        memberTarget.voice.disconnect();
        message.channel.send('User has been disconnected');
      } else {
        message.channel.send("You couldn't disconnect that member.");
      }
    } catch (e) {
      console.log(e);
    }
  },
};
