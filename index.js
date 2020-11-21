const fs = require('fs');
const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
const { error } = require('console');
const { url } = require('inspector');
const { userInfo } = require('os');
const ytdl = require('ytdl-core')



const client = new Discord.Client();
client.commands = new Discord.Collection();

    client.on('ready', () => {
    console.log("le bot est allumé");
    client.user.setActivity("discord.gg/early",{
        type: "STREAMING",
        url: "https://www.twitch.tv/CrowBots"
    });
});

///embed///
      client.on('message', message => {
        if (message.content === '*help') {
          message.channel.send 
          const embed = new MessageEmbed()
          .setColor('RANDOM')
           .setTitle('Commande : Help')
           .setDescription('<a:flechecool:770247682123890688> - invite : `donne le liens pour inviter le bot`\n <a:flechecool:770247682123890688> - play : `joue une musique (marche avec liens ytb)`\n <a:flechecool:770247682123890688> - server : `donne des info sur le serveur`\n <a:flechecool:770247682123890688> - pic : `donne ta pp`\n')
           .setFooter('Early • Prefix actuel : *')
           message.channel.send(embed);
          }
          client.on('message', message => {
            if (message.content === '*server') {
              message.channel.send 
              const embed = new MessageEmbed()
              .setColor('RANDOM')
               .setTitle('Commande : server')
               .setDescription(`<a:verif:770021584118349864> **Le nom du serveur est :** ${message.guild.name}\n<a:verif:770021584118349864> **Totale de membre :** ${message.guild.memberCount}\n<a:verif:770021584118349864> **L'owner est : **${message.guild.owner}\n<a:verif:770021584118349864> **L'ID de l'owner est : **${message.guild.ownerID}\n<a:verif:770021584118349864> **La région du serveur est :** ${message.guild.region}\n`)
               .setFooter('Early • Prefix actuel : *')
               message.channel.send(embed);
            }


            }
          )});
          client.on('message', message => {
            if(message.content.startsWith('*play')){
              message.reply('Musique en cours !')
              if(message.member.voice.channel){
                message.member.voice.channel.join().then(connection => {
                  let args = message.content.split(" ");
                  
                  let dispatcher = connection.play(ytdl(args[1], { quality: "highestaudio" }));

                  dispatcher.on("finish", () => {
                    dispatcher.destroy();
                    connection.disconnect();
                  });

                  dispatcher.on("error", err => {
                    console.log('une erreur est survenue');
                  });
                }).catch(err => {
                  message.reply('Erreur lors de la connection')
                });

              }
              else {
                message.reply("Vous n'êtes pas connecté dans un salon vocal allé en vocal !");
              }
            }

          })
          client.on('message', message => {
            if(message.content.startsWith('*ping')){
              message.channel.send('**pong**')
            }
            client.on('message', message => {
              if(message.content.startsWith('*pic')){
                message.channel.send('message.reply(message.author.displayAvatarURL())')
              }
              client.on('message', message => {
                if(message.content.startsWith('*invite')){
                  message.channel.send(`<a:fleche:770021663231967243> **Le lien du bot est :** https://discord.com/oauth2/authorize?client_id=779462962137661460&scope=bot&permissions=8`)
                }
              })})})
              



client.login('Nzc5NDYyOTYyMTM3NjYxNDYw.X7g5cw.nNTqufFzqD2n8a7WyhbFZRzTf5k');