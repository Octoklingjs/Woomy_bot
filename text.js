const Discord = require('discord.js')
const bot = new Discord.Client()
const client = new Discord.Client()

const content = new Discord.Client()
const fs = require("fs");
const ffmpeg = require ('ffmpeg')

require("opusscript");
search = require('youtube-search');

con = console.log,

bot.on("ready", function () {
 
bot.user.setAvatar("./avata.jpg")
bot.user.setGame("")
.then(user => console.log(`j'ai choisis mon avatar`))
prefix = "!"


console.log("Serveurs: "+  client.guilds.size);


memberCount = client.users.size;
servercount = client.guilds.size;



    console.log("Je suis connecter et je suis dans combien de serveur ? "+ servercount);});

    bot.on('guildMemberAdd', member => {
      member.createDM().then(channel => {
        return channel.send('Bienvenue sur le serveur ' + member.displayName + '! Merci de respecter les regle ( si il en as)')
      }).catch(console.error)
    })
    



bot.on("guildMemberAdd", async member => {
    try {
    let rol = member.guild.roles.find("name", "Les inkling")
    var emb = new Discord.RichEmbed()
            .setColor("730000")
            .setTitle("woomycation")
            .setDescription(`:squid:${member.user.tag} est ariv�(e):squid`)
            .setFooter(`� Splatbotoont est tous droits r�serv�s et Cr�� par Ps Liquidateur de Kids`, bot.user.avatarURL)
    member.guild.channels.find("name", 'woomycation').send(emb);
    member.addRole(rol)
}catch(err) {
    member.guild.owner.send("Veuillez Cr�er le salon `woomycation` et le r�le `Les inkling` pour que tout le monde sache l'arriv�e du nouveau woomy !!")
}
    });
 bot.on("roleCreate", role =>{
        try {
        var emb = new Discord.RichEmbed()
        .setColor("730000")
        .setTitle("woomycation")
        .setDescription(`Un r�le vien d'�tre cr�� sur ${role.guild.name}`)
        .setFooter(`� Splatbotoont est tous droits r�serv�s et Cr�� par Ps Liquidateur de Kids`, bot.user.avatarURL)
        role.guild.channels.find("name", 'woomycation').send(emb)
        } catch(err) {
            role.guild.owner.send("Veuillez cr�er le salon `woomycation`, comme �a tout le monde sera au courant des roles cr��s !!")
        }
    });

 bot.on("roleDelete", role =>{
        try {
        var emb = new Discord.RichEmbed()
        .setColor("730000")
        .setTitle("woomycation")
        .setDescription(`Le r�le ${role.name} viens d'�tre supprim� sur ${role.guild.name}`)
        .setFooter(`� Splatbotoont est tous droits r�serv�s et Cr�� par Ps Liquidateur de Kids`, bot.user.avatarURL)
    role.guild.channels.find("name", 'woomycation').send(emb)
        } catch(err) {
            role.guild.owner.send("Veuillez cr�er le salon `woomy`, comme �a tout le monde sera au courant des roles d�truits !!")
        }
    })
 bot.on("emojiCreate", emoji =>{
        try {
        var emb = new Discord.RichEmbed()
            .setFooter(`� Splatbotoont est tous droits r�serv�s et Cr�� par Ps Liquidateur de Kids`, bot.user.avatarURL)
            .setColor("730000")
            .setTitle("woomycation")
            .setDescription(`L'image ${emoji.name}.png viens d'�tre import� pour un �moji sur ${emoji.guild.name} , woomy qu'il est joli`)
        emoji.guild.channels.find("name", 'woomycation').send(emb)
        } catch(err) {
            emoji.guild.owner.send("Veuillez cr�er le salon `woomycation`, comme �a tout le monde sera au courant des emojis cr��s !!")
        }
    })
 bot.on("emojiDelete", emoji =>{
        try {
        var emb = new Discord.RichEmbed()
            .setFooter(`� Splatbotoont est tous droits r�serv�s et Cr�� par Ps Liquidateur de Kids`, bot.user.avatarURL)
            .setColor("730000")
            .setTitle("woomycation")
            .setDescription(`L'emoji ${emoji.name} viens d'�tre supprim� sur ${emoji.guild.name} woomy je le trouver joli moi`)
        emoji.guild.channels.find("name", 'woomycation').send(emb)
        } catch(err) {
            emoji.guild.owner.send("Veuillez cr�er le salon `woomycation`, comme �a tout le monde sera au courant des emojis cr��s !!")
        }
    })
