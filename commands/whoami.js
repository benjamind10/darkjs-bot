module.exports = {
  name: 'whoami',
  descrption: 'This a whoami commands',
  execute(message, args) {
    let id = '692963810193178664';
    let isAdmin = message.guild.roles.cache.get(id);
    console.log(isAdmin);

    isAdmin
      ? message.channel.send(
          `You are ${message.author.username} and you are a Admin`
        )
      : message.channel.send(`You are ${message.author.username}`);
  },
};
