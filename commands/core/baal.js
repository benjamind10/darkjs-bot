module.exports = {
  name: 'baal',
  descrption: 'This command keeps track of baal games',
  permissions: ['SEND_MESSAGES'],
  cooldown: 10,
  execute(client, message, args) {
    message.channel.send(`Message the runner for game info`);
  },
};
