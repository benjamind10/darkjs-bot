const Discord = module.require('discord.js');
const giphy = require('giphy-api')(process.env.GIF_TOKEN);

module.exports = {
  name: 'gif',
  description: 'Get gifs based on your search',
  permissions: ['SEND_MESSAGES'],
  cooldown: 10,
  async execute(client, message, args) {
    if (args.length === 0) {
      message.channel.send('No Search terms!');
      return;
    }
    if (args.length === 1) {
      term = args.toString();
    } else {
      term = args.join(' ');
    }
    giphy.search(term).then(function (res) {
      // Res contains gif data!
      let id = res.data[0].id;
      let msgurl = `https://media.giphy.com/media/${id}/giphy.gif`;

      const embed = new Discord.MessageEmbed()
        .setTitle(`First result for \`${term}\` on GIPHY`)
        .setImage(msgurl)
        .setFooter({
          text: 'Powered by GIPHY',
          iconURL:
            'https://raw.githubusercontent.com/Giphy/GiphyAPI/f68a8f1663f29dd9e8e4ea728421eb2977e42d83/api_giphy_logo_sparkle_clear.gif',
        })
        .setColor('RANDOM');
      message.channel.send({ embeds: [embed] });
    });

    message.delete();
  },
};
