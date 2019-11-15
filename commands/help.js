const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

   return message.channel.send("We zullen binnen de 24 uur controleren of je alle stappen hebt gedaan. Binnen de 24 uur krijg je een bericht of je wel of niet in de clan zit.");

}

module.exports.help = {
    name: "hallo"
}