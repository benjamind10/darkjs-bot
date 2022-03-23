module.exports = {
  name: 'version',
  descrption: 'This a version command',
  execute(message, args) {
    const os = require('os');
    revision = require('child_process')
      .execSync('git rev-parse HEAD')
      .toString()
      .trim()
      .slice(0, 7);
    // const { admin_role } = require('../config.json');
    // if you want to validate with roles...
    // if (message.member.roles.cache.has(admin_role))
    //   message.channel.send('DarK`BoT by Shiva ver: 0.0.1');
    // else message.channel.send('You don't have the right permissions')
    let platform = os.platform();
    let version = os.release();
    const os_info = platform.charAt(0).toUpperCase() + platform.slice(1);

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
