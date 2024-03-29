const maxVol = require('../../config').opt.maxVol;

module.exports = {
  name: 'volume',
  aliases: ['vol'],
  utilisation: `{prefix}volume [1-${maxVol}]`,
  voiceChannel: true,
  permissions: ['SEND_MESSAGES'],

  execute(client, message, args) {
    try {
      const queue = client.player.getQueue(message.guild.id);

      if (!queue || !queue.playing)
        return message.channel.send({
          content: `${message.author}, There is no music currently playing!. ❌`,
        });

      const vol = parseInt(args[0]);

      if (!vol)
        return message.channel.send({
          content: `Current volume: **${queue.volume}** 🔊\n**To change the volume, with \`1\` to \`${maxVol}\` Type a number between.**`,
        });

      if (queue.volume === vol)
        return message.channel.send({
          content: `${message.author}, The volume you want to change is already the current volume ❌`,
        });

      if (vol < 0 || vol > maxVol)
        return message.channel.send({
          content: `${message.author}, **Type a number from \`1\` to \`${maxVol}\` to change the volume .** ❌`,
        });

      const success = queue.setVolume(vol);

      return message.channel.send({
        content: success
          ? `Volume changed: **%${vol}**/**${maxVol}** 🔊`
          : `${message.author}, Something went wrong. ❌`,
      });
    } catch (error) {
      console.log(error);
    }
  },
};
