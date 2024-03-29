module.exports = {
  name: 'stop',
  aliases: ['st'],
  utilisation: '{prefix}stop',
  voiceChannel: true,
  permissions: ['SEND_MESSAGES'],

  execute(client, message) {
    try {
      const queue = client.player.getQueue(message.guild.id);

      if (!queue || !queue.playing)
        return message.channel.send({
          content: `${message.author}, There is no music currently playing!. ❌`,
        });

      queue.destroy();

      message.channel.send({
        content: `The music playing on this server has been turned off, see you next time ✅`,
      });
    } catch (error) {
      console.log(error);
    }
  },
};
