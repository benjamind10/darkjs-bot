module.exports = {
  name: 'version',
  aliases: ['ver', 'about'],
  descrption: 'This a version command',
  permissions: ['SEND_MESSAGES'],
  cooldown: 10,
  execute(client, message, args) {
    try {
      const os = require('os');
      const revision = require('child_process')
        .execSync('git rev-parse HEAD')
        .toString()
        .trim()
        .slice(0, 7);

      const platform = os.platform();
      const version = os.release();
      const os_info = platform.charAt(0).toUpperCase() + platform.slice(1);

      message.channel.send(
        'DarK`BoT by Shiva187 rev: ' +
          revision +
          ' Running on: ' +
          os_info +
          ' ' +
          version
      );
    } catch (e) {
      console.log(e);
    }
  },
};
