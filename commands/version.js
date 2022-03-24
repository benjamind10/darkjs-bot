module.exports = {
  name: 'version',
  aliases: ['ver', 'about'],
  descrption: 'This a version command',
  permissions: ['SEND_MESSAGES'],
  execute(client, message, args) {
    const os = require('os');
    const revision = require('child_process')
      .execSync('git rev-parse HEAD')
      .toString()
      .trim()
      .slice(0, 7);
    // const { admin_role } = require('../config.json');
    // if you want to validate with roles...
    // if (message.member.roles.cache.has(admin_role))
    //   message.channel.send('DarK`BoT by Shiva ver: 0.0.1');
    // else message.channel.send('You don't have the right permissions')
    const platform = os.platform();
    const version = os.release();
    const os_info =
      platform.charAt(0).toUpperCase() + platform.slice(1);

    message.channel.send(
      'DarK`BoT by Shiva187 rev: ' +
        revision +
        ' Running on: ' +
        os_info +
        ' ' +
        version
    );
  },
};
