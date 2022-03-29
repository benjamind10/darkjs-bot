module.exports = {
  name: 'bancount',
  description: 'This command returns the ban count',
  permissions: ['BAN_MEMBERS'],
  async execute(client, message, args) {
    const banlist = await message.guild.bans.fetch();

    await message.reply(`Ban count: ${banlist.size}`);
  },
};
