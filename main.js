const Discord = require('discord.js');
const { token } = require('./config.json');
const fs = require('fs');

const client = new Discord.Client({
  intents: ['GUILDS', 'GUILD_MESSAGES'],
});

client.commands = new Discord.Collection();

const commandFiles = fs
  .readdirSync('./commands')
  .filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

const prefix = '?';

client.once('ready', () => {
  console.log('Dark`Bot is online!');
});

client.on('messageCreate', message => {
  if (!message.content.startsWith(prefix) || message.author.bot)
    return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'ping') {
    client.commands.get('ping').execute(message, args);
  } else if (command === 'uptime') {
    let days = Math.floor(client.uptime / 86400000);
    let hours = Math.floor(client.uptime / 3600000) % 24;
    let minutes = Math.floor(client.uptime / 60000) % 60;
    let seconds = Math.floor(client.uptime / 1000) % 60;

    message.channel.send(
      `Uptime: ${days}d ${hours}h ${minutes}m ${seconds}s`
    );
  } else if (command === 'version' || command === 'ver') {
    client.commands.get('version').execute(message, args);
  }
});

client.login(token);
