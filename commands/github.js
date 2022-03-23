module.exports = {
  name: 'git',
  descrption: 'This a repo link command',
  execute(client, message, args) {
    message.channel.send(
      `Repo Link: https://github.com/benjamind10/darkjs-bot`
    );
  },
};
