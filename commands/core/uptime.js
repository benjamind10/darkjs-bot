module.exports = {
  name: 'uptime',
  aliases: ['up'],
  descrption: 'This a uptime command',
  permissions: ['SEND_MESSAGES'],
  cooldown: 10,
  execute(client, message, args) {
    try {
      const os = require('os');

      function systemUptime(seconds) {
        seconds = os.uptime();
        var d = Math.floor(seconds / (3600 * 24));
        var h = Math.floor((seconds % (3600 * 24)) / 3600);
        var m = Math.floor((seconds % 3600) / 60);
        var s = Math.floor(seconds % 60);

        var dDisplay = d > 0 ? d + (d == 1 ? ' day, ' : ' days, ') : '';
        var hDisplay = h > 0 ? h + (h == 1 ? ' hour, ' : ' hours, ') : '';
        var mDisplay = m > 0 ? m + (m == 1 ? ' minute, ' : ' minutes, ') : '';
        var sDisplay = s > 0 ? s + (s == 1 ? ' second' : ' seconds') : '';
        return dDisplay + hDisplay + mDisplay + sDisplay;
      }

      let sysUptime = systemUptime();

      function discordUptime(seconds) {
        let d = Math.floor(client.uptime / 86400000);
        let h = Math.floor(client.uptime / 3600000) % 24;
        let m = Math.floor(client.uptime / 60000) % 60;
        let s = Math.floor(client.uptime / 1000) % 60;

        var dDisplay = d > 0 ? d + (d == 1 ? ' day, ' : ' days, ') : '';
        var hDisplay = h > 0 ? h + (h == 1 ? ' hour, ' : ' hours, ') : '';
        var mDisplay = m > 0 ? m + (m == 1 ? ' minute, ' : ' minutes, ') : '';
        var sDisplay = s > 0 ? s + (s == 1 ? ' second' : ' seconds') : '';
        return dDisplay + hDisplay + mDisplay + sDisplay;
      }

      let discUptime = discordUptime();

      message.channel.send(
        `
        Uptime: ${discUptime} | System: ${sysUptime}
        `
      );
    } catch (e) {
      console.log(e);
    }
  },
};
