const Discord = module.require('discord.js');

module.exports = {
  name: '8ball',
  description: 'Fortune teller',
  permissions: ['SEND_MESSAGES'],
  cooldown: 10,
  async execute(client, message, args) {
    try {
      if (args.length == 0)
        return message.channel
          .send('`Usage: ?8ball <msg>`')
          .then(msg => setTimeout(() => msg.delete(), 2300));

      var fortunes = [
        'Yes.',
        'It is certain.',
        'It is decidedly so.',
        'Without a doubt.',
        'Yes definelty.',
        'You may rely on it.',
        'As I see it, yes.',
        'Most likely.',
        'Outlook good.',
        'Signs point to yes.',
        'Reply hazy, try again.',
        'Ask again later.',
        'Better not tell you now...',
        'Cannot predict now.',
        'Concentrate and ask again.',
        "Don't count on it.",
        'My reply is no.',
        'My sources say no.',
        'Outlook not so good...',
        'Very doubtful.',
      ];
      await message.channel.send(
        fortunes[Math.floor(Math.random() * fortunes.length)]
      );
    } catch (e) {
      console.log(e);
    }
  },
};
