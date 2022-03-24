module.exports = {
  name: 'mute',
  descrption: 'This a command mutes a user',
  execute(client, message, args) {
    const { ADMIN_ROLE } = require('../config');
    //   if you want to validate with roles...
    if (message.member.roles.cache.has(ADMIN_ROLE)) {
      const target = message.mentions.users.first();
      let memberTarget = message.guild.members.cache.get(target.id);
      let memberRoles = memberTarget._roles;

      console.log(memberRoles);

      //   if (target) {
      //     let mainRole = message.guild.roles.cache.find(
      //       role => role.name === '@everyone'
      //     );
      //     let muteRole = message.guild.roles.cache.find(
      //       role => role.name === 'Muted'
      //     );

      //     let memberTarget = message.guild.members.cache.get(target.id);
      //     memberTarget.roles.add(muteRole.id);
      //   } else {
      //     message.channel.send('User can not be found');
      //   }
    } else
      message.channel.send("You don't have the right permissions");
  },
};
