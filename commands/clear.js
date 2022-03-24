module.exports = {
  name: 'clear',
  description: 'Clear messages!',
  permissions: ['ADMINISTRATOR'],
  async execute(client, message, args) {
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
  },
};