bot.on(("guildMemberRemove"), (member)=> {
    try {
    member.guild.channels.find("name", 'woomycation').send(`:sob: "${member.user.tag}" est parti(e):sob:`);
        } catch(err) {
            member.guild.owner.send("Veuillez cr�er le salon `woomycation`, comme �a tout le monde sera au courant des personnes qui partent !!")
        }
        })
bot.on(("message"), async (msg)=>{
	 var msgAuthURL = msg.author.avatarURL;
    var msgAuthName = msg.author.username;
    var msgauthor = msg.author.id;
  const args = msg.content.slice(config.prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
 if(command === "ping") {
        const m = await msg.channel.send("Ping?");
        m.edit(`Pong! la latence est de ${m.createdTimestamp - msg.createdTimestamp}ms, celle de l'API est de ${Math.round(bot.ping)}ms`);
        m.edit(`Pong! la latence est de ${m.createdTimestamp - msg.createdTimestamp}ms, celle de l'API est de ${Math.round(bot.ping)}ms`);
        m.edit(`Pong! la latence est de ${m.createdTimestamp - msg.createdTimestamp}ms, celle de l'API est de ${Math.round(bot.ping)}ms`);
        m.edit(`Pong! la latence est de ${m.createdTimestamp - msg.createdTimestamp}ms, celle de l'API est de ${Math.round(bot.ping)}ms`);
        m.edit(`Pong! la latence est de ${m.createdTimestamp - msg.createdTimestamp}ms, celle de l'API est de ${Math.round(bot.ping)}ms`);
        m.edit(`Pong! la latence est de ${m.createdTimestamp - msg.createdTimestamp}ms, celle de l'API est de ${Math.round(bot.ping)}ms`);
        m.edit(`Pong! la latence est de ${m.createdTimestamp - msg.createdTimestamp}ms, celle de l'API est de ${Math.round(bot.ping)}ms`);
        m.edit(`Pong! la latence est de ${m.createdTimestamp - msg.createdTimestamp}ms, celle de l'API est de ${Math.round(bot.ping)}ms`);
        m.edit(`Pong! la latence est de ${m.createdTimestamp - msg.createdTimestamp}ms, celle de l'API est de ${Math.round(bot.ping)}ms`);
        msg.delete();
        m.delete();
        }
  if(command === "say") {
	if(msg.author == config.creator) {
            const sayMessage = args.join(" ");
            msg.delete().catch(O_o=>{});
            msg.channel.send(sayMessage);
	} else {
	msg.channel.send("Tu n'est pas mon **Fondateur**")}
          }
    if(command === "kick") {
            if(!msg.member.hasPermission("LES_KRAKEN")) return msg.channel.send("Vous n'avez pas les droits pour kick un utilisateur !");    
          let member = msg.mentions.members.first();
          if(!member)
            return msg.reply("Sois la mention est invalide, sois elle est inexistante.");
          if(!member.kickable) 
            return msg.reply("Tu ne peut pas kick cette personne, as-tu les permissions:grey_question:");
          let reason = args.slice(1).join(' ');
          if(!reason)
            return msg.reply("Maintenant la raison du ban et c'est fini ...");
          member.kick(reason)
            .catch(error => msg.reply(`Dsl ${msg.author} mais tu ne peut pas ban car: ${error}`));
            msg.channel.send(`${member.user} est kick, par ${msg.author.tag} car: ${reason}, sa lui servira de le�on`);
          msg.delete();
        }
   if(command === "ban") {
            if(!msg.member.hasPermission("LES_KRAKEN")) return msg.channel.send("Vous n'avez pas les droits pour ban un utilisateur !");
            
          let member = msg.mentions.members.first();
          if(!member)
            return msg.reply("Sois la mention est invalide, sois elle est inexistante.");
          if(!member.bannable) 
            return msg.reply("Tu ne peut pas ban cette personne, as-tu les permissions:grey_question:");
      
          let reason = args.slice(1).join(' ');
          if(!reason)
            return msg.reply("Maintenant la raison du ban et c'est fini ...");
            await member.ban(reason)
                .catch(error => msg.reply(`Dsl ${msg.author} mais tu ne peut pas ban car: ${error}`));
                msg.channel.send(`${member.user} est banni, par ${msg.author.tag} car: ${reason},sa lui servira de le�on`);
          msg.delete();
        }
   if(command === "punir"){
            
            if(!msg.member.hasPermission("PS_liquideur_de_kids")) return msg.channel.send("Vous n'avez pas les droits pour muter un utilisateur !");
            
            let toMute = msg.guild.member(msg.mentions.users.first()) || msg.guild.members.get(args[0]);
            if(!toMute) return msg.channel.send("Merci d'entrer un utilisateur !");
            let role = msg.guild.roles.find(r => r.name === "Punis");
                  if(!role){
                    role = await msg.guild.createRole({
                        name: "Punis",
                        color:"#73000",
                        permissions:[]
                      });
    msg.guild.channels.forEach(async (channel, id) => {
                      await channel.overwritePermissions(role, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false,
                        CHANGE_NICKNAME: false,
                        CREATE_INSTANT_INVITE: false,
                        VIEW_CHANNEL: false,
                        SEND_TTS_MESSAGES: false
                        
                      });
                   
     if(toMute.roles.has(role.id)) return msg.channel.send('Cet utilisateur est d�j� punis !');
            
                await(toMute.addRole(role));
                msg.channel.send("Je l'ai punis !"), msg.delete();
                return;
                        
  
     if(command === "depunir") {
              if(!msg.member.hasPermission("LES_KRAKEN")) return msg.channel.send("Vous n'avez pas les droits pour muter un utilisateur !");
                
                let toMute = msg.guild.member(msg.mentions.users.first()) || msg.guild.members.get(args[0]);
                if(!toMute) return msg.channel.send("Merci d'entrer un utilisateur !");
                let role = msg.guild.roles.find(r => r.name === "Punis");
                toMute.removeRole(role)
                msg.channel.send("Je l'ai d�punis !! fait attention a te ne pas refaire liquider!")

            }
        if(command === "purge") {
            if(!msg.member.hasPermission("LES_KRAKEN")) return msg.channel.send("Vous n'avez pas les droits pour purger un channel !");
          const deleteCount = parseInt(args[0], 10);
          if(!deleteCount || deleteCount < 2 || deleteCount > 200)
            return msg.reply("Precise le nombre de msg � supprimer (2<200>2)");
          const fetched = await msg.channel.fetchMessages({count: deleteCount});
          const m = await msg.channel.send("Les messages sont suprim�s");
          m.edit("Les messages sont suprim�s");
          m.edit("Les messages sont suprim�s");
          m.edit("Les messages sont suprim�s");
          m.edit("Les messages sont suprim�s");
          m.edit("Les messages sont suprim�s");
          m.edit("Les messages sont suprim�s");
          m.delete();
          msg.channel.bulkDelete(fetched)
            .catch(error => msg.reply(`Tu ne peut pas supprimer les msg car: ${error}`));
        }

bot.login("Mzk1ODk2NzY3MTQyNjkwODE3.DTDn-g.HvniDWiS4mivHSlYxYJcTiD0WQM")
