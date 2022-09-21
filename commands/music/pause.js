module.exports = {
  name: 'pause',
  aliases: [],
  utilisation: '{prefix}pause',
  voiceChannel: true,
  permissions: ['SEND_MESSAGES'],

  execute(client, message) {
    try {
      const queue = client.player.getQueue(message.guild.id);
  
      if (!queue || !queue.playing)
        return message.channel.send({
          content: `${message.author}, There is no music currently playing!. ❌`,
        });
  
      const success = queue.setPaused(true);
  
      return message.channel.send({
        content: success
          ? `The currently playing music named **${queue.current.title}** has stopped ✅`
          : `${message.author}, Something went wrong. ❌`,
      });    
    } catch (error) {
      console.log(error)
    }
  },
};
