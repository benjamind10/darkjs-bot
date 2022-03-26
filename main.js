const { Player } = require('discord-player');
const { Client, Intents, Discord, Collection } = require('discord.js');
const { readdirSync } = require('fs');

let client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_VOICE_STATES,
  ],
});

client.config = require('./config');
client.commands = new Collection();
client.eventNames = new Collection();
client.player = new Player(client, client.config.opt.discordPlayer);
const player = client.player;

player.on('trackStart', (queue, track) => {
  if (!client.config.opt.loopMessage && queue.repeatMode !== 0) return;
  queue.metadata.send({
    content: `🎵 Music started playing: **${track.title}** -> Channel: **${queue.connection.channel.name}** 🎧`,
  });
});

player.on('trackAdd', (queue, track) => {
  queue.metadata.send({
    content: `**${track.title}** added to playlist. ✅`,
  });
});

player.on('botDisconnect', queue => {
  queue.metadata.send({
    content:
      'Someone from the audio channel Im connected to kicked me out, the whole playlist has been cleared! ❌',
  });
});

player.on('channelEmpty', queue => {
  queue.metadata.send({
    content:
      'I left the audio channel because there is no one on my audio channel. ❌',
  });
});

player.on('queueEnd', queue => {
  queue.metadata.send({
    content:
      'All play queue finished, I think you can listen to some more music. ✅',
  });
});

['command-handler', 'event-handler'].forEach(handler => {
  require(`./handlers/${handler}`)(client, Discord);
});

client.login(client.config.TOKEN);
