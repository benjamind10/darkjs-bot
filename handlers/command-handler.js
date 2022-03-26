const { readdirSync } = require('fs');

module.exports = (client, Discord) => {
  readdirSync('./commands/').forEach(dir => {
    // Filter so we only have .js command files
    const commands = readdirSync(`./commands/${dir}/`).filter(file =>
      file.endsWith('.js')
    );
    for (let file of commands) {
      let command = require(`../commands/${dir}/${file}`);

      if (command.name) {
        client.commands.set(command.name, command);
      } else {
        continue;
      }
    }
  });
};
