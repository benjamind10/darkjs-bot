module.exports = {
  name: 'git',
  descrption: 'This a repo link command',
  permissions: ['SEND_MESSAGES'],
  execute(client, message, args) {
    message.channel.send(
      `Repo Link: https://github.com/benjamind10/darkjs-bot`
    );
  },
};