const Discord = require('discord.js');

var client = new Discord.Client();

client.on ("ready", () => {
    console.log ("Je bot is volledig opgestart");

    client.user.setActivity ("HaZe!help");
});

const fs = require("fs");
client.msgs = require ("./msgs.json");

const prefix = "HaZe!";
client.on ("message", (message) => {

    
        if (message.content.startsWith ("HaZe!accept")) {
            message.channel.send ("We zullen binnen de 24 uur controleren of je alle stappen hebt gedaan. Binnen de 24 uur krijg je een bericht of je wel of niet in de clan zit.");
        }

        if (message.content.startsWith ("HZ!ok")) {
            message.channel.send ("Iedereen die zich gisteren (11/11/2019) heeft geregistreerd voor de HaZe clan is nu lid! Er zijn een paar aanpassingen op jullie Discord! Veel plezier!");
        }

	if (message.content.startsWith ("HaZe!help")) {
            message.channel.send ("**COMMANDS** \n\n HaZe!help --> Om dit scherm te zien te krijgen \n HaZe!leden --> Om alle leden te zien te krijgen");
        }

    if (message.content.startsWith ("HaZe!leden")) {
            message.author.send ("**HaZe LEDEN** \n\n **Leiders:** \n 1. Lars Dobbelaere \n 2. HaZe Looped \n 3. HaZe Casper \n\n **Leden:** \n 1. HaZe Lias \n 2. HaZe Lucas \n 3. HaZe SAM MEY YT \n 4. HaZe Woutty \n\n **Totaal:** \n 7 leden");
        }


        

});

client.login (process.env.token);