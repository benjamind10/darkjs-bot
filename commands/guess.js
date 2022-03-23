module.exports = {
  name: 'guess',
  description: 'guess a number 1-100',
  async execute(client, message, args, Discord) {
    console.log(collector);
    let num = 0;
    let guesses = 0;

    if (!args[0]) {
      message.reply('Picking a number between 1 and 100');
      num = Math.floor(Math.random() * 100 + 1);
      guesses = 0;
    } else if (args[1] === num)
      message.reply('You guessed the right number');

    console.log(num);
  },
};
