module.exports = {
  name: 'cmdlist',
  descrption: 'This a commands list',
  execute(message, args) {
    let commands = [];
    const fs = require('fs');
    const commandFiles = fs
      .readdirSync('./commands')
      .filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
      commands.push(file);
    }

    const cmdlist = commands.map(e => {
      return e.slice(0, -3);
    });

    message.channel.send(`Command list: ${cmdlist.join(', ')}`);
  },
};
