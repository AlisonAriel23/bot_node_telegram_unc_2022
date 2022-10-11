// importando as variaveis de ambiente

const env = require('../.env')

//importando a biblioteca 'Telegraf'

const {Telegraf} = require('telegraf')

//criando o objeto bot e o instaciando como um novo objeto da classe Telegraf

const bot = new Telegraf(env.token)

//iniciando o bot

bot.start(ctx => {
    const name = ctx.update.message.from.first_name
    console.log(from)
    ctx.reply(`olá seja bem vindo ${name}!
    Eu sou um bot em trenamento!
    Por enquanto eu:
    - Repito o que você digita
    - Digo as cordenadas de latitude e longitudoe
    - Retorno o nome e o telefone de contato
    - Ouço uma mensagem de audio e retorno a duração
    - Informo a resoluão das fotos que voce me envia!`)
})

//dando continuidade a conversa

//iniciando o polling com o servidor para verificar se ha novas mensagens

bot.startPolling()