module.exports = {
  name: 'baal',
  descrption: 'This a baal link command',
  permissions: ['SEND_MESSAGES'],
  execute(client, message, args) {
    message.channel.send(`Please message the runner for games!`);
  },
};
