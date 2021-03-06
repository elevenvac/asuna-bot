const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {
    
    let language = db.fetch(`lang_${message.guild.id}`)
    if (language === null) language = client.config.mainLang
    const lang = require(`../lang/${language}.js`)
    
    message.channel.send("https://top.gg/bot/" + client.user.id + "/vote")


}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'vote'
};
