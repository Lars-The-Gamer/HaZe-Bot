const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const fs = require("fs");

const bot = new discord.Client();

bot.on("ready", async () => {

    console.log(`${bot.user.username} is nu online`);

    bot.user.setActivity("HaZe!help", {type: "PLAYING"});

});

bot.login(process.env.token);

bot.on("message", async message => {

    if (message.author.bot) return;

    if (message.channel.type === "dm") return;

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    var arguments = messageArray.slice(1);

    if(command === `${prefix}accept`){

        var botEmbed = new discord.RichEmbed()
            .setDescription("We zullen binnen de 24 uur controleren of je alle stappen hebt gedaan. \n Binnen de 24 uur krijg je een bericht of je wel of niet in de clan zit.")
            .setColor("#79ff00");

        return message.channel.send(botEmbed);

    }

    if(command === `${prefix}ok`){

        var botEmbed = new discord.RichEmbed()
        .setDescription("Iedereen die zich gisteren (11/11/2019) heeft geregistreerd voor de HaZe clan is nu lid! \n Er zijn een paar aanpassingen op jullie Discord! Veel plezier!")
        .setColor("#79ff00");

        return message.channel.send(botEmbed);

    }

    if(command === `${prefix}help`){

        var botEmbed = new discord.RichEmbed()
            .setDescription("**ALLE COMMANDS** \n\n **HaZe!help** --> Om dit scherm te krijgen met alle commands \n **HaZe!leden** --> Zien wie er in de HaZe clan zit")
            .setColor("#79ff00");

        return message.channel.send(botEmbed);

    }

    if(command === `${prefix}leden`){

        var botEmbed = new discord.RichEmbed()
            .setDescription("**HaZe LEDEN** \n\n **Leiders:** \n 1. Lars Dobbelaere \n 2. HaZe Looped \n 3. HaZe Casper \n\n **Leden:** \n 1. HaZe Lias \n 2. HaZe Lucas \n 3. HaZe SAM MEY YT \n 4. HaZe Woutty \n\n **Totaal:** \n 7 leden")
            .setColor("#79ff00");

        return message.author.send(botEmbed);

    }

});