const { readdirSync } = require('fs');

module.exports = (client, Discord) => {
  // const commandFolders = fs.readdirSync('./commands');
  // for (const folder of commandFolders) {
  //   const commandFiles = fs
  //     .readdirSync(`./commands/${folder}`)
  //     .filter(file => file.endsWith('.js'));
  //   for (const file of commandFiles) {
  //     const command = require(`./commands/${folder}/${file}`);
  //     client.commands.set(command.name, command);
  //   }
  // }

  readdirSync('./commands/').forEach(dir => {
    // Filter so we only have .js command files
    const commands = readdirSync(`./commands/${dir}/`).filter(file =>
      file.endsWith('.js')
    );

    // Loop over the commands, and add all of them to a collection
    // If there's no name found, prevent it from returning an error,
    // By using a cross in the table we made.
    for (let file of commands) {
      let command = require(`../commands/${dir}/${file}`);

      if (command.name) {
        client.commands.set(command.name, command);
      } else {
        continue;
      }
    }
  });

  // const command_files = fs
  //   .readdirSync('./commands/')
  //   .filter(file => file.endsWith('.js'));
  // for (const file of command_files) {
  //   const command = require(`../commands/${file}`);
  //   if (command.name) client.commands.set(command.name, command);
  //   else continue;
  // }
};
