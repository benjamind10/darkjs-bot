const { Player } = require('discord-player');
const mongoose = require('mongoose');
const {
  Client,
  Intents,
  Discord,
  Collection,
} = require('discord.js');

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
client.dbLogin = require('./handlers/dbLogin');
const player = client.player;

player.on('trackStart', (queue, track) => {
  if (!client.config.opt.loopMessage && queue.repeatMode !== 0)
    return;
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

// Anti Spam stuff
const AntiSpam = require('discord-anti-spam');
const antiSpam = new AntiSpam({
  warnThreshold: 3, // Amount of messages sent in a row that will cause a warning.
  muteThreshold: 4, // Amount of messages sent in a row that will cause a mute
  kickThreshold: 7, // Amount of messages sent in a row that will cause a kick.
  banThreshold: 7, // Amount of messages sent in a row that will cause a ban.
  maxInterval: 2000, // Amount of time (in milliseconds) in which messages are considered spam.
  warnMessage: '{@user}, Please stop spamming.', // Message that will be sent in chat upon warning a user.
  kickMessage: '**{user_tag}** has been kicked for spamming.', // Message that will be sent in chat upon kicking a user.
  muteMessage: '**{user_tag}** has been muted for spamming.', // Message that will be sent in chat upon muting a user.
  banMessage: '**{user_tag}** has been banned for spamming.', // Message that will be sent in chat upon banning a user.
  maxDuplicatesWarning: 6, // Amount of duplicate messages that trigger a warning.
  maxDuplicatesKick: 10, // Amount of duplicate messages that trigger a warning.
  maxDuplicatesBan: 12, // Amount of duplicate messages that trigger a warning.
  maxDuplicatesMute: 8, // Ammount of duplicate message that trigger a mute.
  ignoredPermissions: ['ADMINISTRATOR'], // Bypass users with any of these permissions.
  ignoreBots: true, // Ignore bot messages.
  verbose: true, // Extended Logs from module.
  ignoredMembers: [], // Array of User IDs that get ignored.
  unMuteTime: 10, // Amount of time (in minutes) a user will be muted for.
  removeMessages: true, // If the bot should remove all the spam messages when taking action on a user!
  modLogsEnabled: false, // If to enable modlogs
  modLogsChannelName: 'mod-logs', // channel to send the modlogs too!
  modLogsMode: 'embed',
  // And many more options... See the documentation.
});

client.on('messageCreate', message => antiSpam.message(message));

['command-handler', 'event-handler', 'dbLogin'].forEach(handler => {
  require(`./handlers/${handler}`)(client, Discord);
});

async function init() {
  mongoose
    .connect(process.env.dbToken, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch(err => {
      console.log(
        'Unable to connect to MongoDB Database.\nError: ' + err
      );
    });
  await client.login(client.config.TOKEN);
}

init();
