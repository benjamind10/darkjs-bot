module.exports = {
  name: 'unmute',
  category: 'moderation',
  permissions: ['ADMINISTRATOR', 'MUTE_MEMBERS'],
  async execute(client, message, args) {
    try {
      const user = message.mentions.members.first();

      if (!user) {
        return message.channel.send(
          'Please mention the member to who you want to unmute'
        );
      }

      let muterole = message.guild.roles.cache.find(x => x.name === 'Muted');

      if (user.roles.cache.has(muterole)) {
        return message.channel.send(
          'Given User do not have mute role so what i am suppose to take'
        );
      }

      user.roles.remove(muterole);

      await message.channel.send(
        `**${message.mentions.users.first().username}** is now unmuted`
      );

      user.send(`You are now unmuted from **${message.guild.name}**`);

      message.delete();
    } catch (e) {
      console.log(e);
    }
  },
};
