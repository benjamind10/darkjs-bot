module.exports = {
  name: 'guess',
  description: 'guess a number 1-100',
  execute(message, args) {
    message.reply('Picking a number between 1 and 100');
    let num = Math.floor(Math.random() * 100 + 1);
    let guesses = 0;

    let answer = message.content.split(' ')[1];

    console.log(answer);

    // var mes = message.content.split(' ');
    // console.log(mes);
    // message.reply('Picking a random number between 1 and 100');
    // num = Math.floor(Math.random() * 100 + 1);
    // guesses = 0;
    // console.log(num);

    // if (mes[0] == '?guess') {
    //   if (num == 0) {
    //     message.reply('Picking a random number between 1 and 100');
    //     num = Math.floor(Math.random() * 100 + 1);
    //     guesses = 0;
    //   } else if (mes[1] == num) {
    //     guesses++;
    //     message.reply('You got it! Only took ' + guesses + ' tries.');
    //     message.reply('Picking a random number between 1 and 100');
    //     num = Math.floor(Math.random() * 100 + 1);
    //     guesses = 0;
    //   } else if (mes[1] < num) {
    //     message.reply(mes[1] + ' is too low');
    //     guesses++;
    //   } else if (mes[1] > num) {
    //     message.reply(mes[1] + ' is too high');
    //     guesses++;
    //   }
    // }
  },
};
