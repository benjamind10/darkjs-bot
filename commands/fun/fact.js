const client = require('nekos.life');
const neko = new client();

module.exports = {
  name: 'fact',
  category: 'fun',
  description: 'sends a cool fact',
  permissions: ['SEND_MESSAGES'],
  usage: '[command]',
  async execute(client, message, args) {
    //command

    async function work() {
      let owo = await neko.sfw.fact();

      message.channel.send(owo.fact).catch(error => {
        console.error(error);
      });
      message.delete();
    }

    work();
  },
};
