const Discord = require("discord.js")

const Client = new Discord.Client

console.log("bot")

Client.login(process.env.TOKEN)
