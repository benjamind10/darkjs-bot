module.exports = {
  name: 'clear',
  description: 'Clear messages!',
  async execute(client, message, args) {
    const { ADMIN_ROLE } = require('../config');
    let isAdmin;

    for (role in ADMIN_ROLE) {
      if (message.member.roles.cache.has(ADMIN_ROLE[role])) {
        isAdmin = true;
      } else isAdmin = false;
    }

    if (isAdmin) {
      if (!args[0])
        return message.reply(
          'Please enter the amount of messages to clear!'
        );

      if (isNaN(args[0]))
        return message.reply('Please enter a number!');

      if (args[0] > 100)
        return message.reply(
          "You can't delete more than 100 messages!"
        );

      if (args[0] < 1)
        return message.reply('You must delete atleast one message!');

      await message.channel.messages
        .fetch({ limit: args[0] })
        .then(messages => {
          message.channel.bulkDelete(messages);
        });
    } else {
      return message.reply('You do not have the right permissions');
    }
  },
};
