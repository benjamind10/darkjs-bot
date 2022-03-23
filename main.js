const Discord = require('discord.js');
const { token } = require('./config.json');

const client = new Discord.Client({
  intents: ['GUILDS', 'GUILD_MESSAGES'],
});

client.commands = new Discord.Collection();
client.eventNames = new Discord.Collection();

['command-handler', 'event-handler'].forEach(handler => {
  require(`./handlers/${handler}`)(client, Discord);
});

client.login(token);
