const Discord = module.require('discord.js');

module.exports = {
  name: 'weather',
  description: 'Shows Weather for the provided place',
  permissions: ['SEND_MESSAGES'],
  cooldown: 10,
  async execute(client, message, args) {
    const name = args.join(' ');
    const place = args.join('-');
    if (!place) {
      return message.channel.send(
        'Please enter the name of a Country/City/Town'
      );
    }
    const link = `https://wttr.in/${place}.png?us`;
    const weblink = `https://wttr.in/${place}/`;
    const embed = new Discord.MessageEmbed()
      .setTitle(`${name}'s Weather for Next 3 days`)
      .setImage(link)
      .setFooter({ text: 'Credits to Wttr.in' })
      .setColor('RANDOM');
    message.channel.send({ embeds: [embed] });
  },
};
