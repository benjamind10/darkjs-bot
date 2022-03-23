const Discord = require('discord.js');
const { token } = require('./config.json');
const fs = require('fs');

const client = new Discord.Client({
  intents: ['GUILDS', 'GUILD_MESSAGES'],
});

client.commands = new Discord.Collection();
client.eventNames = new Discord.Collection();

['command-handler', 'event-handler'].forEach(handler => {
  require(`./handlers/${handler}`)(client, Discord);
});

// const commandFiles = fs
//   .readdirSync('./commands')
//   .filter(file => file.endsWith('.js'));

// for (const file of commandFiles) {
//   const command = require(`./commands/${file}`);

//   client.commands.set(command.name, command);
// }

// client.once('ready', () => {
//   console.log('Dark`Bot is online!');
// });

// client.on('messageCreate', message => {
//   if (!message.content.startsWith(prefix) || message.author.bot)
//     return;

//   const args = message.content.slice(prefix.length).split(/ +/);
//   const command = args.shift().toLowerCase();

//   if (command === 'ping') {
//     client.commands.get('ping').execute(message, args);
//   } else if (command === 'uptime' || command === 'up') {
//     client.commands.get('uptime').execute(message, args, client);
//   } else if (
//     command === 'version' ||
//     command === 'ver' ||
//     command === 'about'
//   ) {
//     client.commands.get('version').execute(message, args);
//   } else if (command === 'clear') {
//     client.commands.get('clear').execute(message, args);
//   } else if (command === 'git' || command === 'github') {
//     client.commands.get('git').execute(message, args);
//   } else if (command === 'cmdlist') {
//     client.commands.get('cmdlist').execute(message, args);
//   } else if (command === 'whoami') {
//     client.commands.get('whoami').execute(message, args);
//   } else if (command === 'kick') {
//     client.commands.get('kick').execute(message, args);
//   } else if (command === 'ban') {
//     client.commands.get('ban').execute(message, args);
//   } else if (command === 'mute') {
//     client.commands.get('mute').execute(message, args);
//   } else if (command === 'unban') {
//     client.commands.get('unban').execute(message, args, client);
//   }
// });

client.login(token);
