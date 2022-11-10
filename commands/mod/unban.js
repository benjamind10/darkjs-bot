module.exports = {
  name: 'unban',
  description: 'This is a unban command',
  permissions: ['ADMINISTRATOR'],
  execute(client, message, args) {
    try {
      const member = args[0];
      console.log(member);
      if (member) {
        message.guild.members.unban(member);
        message.channel.send('User has been unbanned');
      } else {
        message.channel.send("You couldn't unban that member.");
      }
    } catch (e) {
      console.log(e);
    }
  },
};
