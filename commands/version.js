module.exports = {
  name: 'version',
  descrption: 'This a version command',
  execute(message, args) {
    // const { admin_role } = require('../config.json');
    // if you want to validate with roles...
    // if (message.member.roles.cache.has(admin_role))
    //   message.channel.send('DarK`BoT by Shiva ver: 0.0.1');
    // else message.channel.send('You don't have the right permissions')
    message.channel.send('DarK`BoT by Shiva ver: 0.0.1');
  },
};
