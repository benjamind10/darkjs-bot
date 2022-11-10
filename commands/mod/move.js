module.exports = {
  name: 'move',
  description: 'This is command moves users from voice chat',
  permissions: ['ADMINISTRATOR', 'MOVE_MEMBERS'],
  execute(client, message, args) {
    try {
      if (!args[1]) {
        return message.reply('You must specify a channel');
      }

      const pickedChannel = args[1];
      const member = message.mentions.users.first();
      if (member) {
        const memberTarget = message.guild.members.cache.get(member.id);
        const VCchannel = message.guild.channels.cache.find(
          channel => channel.name === pickedChannel
        );
        if (!memberTarget.voice.channel) {
          return message.reply('User is not in a channel');
        }
        memberTarget.voice.setChannel(VCchannel);
        message.channel.send('User has been moved');
      } else {
        message.channel.send("You couldn't move that member.");
      }
    } catch (e) {
      console.log(e);
    }
  },
};
