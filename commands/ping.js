module.exports = {
  name: 'ping',
  descrption: 'This a ping command',
  execute(message, args) {
    message.channel.send('pong!');
  },
};
