const mongoose = require('mongoose');
const fs = require('fs');
const mongoEventFiles = fs
  .readdirSync(`./events/mongoEvents`)
  .filter(file => file.endsWith('.js'));

module.exports = client => {
  console.log(client);
  client.dbLogin = async () => {
    for (file of mongoEventFiles) {
      const event = require(`../mongoEvents/${file}`);
      if (event.once) {
        mongoose.connection.once(event.name, (...args) =>
          event.execute(...args)
        );
      } else {
        mongoose.connection.on(event.name, (...args) =>
          event.execute(...args)
        );
      }
    }

    mongoose.Promise = global.Promise;
    await mongoose.connect(process.env.dbToken, {
      useFindAndModify: false,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
  };
};
