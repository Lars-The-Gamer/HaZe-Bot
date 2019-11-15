const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(command === `${prefix}accept`){

        return message.channel.send("We zullen binnen de 24 uur controleren of je alle stappen hebt gedaan. Binnen de 24 uur krijg je een bericht of je wel of niet in de clan zit.");

    }

    if(command === `${prefix}ok`){

        return message.channel.send("Iedereen die zich gisteren (11/11/2019) heeft geregistreerd voor de HaZe clan is nu lid! Er zijn een paar aanpassingen op jullie Discord! Veel plezier!");

    }

    if(command === `${prefix}help`){

        return message.channel.send("**COMMANDS** \n\n HaZe!help --> Om dit scherm te zien te krijgen \n HaZe!leden --> Om alle leden te zien te krijgen");

    }

    if(command === `${prefix}leden`){

        return message.author.send("**HaZe LEDEN** \n\n **Leiders:** \n 1. Lars Dobbelaere \n 2. HaZe Looped \n 3. HaZe Casper \n\n **Leden:** \n 1. HaZe Lias \n 2. HaZe Lucas \n 3. HaZe SAM MEY YT \n 4. HaZe Woutty \n\n **Totaal:** \n 7 leden");

    }

module.exports.help = {
    name: "hallo"
}}