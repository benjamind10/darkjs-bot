module.exports = {
  name: 'ping',
  descrption: 'This a ping command',
  execute(client, message, args) {
    message.channel.send('pong!');
  },
};
