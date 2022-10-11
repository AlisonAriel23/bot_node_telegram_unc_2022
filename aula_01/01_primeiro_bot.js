// importando as variaveis de ambiente

const env = require('../.env')

//importando a biblioteca 'Telegraf'

const {Telegraf} = require('telegraf')

//criando o objeto bot e o instaciando como um novo objeto da classe Telegraf

const bot = new Telegraf(env.token)

//iniciando o bot

bot.start(ctx => {
    const from = ctx.update.message.from
    console.log(from)
    ctx.reply(`olá seja bem vindo ${from.first_name}!`)
})

//dando continuidade a conversa

bot.on('text', async(ctx,next)=>{
    await ctx.reply('resposta 1')
    next()
})


//dando continuidade a conversa

bot.on('text', async(ctx,next)=>{
    await ctx.reply('Resposta 2')
    next()
})

bot.on('text', async(ctx,next)=>{
    await ctx.reply('Resposta 3')
    next()
})
//iniciando o polling com o servidor para verificar se ha novas mensagens

bot.startPolling()