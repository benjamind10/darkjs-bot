module.exports = {
  name: 'git',
  descrption: 'This a repo link command',
  permissions: ['SEND_MESSAGES'],
  cooldown: 10,
  execute(client, message, args) {
    try {
      message.channel.send(
        `Repo Link: https://github.com/benjamind10/darkjs-bot`
      );
    } catch (e) {
      console.log(e);
    }
  },
};
