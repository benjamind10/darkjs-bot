module.exports = {
  name: 'version',
  descrption: 'This a version command',
  execute(message, args) {
    const { platform } = require('process');
    // const { admin_role } = require('../config.json');
    // if you want to validate with roles...
    // if (message.member.roles.cache.has(admin_role))
    //   message.channel.send('DarK`BoT by Shiva ver: 0.0.1');
    // else message.channel.send('You don't have the right permissions')
    const os_info =
      platform.charAt(0).toUpperCase() + platform.slice(1);

    message.channel.send(
      'DarK`BoT by Shiva ver: 0.0.1 Running on: ' + os_info
    );
  },
};
