module.exports = {
  name: 'skip',
  aliases: [],
  utilisation: '{prefix}skip',
  voiceChannel: true,
  permissions: ['SEND_MESSAGES'],

  execute(client, message) {
    try {
      const queue = client.player.getQueue(message.guild.id);

      if (!queue || !queue.playing)
        return message.channel.send({
          content: `${message.author}, There is no music currently playing!. ❌`,
        });

      const success = queue.skip();

      return message.channel.send({
        content: success
          ? `**${queue.current.title}**, Skipped song ✅`
          : `${message.author}, Something went wrong ❌`,
      });
    } catch (error) {
      console.log(error);
    }
  },
};
