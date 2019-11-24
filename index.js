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
            .setDescription("We zullen binnen de 24 uur controleren of je alle stappen hebt gedaan. \nBinnen de 24 uur krijg je een bericht of je wel of niet in de clan zit.")
            .setColor("#79ff00");

        return message.channel.send(botEmbed);

    }

    if(command === `${prefix}ok`){

        var botEmbed = new discord.RichEmbed()
        .setDescription("Iedereen die zich gisteren (11/11/2019) heeft geregistreerd voor de HaZe clan is nu lid! Er zijn een paar aanpassingen op jullie Discord! Veel plezier!")
        .setColor("#79ff00");

        return message.channel.send(botEmbed);

    }

    if(command === `${prefix}help`){

        var botEmbed = new discord.RichEmbed()
            .setDescription("**ALLE COMMANDS** \n\n**HaZe!help** --> Om dit scherm te krijgen met alle commands \n\n**HaZe!serverinfo** --> Info van de server weergeven \n\n**HaZe!leden** --> Zien wie er in de HaZe clan zit \n\n**HaZe!pokecord --> Uitleg krijgen over hoe pokécord werkt**")
            .setColor("#79ff00");

        return message.channel.send(botEmbed);

    }

    if(command === `${prefix}leden`){

        var botEmbed = new discord.RichEmbed()
            .setDescription("**HaZe LEDEN** \n\n**Leiders:** \n1. Lars Dobbelaere \n2. HaZe Looped \n3. HaZe Casper \n\n**Leden:** \n1. HaZe Lias \n2. HaZe Lucas \n3. HaZe SAM MEY YT \n4. HaZe Woutty \n\n**Totaal:** \n7 leden")
            .setColor("#79ff00");

        return message.author.send(botEmbed);

    }

    if(command === `${prefix}pokecord`){

        var botEmbed = new discord.RichEmbed()
            .setDescription("**POKÉCORD** \n\n**Wat is het?** \nPokécord is een spel waarmee je pokémons kunt vangen en met pokémons kunt vechten \n\n**Hoe start je? \n**Om te beginnen kies je je starterspokémon (Je starterspokémon is de pokémon waarmee je XP verdient of mee gaat vechten) \nDit doe je door **p!start** te typen en vervolgens **p!pick <naam van pokémon>** te typen \nAls het goed is heb je dan je starterspokémon gekozen \n\n**Vooruitgang** \nAls je je vooruitgang wilt zien bijvoorbeeld welke pokémons je hebt gevangen dan typ je **p!pokemon** \nAls je wil zien wat je starterspokémon is dan typ je **p!info** \n\n**XP verdienen** \nEr zijn twee manieren om XP te krijgen \nDe eerste manier is door gewoon te praten in #🐣pokécord chat met andere mensen \nDe tweede manier is door een gevecht aan te gaan met iemand uit de Discord server dit doe je door **p!duel <@lid>** \nDe winnaar van het gevecht ontvangt dan XP \n\n**Pokémons vangen** \nAls je praat in #🐣pokécord verschijnen ook pokémons die je kunt vangen \nAls dat gebeurt en je wilt er één vangen dan doe je dat met **p!catch <naam van pokémon dat verschijnt>** \nDus wees als eerste van alle leden die de pokémon vangt door te raden welke naam de pokémon heeft \nAls je de pokémon niet als eerste hebt gevangen maar wel iemand anders dan kun je de pokémon niet meer vangen omdat die al gevangen is door iemand anders \nAls je de naam van de pokémon niet weet kun je ook een hint gebruiken door **p!hint** te typen \nAls je een pokémon vangt komt dat bij je vooruitgang te staan \nTyp **p!pokemon** om je vooruitgang te zien \n\n**Starterspokémon aanpassen** \nAls je een andere starterspokémon (Je starterspokémon is de pokémon waarmee je XP verdient of mee gaat vechten) wilt kun je dat doen met **p!select <nummer van pokémon dat in je vooruitgang staat>** \nOm naar vooruitgang te gaan typ je **p!pokemon** \nAls er nog geen pokémons in je vooruitgang staan wilt dat zeggen dat je er nog geen hebt gevangen \nDus je kunt alleen gevangen pokémons als starterspokémon maken")
            .setColor("#79ff00");

        return message.author.send(botEmbed);

    }

    if(command === `${prefix}serverinfo`){

        var icon = message.guild.iconURL

        var botEmbed = new discord.RichEmbed()
            .setDescription("**Server info**")
            .setColor("#79ff00")
            .setThumbnail(icon)
            .addField("Bot naam", bot.user.username)
            .addField("Je bent de server gejoind op", message.member.joinedAt)
            .addField("Server leden", message.guild.memberCount);

        return message.channel.send(botEmbed);

    }

    if(message.content.startsWith("Hallo")){

        var botEmbed = new discord.RichEmbed()
            .setDescription("Goedendag! \nAls je hulp nodig hebt met Discord dan typ je **'HaZe!hulp'**")
            .setColor("#79ff00");

        return message.channel.send(botEmbed);

    } 

    if(command === `${prefix}hulp`){

        var botEmbed = new discord.RichEmbed()
            .setDescription("**HOE MUZIEK AFSPELEN OP DISCORD?** \n\nAls eerste ga je verbinding maken met 📞Els - Lars Bellen \nAls je dat hebt gedaan ga je naar #🎵muziek \nDaar kun je een liedje laten afspelen of pauzeren \nTyp **r!play <Titel lied/Link lied>** om het gekozen liedje te laten afspelen \nGebruik **r!pause** om het liedje te pauzeren \nTyp **r!play** om het liedje te hervatten \nAls je wil stoppen met muziek te luisteren dan verbreek je de verbinding met 📞Els - Lars Bellen")
            .setColor("#79ff00");

        return message.channel.send(botEmbed);

    }

    if(command === `${prefix}kennismaking`){

        var icon = message.guild.iconURL

        var botEmbed = new discord.RichEmbed()
            .setDescription("Hey! \nIk ben je persoonlijke assistent! \nIk zal je helpen en info geven over Discord! \nZeg gerust eens hallo tegen mij!")
            .setColor("#79ff00")
            .setThumbnail(icon)

        return message.channel.send(botEmbed);

    }

    if(command === `${prefix}CU1`){

        var botEmbed = new discord.RichEmbed()
            .setDescription("**UPDATE NOTES 24/11/2019** \n\n**Muziek** \nJe kunt nu muziek afspelen op Discord! \nAls eerste ga je verbinding maken met 📞Els - Lars Bellen \nAls je dat hebt gedaan ga je naar #🎵muziek \nDaar kun je een liedje laten afspelen of pauzeren  \nTyp **r!play <Titel lied/Link lied>** om het gekozen liedje te laten afspelen \nGebruik **r!pause** om het liedje te pauzeren \nTyp **r!play** om het liedje te hervatten \nAls je wil stoppen met muziek te luisteren dan verbreek je de verbinding met 📞Els - Lars Bellen")
            .setColor("#79ff00");

        return message.channel.send(botEmbed);

    }

});