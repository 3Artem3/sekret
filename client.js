const Discord = require("discord.js");
const client = new Discord.Client();

const client2 = new Discord.Client()

const loger = new Discord.Client();
const dmloger = new Discord.Client();
const nitro = new Discord.Client();
const fs = new require("fs");
const { inspect } = require("util");
const db = require('quick.db');
const ms = require("ms");
const gm = require('gm');
const Canvas = require('canvas');
const superfetch = require('node-superfetch');
const dbs = require('enmap');
const pred = new dbs({ name: 'pred' })
const noting = new dbs({ name: 'level' })
const server = new dbs({ name: 'server' })
const users = new dbs({ name: 'users' })
const botsstats = new dbs({ name: 'botsstats' })
const ytdl = require('ytdl-core');
const request = require('request');
var requests = require('request-promise');

const bot = new Discord.Client({ disableEveryone: true });
client.commands = new Discord.Collection();
const embed = new Discord.RichEmbed()

// client2.login(process.env.BOT)

// nitro.login(process.env.NITRO)
// loger.login(process.env.LOGER)
// dmloger.login(process.env.DMLOGER)

client.login(process.env.TOKEN)

client.on("message", async message => {
  if (message.content === "Мега спамвключить") {
    if (message.author.id !== "557917334933864448") return;
    message.channel.send("Спам");
  }
  if (message.content === "Спам") {
    if (message.author.id !== "576751099932049408") return;
    message.channel.send("Спам");
  }
  if(message.content === "О!приветствие"){

    
    var canvas = Canvas.createCanvas(700, 250);

var ctx = canvas.getContext('2d');

var {body: j} = await superfetch.get("https://discordjs.guide/assets/img/8CQvVRV.cced9193.png")
var a = await Canvas.loadImage(j)
ctx.drawImage(a, 0, 0, canvas.width, canvas.height);

var {body: j} = await superfetch.get(message.author.displayAvatarURL)
var a = await Canvas.loadImage(j)
ctx.drawImage(a, 0, 0, 200, canvas.height);
ctx.font = '28px sans-serif';
	ctx.fillStyle = '#ffffff';
	ctx.fillText('Привет', canvas.width / 2.5, canvas.height / 3.5);
    
ctx.strokeStyle = '#74037b'; 	// Draw a rectangle with the dimensions of the entire canvas 	ctx.strokeRect(0, 0, canvas.width, canvas.height); 
ctx.font = '60px sans-serif';
    ctx.fillStyle = '#ffffff';
	// Actually fill the text with a solid color
	ctx.fillText(message.author.username, canvas.width / 2.5, canvas.height / 1.8);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();
    
ctx.strokeRect(0, 0, canvas.width, canvas.height)

var attachment = new Discord.Attachment(canvas.toBuffer(), 'hi.png')
message.channel.send(attachment)
    
  }
});
client.on("message", message => {

  var prefix = db.fetch(`server.settings.${message.guild.id}.prefix`);
  if(!message.content.startsWith(prefix)) return;
if(message.author.bot) return;
      let messageArray = message.content.split(' ')
      let cmd = messageArray[0].toLowerCase()
      let args = messageArray.slice(1);
      let commandfile = client.commands.get(cmd.slice(prefix.length));
      if(commandfile) commandfile.run(client, message, args);
      if(message.content.indexOf(prefix) !== 0) return;
  });














// мой сервер каналы
client.on("ready", () => { /*client.channels.get("673213741302546435").send(embed.setColor("ff0000"). setDescription (`[\@everyone]
Правил много, но запомнить можно

1.1 - нельзя спамить - мут 1 час
Нельзя флудить - мут 1 чач

1.2 - нельзя бить девочек, а девочкам нельзя бить мальчиков - мут 1 мин

1.3 - нельзя рекламировать - мут 1 час

1.4 - насчёт партнёрства писать в ЛС

1.5 - нельзя оск ( оскорблять ) сервер, администрацию, за это - мут 1 час

1.6 - нельзя матерится, это можно делать в #😡маты🤬

1.7 - всегда следить за новостями

1.8 - нельзя оск других участников сервера

1.9 - если вы будете общаться в текстовых канал не так, к примеру: вы общайтесь в #☺мемы😂, но надо #💈основной, вот за это мут - 30 мин`))*/
  
  
  
  db.delete("couldaun.command")
	// первый попавшийся канал от метода channels.first() вернул голосовой
	// Давай лучше подключимся к нужному нам каналу напрямую!?
  //client.guilds.first().channels.get("539101775567781913").send("Hello World!");
  
  // Искать в коллекции JavaScript можно при помощи метода .find(). В скобках имя переменной для быстрой проверки. После => сама проверка условия. client.guilds.find(i => i.id > 0)
  /*
  // Печатаем сообщение для отслеживания Реакций. Сохраняем ID
  client.channels.get("539101775567781913").send(`Нажми на эмодзи, чтобы получить/убрать роль!`)
    .then((message) => {
      message.react("1⃣");
      messageId = message.id;
    });
	*/
  setTime();
	// Запускаем функцию, которая загрузит сразу актуальные данные и отобразит, а также запустит отсчет до следующей проверки.
    checkTime();
});

// Рекурсивная функция (вызывает сама себя)
function checkTime() {
// 	// Загружаем данные с сервера
//        client.channels.get("662672166940180491").setName(`Серверов: ${client.guilds.size}`);// Находим нужный голосовой канал и устанавливаем ему имя.
//        client.channels.get("662678465748795403").setName(`Пользователей: ${client.users.size}`);// Находим нужный голосовой канал и устанавливаем ему имя.
        
  
  var now = new Date(); // Получаем актуальную дату/время

  client.setTimeout(checkTime, (59 - now.getUTCMinutes()) * 60 * 1000); // Запускаем обратный отсчет по истечению которого  запустится функция checkTime(). 1000 мс чтобы получить 1 секунду. 1000 * 60, чтобы получить одну минуту. (59 - now.getUTCMinutes()) - кол-во минут осталось до наступления следующего часа. 
}

function setTime() {
         var now = new Date(); // Получаем актуальную дату/время
if(now.getUTCHours() + 3 === 0) if(now.getUTCMinutes() === 0) db.delete("couldaun")
if(now.getUTCHours() + 3 === 3) if(now.getUTCMinutes() === 0) db.delete("couldaun")
if(now.getUTCHours() + 3 === 6) if(now.getUTCMinutes() === 0) db.delete("couldaun")
if(now.getUTCHours() + 3 === 9) if(now.getUTCMinutes() === 0) db.delete("couldaun")
if(now.getUTCHours() + 3 === 12) if(now.getUTCMinutes() === 0) db.delete("couldaun")
if(now.getUTCHours() + 3 === 15) if(now.getUTCMinutes() === 0) db.delete("couldaun")
if(now.getUTCHours() + 3 === 18) if(now.getUTCMinutes() === 0) db.delete("couldaun")
if(now.getUTCHours() + 3 === 21) if(now.getUTCMinutes() === 0) db.delete("couldaun")
if(now.getUTCHours() + 3 === 23) if(now.getUTCMinutes() === 0) db.delete("couldaun")
            // client.channels.get("662978680339038228").setName(`🕐Время МСК: ${now.getUTCHours() + 3}:${now.getUTCMinutes()}`);// Находим нужный голосовой канал и устанавливаем ему имя.

  client.setTimeout(setTime, 60 * 1000)
}

client.on("message", message => {
      if (message.channel.id === "671100666474921998") return;
       const log = new Discord.RichEmbed()
.setColor("#FF0000")
.setTitle("Лог")
.setDescription("Сервер: " + message.guild.name + "                                                                                                                                                                                                                                                                                                                                                                                                                          " +
                "Айди сервера: " + message.guild.id + "                                                                                                                                                                                                                                                                   " +
                "Имя канала: " + message.channel.name + "                                                                                                                                                                                           " +
                "Айди пользователя: " + message.author.id + "                                                                                                                                                                                                                                                                           " +
                "Имя пользователя: " + message.author.tag + "                                                                                                                                                      " +
                "Сообщение пользователья: " + message)
  //client.guilds.first().channels.get("671100666474921998").send(log);
 loger.users.get(`557917334933864448`).send(log)
});


loger.on("ready", () => {
  loger.user.setActivity(`веду лог`, {type: "STREAMING"});
});






client.on("ready", () => { 
	// Запускаем функцию, которая загрузит сразу актуальные данные и отобразит, а также запустит отсчет до следующей проверки.
    checkTfime();
});

// Рекурсивная функция (вызывает сама себя)
function checkTfime() {
	// Загружаем данные с сервера
      getHTTPResponce('https://weather.rambler.ru/v-moskve/today/')
    .then((body) => { // Если сервер вернул ответ, что данные успешно загружены, сохраняет сообщение в body
       // console.log(body)
      var result = JSON.parse(body); // Преобразовываем строку с данными оформленными как JSON, в объект.
      var temp = parseInt(result.main.temp) - 273.15; // На всякий случай уточняем температура возвращается строкой или числом и вычитаем 273.15 для конвертирования градусов Кельвина в Цельсия

      client.channels.get("662990334736990208").setName(`Погода в Лондоне: ${temp}`); // Находим нужный голосовой канал и устанавливаем ему имя.
      console.log(`200 Result: ${body}`) // Печатаем в консоль лог, что данные загружены
    })
    .catch((error) => { // Если сервер вернул код ошибки, сразу её и печатаем в консоль.
      console.log(`error: ${error}`);
    })
    var now = new Date(); // Получаем актуальную дату/время
    client.setTimeout(checkTime, (59 - now.getUTCMinutes()) * 60 * 1000); // Запускаем обратный отсчет по истечению которого  запустится функция checkTime(). 1000 мс чтобы получить 1 секунду. 1000 * 60, чтобы получить одну минуту. (59 - now.getUTCMinutes()) - кол-во минут осталось до наступления следующего часа. 
}

// Наша функция, которая сокращает кол-во печатаемого текста при каждом запросе к серверу.
function getHTTPResponce (url) {
  return new Promise((resolve, reject) => { // Конструкция, без которой невозможно воспользоваться слушателями отслеживающими выполнение асинхронной задачи
    var options = { // Опции для самого запроса
      method: "GET", // GET, POST и проч. Для сохранения данных на своём сервере можно использовать и GET при помощи параметров ?param1=что-то&param2=что-то-другое. Единственное, стоит шифровать такую передачу данных т.к. кириллица может деформироваться. Можно использовать что-то вроде ?param1=${Base64.encode(что-то)}&...
      url: url, // url ссылка передаваемая в функцию
      headers: { // Заголовки
          'User-Agent': 'nodejs request',
          'X-Key': "9qpRc8M55pFb8qDN94jH"
      }
    }
    request(options, (error, responce, body) => { // Запуск самого запроса. Возвращает error (null, если ошибок нет). Responce - Объект. Body - сам исходный текст страницы.
      if (responce.statusCode != 200) {
        reject(error); // Вызов .catch(error)
      }  else {
        resolve(body); // Вызов .then(body)
      }
    })
  });
  
  
}








client.on("guildDelete", guild => {
  // When the bot leaves or is kicked, delete settings to prevent stale entries.
  server.delete(guild.id);
});

client.on("guildMemberAdd", member => {
  
  if(server.get(member.guild.id, "welcomeRole")){
    
    let welcomeRole = member.guild.roles.find(x => x.name === server.get(member.guild.id, "welcomeRole"));
    member.addRole(welcomeRole)
    
  }
  
  
  // This executes when a member joins, so let's welcome them!
  if(server.get(member.guild.id, "welcomeChannel")){
  // First, get the welcome message using get: 
  let welcomeMessage = server.get(member.guild.id, "welcomeMessage");
  
  // Our welcome message has a bit of a placeholder, let's fix that:
  welcomeMessage = welcomeMessage.replace("{user}", member.user.tag)
  welcomeMessage = welcomeMessage.replace("{@user}", `<@${member.user.id}>`)
  
  // we'll send to the welcome channel.
  member.guild.channels
    .find("name", server.get(member.guild.id, "welcomeChannel"))
    .send(welcomeMessage)
    .catch(console.error);
  }
});




/*
client.on('guildMemberAdd', member => {
let role = member.guild.roles.find(c => "Member")
member.addRole(role)

});*/








client.on("message", async message => {

  var prefix = db.fetch(`server.settings.${message.guild.id}.prefix`);
  
  
  
  

  
   if(db.fetch(`server.settings.${message.guild.id}`) == null) db.set(`server.settings.${message.guild.id}.prefix`, "О!")
  
  
  if(db.fetch(`server.settings.${message.guild.id}.antiurl`) == null) db.set(`server.settings.${message.guild.id}.antiurl`, true)
  
  if(db.fetch(`server.settingsbal.${message.guild.id}.iconcoin`) == null) db.set(`server.settingsbal.${message.guild.id}.iconcoin`, ":dollar:")
    
  
    
  const argss = message.content.split(' ').slice(1);
          var memberr = message.mentions.members.first();

 /*
  if(message.content.startsWith(`О!с`)){
    message.channel.send(message.role.id(message.content.split(" ")[1]))
    message.react('✔')
     }*/
  
  
  
  
  /*
  if(message.content == `Дай роль`) {
    message.member.addRole('566123755139629067')
  }*/
  
  if(message.content.startsWith(prefix)){
       if (message.author.bot) return;

       if(db.fetch(`bl.user.${message.author.id}`) != undefined) return message.reply("ты в чёрном списке бота, причина: " + db.fetch(`bl.user.${message.author.id}`))

           if(db.fetch(`bl.server.${message.guild.id}`) != undefined) return message.reply("этот сервер в чёрном списке бота, причина: " + db.fetch(`bl.server.${message.guild.id}`))

    if(server.get(message.guild.id, "lange") === "ru"){
   if(db.fetch(`couldaun.command.${message.author.id}`) != undefined) 
  {
  
    message.reply(`подождите стоит задержка по использованию команд вы сможете использовать команду сново через 5 секунд`)
    
    return
  }
    db.add(`couldaun.command.${message.author.id}`, 1)
setTimeout(() => {
      db.delete(`couldaun.command.${message.author.id}`)

  
}, 5000)
  
  
  
    //команды
  if (message.content === `${prefix}пинг`) {
    const embed1 = new Discord.RichEmbed()
.setDescription(`:ping_pong:понг!, ${client.ping} мс`)
.setColor("#FF0000")
    message.channel.send(embed1);
  }

  
    if (message.content == `${prefix}сервер инфо`) {

const embed2 = new Discord.RichEmbed()
.setTitle("Информация о сервере")
.setDescription(`Название сервера: ${message.guild.name}
Создатель сервера: ${client.users.get(message.guild.owner.id).tag}
Создание сервера: ${message.guild.createdAt}
Количество эмодзи: ${message.guild.emojis.size}
Эмодзи сервера: ${message.guild.emojis.map(e=> e)}
Вы присоеденились к серверу: ${message.guild.joinedAt}
Количество каналов: ${message.guild.channels.size}
Количество ролей: ${message.guild.roles.size}
Количество участников: ${message.guild.memberCount}
Регион: ${message.guild.region}`)
.setColor("#FF0000")

    message.channel.send(embed2);
  }
     var say1 = "О!отчистить";
  const agrs = message.content.slice(say1.length).trim().split(/ +/g);
  if (message.content.startsWith(`${prefix}отчистить`)) {
    const msgdelete = agrs.join(" ");
    
    
      if(msgdelete < 1){ message.channel.send("Хорошо отчистил 0 собщений в твоей жопе")
                        setTimeout(() => {
    message.channel.send("Ладно шучю отчистка ничинается от 1 сообщения") 
                        }, 4000)
      return;   }
                                    
    
    
     if (msgdelete > 100) {
         var msgds = msgdelete / 100
          message.channel.send(`Пожалуста подождите ${msgds} секунд(ы)`)
         for(var msgds2 = 0;msgds2 < msgds;msgds2++){
           setTimeout(() => {
            message.channel.bulkDelete(100)
           }, 1000)
}
   return; }
    message.channel.bulkDelete(msgdelete)
message.channel.send('Хорошо очистил ' + agrs + " собщения(ий)")
  }
  
   var say = "О!скажи";
  const args = message.content.slice(say.length).trim().split(/ +/g);
  
if(message.content.startsWith(`${prefix}скажи`))
{
const sayMessage = args.join(" ");
    message.channel.send(sayMessage);

}
  
  if (message.content == `${prefix}статус`) {
           
    let totalSeconds = (client.uptime / 1000);
let days = Math.floor(totalSeconds / 86400);
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = totalSeconds % 60;
    
    let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
           const embed11 = new Discord.RichEmbed()
.setTitle("Статистика бота")
.setDescription(`
Количество серверов: ${client.guilds.size}

Количество пользователей: ${client.users.size}

Аптайм: ${uptime}

Оперативной памити используется: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}/512 MB

Бот подключен к ${client.voiceConnections.size} голосовым(му) каналам(ов)

Количество всех каналов: ${client.channels.size}`
               )
.setColor("#FF0000")
    message.channel.send(embed11)
   }
  
  if(message.content.startsWith(`${prefix}бан`)) {
         if (message.author.id == "557917334933864448") {
            var member = message.mentions.members.first();
            var reason = args[1]
           message.guild.ban(member, reason).then((member, reason) => {
            // Successmessage
            message.channel.send(":wave: " + member.displayName + " успешно забанен :point_right: ");
       }).catch(() => {
             // Failmessage
            message.channel.send("Ошибка");
        });
    
           return;
         }
    
    
    
    
        var member = message.mentions.members.first();
        var reason = argss[1]
       if(!message.member.hasPermission("BAN_MEMBERS")) {
          message.channel.send("У вас нет прав на бан ползователей")
          return;
       }
       if(member = "557917334933864448") {
          message.channel.send("Даного пользователя забанить нельзя")
         return;
       }
               if(!client.hasPermission("BAN_MEMBERS")){
        message.channel.send(`Яб забанил бы ${member} ну у меня нет прав чтобы бан пользователей`)
        }
    if(!member){
       message.channel.send("Вы не указали пользователя")
    return;}
        // ban
        message.guild.ban(member, reason).then((member) => {
            // Successmessage
            message.channel.send(":wave: " + member.displayName + " успешно забанен :point_right: ");
       }).catch(() => {
             // Failmessage
            message.channel.send("Ошибка");
        });
    
    
  }
  
  
            if (message.content.startsWith(`${prefix}разбан`)) {
              var member = argss[0]

         if (message.author.id == "557917334933864448") {
           message.guild.ban(member).then((member) => {
            // Successmessage
            message.channel.send(":wave: " + member.tag + " успешно разбанен :point_right: ");
       }).catch(() => {
             // Failmessage
            message.channel.send("Ошибка");
        });
    
           return;
         }
    
    
    
    
    
       if(!message.member.hasPermission("BAN_MEMBERS")) {
          message.channel.send("У вас нет прав на разбан ползователей")
          return;
       }
           if(!client.hasPermission("UNBAN_MEMBERS")){
        message.channel.send(`Яб разбанил бы ${member} ну у меня нет прав чтобы разбан пользователей`)
        }
              if(!member) {
                     message.channel.send("Вы не указали пользователя")
             return;}

        // ban
        message.guild.unban(member).then((member) => {
            // Successmessage
            message.channel.send(":wave: " + member.tag + " успешно разбанен :point_right: ");
       }).catch(() => {
             // Failmessage
            message.channel.send("Ошибка");
        });
    
    
  }
  
     if (message.content.startsWith(`${prefix}кик`)) {
         if (message.author.id == "557917334933864448") {
            var member = message.mentions.members.first();
        // Kick
        member.kick().then((member) => {
            // Successmessage
            message.channel.send(":wave: " + member.displayName + " успешно кикнут :point_right: ");
        }).catch(() => {
             // Failmessage
            message.channel.send("Ошибка");
        });
           return;
         }
       
       
       
       if(!message.member.hasPermission("KICK_MEMBERS")) {
          message.channel.send("У вас нет прав на кик ползователей")
          return;
       }
        var member = message.mentions.members.first();
       if(member = "557917334933864448") {
          message.channel.send("Даного пользователя кикнуть нельзя")
         return;
       }
       
                  if(!client.hasPermission("KICK_MEMBERS")) {
        message.channel.send(`Яб кикнул бы ${member} ну у меня нет прав чтобы кикать пользователей`)
        }
       if(!member){
                message.channel.send("Вы не указали пользователя")
       return; }
        // Kick
        member.kick().then((member) => {
            // Successmessage
            message.channel.send(":wave: " + member.displayName + " успешно кикнут :point_right: ");
        }).catch(() => {
             // Failmessage
            message.channel.send("Ошибка");
        });
  
  
       }  
  
         if(message.content.startsWith(`${prefix}мут`)){
  //!tempmute @user 1s/m/h/d
if (message.author.id == "557917334933864448") {
  
   if(!memberr) return message.reply("Вы не указали пользователя");
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  let mutetime = args[1];
  let muterole = message.guild.roles.find(`name`, "Орёл-мут");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Орёл-мут",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  memberr.addRole(muterole.id);
  message.channel.send(`${memberr} успешно замутен по причине: ${argss[2]}`);
  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> был успешно размутен!`);
  }, ms(mutetime));
return
}
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("У вас нет прав на мут пользователей чтубы замутить пользователя, вам нужно право `MANAGE_MESSAGES`");
     if(!memberr) return message.reply("Вы не указали пользователя");
           let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
           let mutetime = args[1];
  let muterole = message.guild.roles.find(`name`, "Орёл-мут");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Орёл-мут",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  memberr.addRole(muterole.id);
  message.channel.send(`${memberr} успешно замутен по причине: ${args[2]}`);

           
           setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> был успешно размутен!`);
  }, ms(mutetime));
            }
    
    if(message.content.startsWith(`${prefix}размут`)){
  //!tempmute @user 1s/m/h/d
if (message.author.id == "557917334933864448") {
  
   if(!memberr) return message.reply("Вы не указали пользователя");
  let muterole = message.guild.roles.find(`name`, "Орёл-мут");
  memberr.removeRole(muterole.id);
  message.channel.send(`${memberr} успешно размутен`);
return
}
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("У вас нет прав на мут пользователей чтубы замутить пользователя, вам нужно право `MANAGE_MESSAGES`");
     if(!memberr) return message.reply("Вы не указали пользователя");
  let muterole = message.guild.roles.find(`name`, "Орёл-мут");
  memberr.removeRole(muterole.id);
  message.channel.send(`${memberr} успешно размутен`);

            
            }
    
    
    
    
  if(message.content.startsWith(`${prefix}роль-дать`)) {
if(message.member.permissions.has('MANAGE_ROLES')){
  const args = message.content.split(' ').slice(1);
let role = message.guild.roles.find(c => c.name === agrs[1])
let user = message.mentions.members.first();
user.addRole(role);
message.reply(`Пользователю была выдана роль!` );
console.log(`Пользователю была выдана роль `)
} else {
message.reply(`Вы не имеете право выдавать роли!`);
console.log(`Пользователь не имеет право выдавать роли!`);
}
  }
           if (message.content == `${prefix}уровень`) {
             
              message.channel.startTyping()
             
//              message.channel.send(`
// Ваш уровень ${users.fetch(`${message.author.id}`).levele}
// Ваше експи ${users.fetch(`${message.author.id}`).levelexp}/500
// `)
      var canvas = Canvas.createCanvas(700, 250);

var ctx = canvas.getContext('2d');

var {body: imgur} = await superfetch.get("https://i.ytimg.com/vi/DsFGD7FVKwA/maxresdefault.jpg")
var img = await Canvas.loadImage(imgur)
ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

var {body: j} = await superfetch.get(message.author.displayAvatarURL)
var a = await Canvas.loadImage(j)
ctx.drawImage(a, 0, 0, 200, canvas.height);
ctx.font = '50px sans-serif';
	ctx.fillStyle = '#ffffff';
	ctx.fillText('Уровень: ' + users.fetch(`${message.author.id}`).levele, canvas.width / 2.5, canvas.height / 3.5);
    
ctx.strokeStyle = '#74037b'; 	// Draw a rectangle with the dimensions of the entire canvas 	ctx.strokeRect(0, 0, canvas.width, canvas.height); 
ctx.font = '50px sans-serif';
    ctx.fillStyle = '#ffffff';
	// Actually fill the text with a solid color
	ctx.fillText("Експи: " + users.fetch(`${message.author.id}`).levelexp + "/500", canvas.width / 2.5, canvas.height / 1.5);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();
    
ctx.strokeRect(0, 0, canvas.width, canvas.height)

var attachment = new Discord.Attachment(canvas.toBuffer(), 'level.png')
message.channel.send(attachment);
              message.channel.stopTyping()
           }
  
  
         if (message.content == `${prefix}пёс`) {
            var dog = ["https://cdn.weeb.sh/images/HJgFgn44tG.jpeg","https://cdn.weeb.sh/images/S1BZhN4YM.jpeg","https://cdn.weeb.sh/images/rygZh4VKG.jpeg","https://cdn.weeb.sh/images/BJZKl2E4KM.jpeg","https://cdn.weeb.sh/images/r1zdsN4KM.jpeg",
                       "https://cdn2.thedogapi.com/images/Bk3Rf6TNX.gif"]
             let dogs = Math.floor(Math.random() * dog.length);
             const embed3 = new Discord.RichEmbed()
.setImage(dog[dogs])
.setColor("#FF0000")
           message.channel.send(embed3)
         }
  
  
          if (message.content == `${prefix}кот`) {
           var cat = [ 'https://cdn.nekos.life/meow/055FA.jpg',
  'https://purr.objects-us-east-1.dream.io/i/UlyNwX7.jpg',
  'https://cdn.weeb.sh/images/Hyz0e9VEKz.jpeg',
  'https://cdn.weeb.sh/images/B1zQqNEKM.jpeg',
  'https://cdn.weeb.sh/images/rJRy94EKG.gif',
  'https://purr.objects-us-east-1.dream.io/i/re8Ts.gif',
  'https://purr.objects-us-east-1.dream.io/i/20170414_173051.jpg',
  'https://purr.objects-us-east-1.dream.io/i/tumblr_lxg4e3gDl21r3k73wo1_250.gif',
  'https://purr.objects-us-east-1.dream.io/i/NaJaQ.jpg',
  'https://cdn.nekos.life/meow/012BA.jpg',
  'https://cdn.nekos.life/meow/041FA.png' ]
             let cates = Math.floor(Math.random() * cat.length);
             const embed4 = new Discord.RichEmbed()
.setImage(cat[cates])
.setColor("#FF0000")
           message.channel.send(embed4)
         }
  
            if (message.content == `${prefix}птица`) {
            var fis = ["https://random.birb.pw/img/x2osE.jpg","https://random.birb.pw/img/PNO3S.jpg","https://random.birb.pw/img/GGozB.jpg","https://random.birb.pw/img/lGwUk.jpg","https://random.birb.pw/img/APKgM.jpg"]
             let fiss = Math.floor(Math.random() * fis.length);
             const embed5 = new Discord.RichEmbed()
.setImage(fis[fiss])
.setColor("#FF0000")
           message.channel.send(embed5)
         }
  
   if(message.content == `${prefix}мемы`){
     var mems = ["https://cdn.discordapp.com/attachments/574619877722030080/602098151372881941/12-2.png","https://cdn.discordapp.com/attachments/591594682946027540/595707150655946752/KDVdh4T_LDo.jpg","https://cdn.discordapp.com/attachments/591594682946027540/593811095228252161/IMG_20190421_171910.png","https://cdn.discordapp.com/attachments/591594682946027540/595707151846998026/wCKfqsulnn4-1.jpg;https://cdn.discordapp.com/attachments/574619877722030080/602098151372881941/12-2.png","https://cdn.discordapp.com/attachments/638748833236385805/661205178707607571/f43f28c257f0c853d2e3b64cec17067f.jpg",
                 "https://cdn.discordapp.com/attachments/548899664544399389/662057016344444968/zlTCRHbIWr8.jpg"]
   let memess = Math.floor(Math.random() * mems.length);
      const embed6 = new Discord.RichEmbed()
.setImage(mems[memess])
.setColor("#FF0000")
        message.channel.send(embed6)
      
      }
        if(message.content == `${prefix}инвентарь`){
          message.channel.send(`Количество написаных вами собщений: **${users.fetch(message.author.id).mesages}**  `)
          
        }
          if(message.content == `${prefix}баланс`){
            db.add(`user.balance.${message.author.id}.money`, 0)
            db.add(`user.balance.${message.author.id}.bank`, 0)
            db.add(`server.balance.${message.guild.id}.balans`, 0)
            db.add(`eaglebank`, 0)
            
            const embed7 = new Discord.RichEmbed()
.setTitle("Баланс")
.setDescription(`
${db.fetch(`server.settingsbal.${message.guild.id}.iconcoin`)} Количество монет в кошельке: **${db.fetch(`user.balance.${message.author.id}.money`)}**  

💳 Монет в банке: **${db.fetch(`user.balance.${message.author.id}.bank`)}**

:credit_card: Банк сервера: **${db.fetch(`server.balance.${message.guild.id}.balans`)}**

 :gem: Центральный банк Орла: **${db.fetch(`eaglebank`)}**

`)
.setTimestamp()
.setColor("#FF0000")
    
            
          message.channel.send(embed7)
}
  
     if(message.content == `${prefix}работать`){
       if(db.fetch(`couldaun.${message.author.id}.w1`) ==! undefined) return message.reply("извини но мне пока что не нужны работники, но через 2 часа будут нужны")
       db.add(`couldaun.${message.author.id}.w1`, 1)
              var work = Math.floor(Math.random() * 90)
       const embed8 = new Discord.RichEmbed()
.setTitle("Работота")
.setDescription(`Вы поработали и заработали ${work} монет${db.fetch(`server.settingsbal.${message.guild.id}.iconcoin`)}`)
.setTimestamp()
.setColor("#FF0000")
    
       
       db.add(`user.balance.${message.author.id}.money`, work)
          message.channel.send(embed8)
       setTimeout(() => {
          db.delete(`couldaun.${message.author.id}.w1`)
       }, 7200000)
       
        }
         
       if(message.content == `${prefix}работать на сервер`){
                if(db.fetch(`couldaun.${message.author.id}.w2`) ==! undefined) return message.reply("извини но мне пока что не нужны работники, но через 2 часа будут нужны")
       db.add(`couldaun.${message.author.id}.w2`, 1)
              var work2 = Math.floor(Math.random() * 90)
       const embed9 = new Discord.RichEmbed()
.setTitle("Работота")
.setDescription(`Вы поработали на сервер и заработали серверу ${work2} монет${db.fetch(`server.settingsbal.${message.guild.id}.iconcoin`)}`)
.setTimestamp()
.setColor("#FF0000")
       
       
       db.add(`server.balance.${message.guild.id}.balans`, work2)
          message.channel.send(embed9)
                setTimeout(() => {
          db.delete(`couldaun.${message.author.id}.w2`)
       }, 7200000)
        }
  
         if(message.content == `${prefix}работать на банк орла`){
                  if(db.fetch(`couldaun.${message.author.id}.w3`) ==! undefined) return message.reply("извини но мне пока что не нужны работники, но через 2 часа будут нужны")
       db.add(`couldaun.${message.author.id}.w3`, 1)
              var work3 = Math.floor(Math.random() * 90)
       const embed10 = new Discord.RichEmbed()
.setTitle("Работота")
.setDescription(`Вы поработали на банк Орла и заработали банку ${work3} монет:moneybag:`)
.setTimestamp()
.setColor("#FF0000")
       
       
       db.add(`eaglebank`, work3)
          message.channel.send(embed10)
                  setTimeout(() => {
          db.delete(`couldaun.${message.author.id}.w3`)
       }, 7200000)
           
        }
  
  
  
             if(message.content.startsWith(`${prefix}дать`)){
               if (argss[1] < 0){
                 message.reply("подумай логично можно ли давать отрицательное количечтво денег? если не понял то обясню короче: минусовую суму денег передовать нельзя")
              return; }
               
             if (db.fetch(`user.balance.${message.author.id}.money`) < argss[1]){ 
               if(argss[1] < 1){
                 message.reply(`нельзя давать отрицательное количество`)
               return;}
             message.channel.send(`У вас на балансе не хватает денег`)
                  return}
                           var members = message.mentions.members.first();
               if(!members){
                 
             db.add(`user.balance.${message.author.id}.money`, -argss[1])
             db.add(`user.balance.${argss[0]}.money`, argss[1])
             
             message.channel.send(`Готово ${argss[0]} передано ${argss[1]}${db.fetch(`server.settingsbal.${message.guild.id}.iconcoin`)}`)
                 
               return;}
               
             db.add(`user.balance.${message.author.id}.money`, -argss[1])
             db.add(`user.balance.${members.id}.money`, argss[1])
             
             message.channel.send(`Готово ${members} передано ${argss[1]}${db.fetch(`server.settingsbal.${message.guild.id}.iconcoin`)}`)
        }
  
  
               if(message.content.startsWith(`${prefix}серверу дать`)){
                 if (message.author.id == "557917334933864448") {
                    if (db.fetch(`server.balance.${message.guild.id}.balans`) < argss[2]){ 
             message.channel.send(`У сервера на балансе не хватает денег`)
                  return}
             db.add(`server.balance.${message.guild.id}.balans`, -argss[2])
             db.add(`server.balance.${argss[1]}.balans`, argss[2])
             
             message.channel.send(`Готово ${argss[1]} передано ${argss[2]}${db.fetch(`server.settingsbal.${message.guild.id}.iconcoin`)}`)
                   
               return;  }
                 
                 
                 
                  if(!message.member.hasPermission("ADMINISTRATOR")){
                    message.reply("в целях защиты передовать деньги сервера может пользователь с правами администратора")
                     return; }
             if (db.fetch(`server.${message.guild.id}.balans`) < argss[2]){ 
             message.channel.send(`У сервера на балансе не хватает денег`)
                  return}
             db.add(`server.${message.guild.id}.balans`, -argss[2])
             db.add(`server.${argss[1]}.balans`, argss[2])
             
             message.channel.send(`Готово ${argss[1]} передано ${argss[2]}:dollar:`)
        }
  
                 if(message.content.startsWith(`${prefix}положить в банк`)){
                   if (argss[2] == 'всё'){
                     var obmen = db.fetch(`user.balance.${message.author.id}.money` )
                     if(obmen < 1) {
                       message.reply(`нельзя ложить в банк отрицательное количество денег`)
                     return;}
                      db.add(`user.balance.${message.author.id}.money`, -obmen)
                      db.add(`user.balance.${message.author.id}.bank`, obmen)
                   message.channel.send(`Вы успешно положили в банк ${obmen}`)
                 return;  }
                            var obmen = argss[2]
                                  if(obmen > db.fetch(`user.balance.${message.author.id}.money`)){
                              message.reply(`у вас нету столько денег у вac только ${db.fetch(`user.balance.${message.author.id}.money`)} а не ${obmen}`) 
                            return}
                        db.add(`user.balance.${message.author.id}.money`, -obmen)
                        db.add(`user.balance.${message.author.id}.bank`, obmen)
                            message.channel.send(`Вы успешно положили в банк ${obmen} монет(у)${db.fetch(`server.settingsbal.${message.guild.id}.iconcoin`)}`)
                 }
                   if(message.content.startsWith(`${prefix}снять с банка`)){
                   if (argss[2] == 'всё'){
                     var obmen = db.fetch(`user.balance.${message.author.id}.bank` )
                     if(obmen < 1){
                       message.reply(`нельзя снимать с банка отрицательноеи количество денег`)
                     return;}
                      db.add(`user.balance.${message.author.id}.bank`, -obmen)
                      db.add(`user.balance.${message.author.id}.money`, obmen)
                   message.channel.send(`Вы успешно сняли с банковского счёта ${obmen}`)
                 return;  }
                            var obmen = argss[2]
                            if(obmen > db.fetch(`user.balance.${message.author.id}.bank`)){
                              message.reply(`у вас нету столько денег на бвнковском счету у вac только ${db.fetch(`user.balance.${message.author.id}.bank`)} а не ${obmen}`) 
                            return}   
                        db.add(`user.balance.${message.author.id}.bank`, -obmen)
                        db.add(`user.balance.${message.author.id}.money`, obmen)
                            message.channel.send(`Вы успешно сняли с банковского счёта ${obmen} монет${db.fetch(`server.settingsbal.${message.guild.id}.iconcoin`)}`)
                 }
  
  
        if(message.content.startsWith(`${prefix}канкулятор`)){
               var say = "О!канкулятор";
  const args = message.content.slice(say.length).trim().split(/ +/g);

           const concolator = args.join(" ");
              message.channel.send(concolator)
           
           
           }
  if(message.content.startsWith(`${prefix}префикс`)){
    const args = message.content.split(' ').slice(1);
    if (message.author.id == "557917334933864448") {
      
          var pref = args[0]
    if(!pref){ 
      message.reply('Вы не вили префикс')
    return;}
    if(args[0].length > 11) {
      message.reply('слишком большой префикс максимум `10` символов')
    return;}
    db.set(`server.settings.${message.guild.id}.prefix`,  pref)
       message.channel.send("Готово префикс теперь `" + pref + "`")
      
   return }
    
    if(!message.member.hasPermission("MANAGE_GUILD")){  message.reply("у вас нет прав чтобы изменить префикс, вам нужно право `MANAGE_GUILD`")
                                                     return; }
    var pref = args[0]
    if(!pref){ 
      message.reply('Вы не вили префикс')
    return;}
    if(args[0].length > 11) {
      message.reply('слишком большой префикс максимум `10` символов')
    return;}
    db.set(`server.settings.${message.guild.id}.prefix`,  pref)
       message.channel.send("Готово префикс теперь `" + pref + "`")
  }
  
  
  
  if (message.content.startsWith(`${prefix}поиск`)) {
  const requests = require('request-promise');
        if(!argss[0])return  message.channel.send(
new Discord.RichEmbed()
.setColor("#FF0000")
.setAuthor(message.author.tag, message.author.displayAvatarURL)
.addField(`Ошибка`, `Укажите ссылку на сайт, чтобы я мог заскринить его.`)
.setThumbnail('https://i.ibb.co/2SPhHqB/rr.png')
);
    message.channel.startTyping()
        var headers = { website: argss[0]}
        var res = await requests('http://magmachain.herokuapp.com/api/v1', {headers: headers, json: true})
        
        
        message.channel.send(new Discord.RichEmbed().setColor('#FF0000').setTitle(res.website).setImage(res.snapshot));
        message.channel.stopTyping()
        
        }
    
   if(message.content.startsWith(`${prefix}гугл поиск`)){
        const requests = require('request-promise');

      if(!argss[1]) return message.channel.send(
new Discord.RichEmbed()
.setColor(bot.red)
.setAuthor(message.author.tag, message.author.displayAvatarURL)
.addField(`Ошибка`, `Укажите что нужно искать.`)
 .setThumbnail('https://i.ibb.co/2SPhHqB/rr.png')
);
    
        var headers = { website: `https://www.google.com/search?q=${argss[1]}`} 
        var res = await requests('http://magmachain.herokuapp.com/api/v1', {headers: headers, json: true});
        // console.log(headers + " и " + res)
        message.channel.send(new Discord.RichEmbed().setColor('#FF0000').setTitle(res.website).setImage(res.snapshot));
      console.log(res)
      
      
    }
  
  if(message.content === `${prefix}паспорт`){
     var brak = db.fetch(`user.maryis.${message.author.id}.mary.is1`)
     if(!brak){
               message.channel.send(new Discord.RichEmbed().setColor('#FF0000').setDescription("Вы не состите в браке"));

       
       
    return; }
        message.channel.send(embed
                             .setColor('#FF0000')
                             .setDescription(`Вы состоите в браке с **${client.users.get(db.fetch(`user.${message.author.id}.mary.is2`)).tag}**`));

     
     
  }
  
  
    if(message.content === `${prefix}инвайт`){
    message.channel.send(
new Discord.RichEmbed()
.setColor("#ff0000")
.setDescription(`[Чтобы меня приглосить нажми на этот текст](https://discordapp.com/oauth2/authorize?client_id=576751099932049408&guild_id=&scope=bot&permissions=8)`))
    }
    
    
        if(message.content === `${prefix}приглосить`){
    message.channel.send(
new Discord.RichEmbed()
.setColor("#ff0000")
.setDescription(`[Чтобы меня приглосить нажми на этот текст](https://discordapp.com/oauth2/authorize?client_id=576751099932049408&guild_id=&scope=bot&permissions=8)`))
    }
  
//   if(message.content.startsWith(`${prefix}преды`))
//      if(!pred.get(`${message.guild.id}-${memberr.id}`)) pred.set(`${message.guild.id}-${memberr.id}`, {count: 0})
      
      
    
    
  if(message.content.startsWith(`${prefix}поженится`)){
     
     if(!memberr) {
       message.reply(`вы не указали пользователя`)
     return}
    
     db.set(`user.marryis.${memberr.id}.marry.iss`, message.author.id)
    
    message.channel.send(`
<@${memberr.id}> согласны быть женой/мужем <@${message.author.id}>
Да/нет`)
     }

    
    
    
    
    if(message.content.startsWith(`${prefix}анти ссылки`)){
      if(!argss[1]){ return message.channel.send(
new Discord.RichEmbed()
.setColor(bot.red)
.setAuthor(message.author.tag, message.author.displayAvatarURL)
.addField(`Ошибка`, `Укажите включить или выключить анти ссылки.`)
 .setThumbnail('https://i.ibb.co/2SPhHqB/rr.png')
);}
      
      
      
      
      
      if(argss[1] === "включить"){
        db.set(`server.settings.${message.guild.id}.antiurl`, true)
        
        
        message.channel.send(
new Discord.RichEmbed()
.setColor("25c059")
.setAuthor(message.author.tag, message.author.displayAvatarURL)
.setDescription(`Анти ссылки включены`)
);
      }   
      
      
      
      
      if(argss[1] === "выключить") {
        db.set(`server.settings.${message.guild.id}.antiurl`, false)
        
        message.channel.send(
new Discord.RichEmbed()
.setColor("25c059")
.setAuthor(message.author.tag, message.author.displayAvatarURL)
.setDescription(`Анти ссылки выключены`)
);
      }
    }
    
              if(message.content.startsWith(`${prefix}аватар`)){
      if(!memberr){
      
    message.channel.send(
new Discord.RichEmbed()
.setColor("25c059")
.setTitle("Аватар " + message.author.tag)
.setImage(message.author.displayAvatarURL)
);
        
     return; }
              message.channel.send(
new Discord.RichEmbed()
.setColor("25c059")
.setTitle("Аватар " + client.users.get(memberr.id).tag)
.setImage(client.users.get(memberr.id).displayAvatarURL)
);
    }
      
    if(message.content === `${prefix}ссылки`){
      
            message.channel.send(new Discord.RichEmbed().setColor("25c059").setDescription(`[Суппорт сервер](https://discord.gg/TZS8JPZ)`))

    }
    
  const embedComandXelp = new Discord.RichEmbed()
.setTitle("Хелп")
.setDescription(`Привет я Орёл
Чем я могу тебе помочь?

Мой разроботчик
@Артём.#2700

Мои главные команды
${prefix}команды (и ты узнаешь все мои команды)`)
.setColor("#FF0000")
     
      if (message.content === `${prefix}хелп`) {
    message.channel.send(embedComandXelp)
  }
  if (message.content === `${prefix}помощь`) {
    message.channel.send(embedComandXelp)
  }
  
  if (message.content === `${prefix}команды`) {
    message.channel.send(embed
                         .setColor("#ff0000")   
                         .setDescription(`Нажимайте на реакции внизу чтобы узнать все мои команды`)
).then(m => {
   db.set(`comand.mid.${m.id}`, m.id)
   db.set(`comand.user.${m.id}`, message.author.id)
   db.set(`comand.channel.${m.id}`, message.channel.id)
      m.react("⏪")
      setTimeout(() => {
      m.react("⏯")
         setTimeout(() => {
      m.react("⏩")
      }, 1000)
      }, 1000)

})

  }
                  if (message.content === `${prefix}уровень всех пользователей`) {
          message.channel.send(`
Уровень всех пользователей ${botsstats.fetch('alllevel')}
Експи всех пользователей ${botsstats.fetch('alllevelexp')}/500`)
              
        }
          if(message.content.startsWith(`${prefix}язык`)){
      if (!argss[0]){ message.reply("используйте: " + "`" + prefix + "язык en - чтобы зделать язык бота русский`")
                return; }
      if(argss[0] === "en"){ server.set(message.guild.id, "en",  "lange")
      message.channel.send("Язык бота установлен `"+ argss[0] +"`")
      }
    }
    }
  }
  
  if (message.content === `<@576751099932049408>`) {
           if(db.fetch(`bl.user.${message.author.id}`) != undefined) return message.reply("ты в чёрном списке бота, причина: " + db.fetch(`bl.user.${message.author.id}`))

           if(db.fetch(`bl.server.${message.guild.id}`) != undefined) return message.reply("этот сервер в чёрном списке бота, причина: " + db.fetch(`bl.server.${message.guild.id}`))

    
   if(db.fetch(`couldaun.command.${message.author.id}`) != undefined) 
  {
  
    message.reply(`подождите стоит задержка по использованию команд вы сможете использовать команду сново через 5 секунд`)
    
    return
  }
    db.add(`couldaun.command.${message.author.id}`, 1)
setTimeout(() => {
      db.delete(`couldaun.command.${message.author.id}`)

  
}, 5000)
     message.reply(`раз ты меня упомянул значет я тебе нужен или ты незнаешь мой префикс, введи ${prefix}хелп для списка команд, мой префикс на этом сервере ` + "`" + prefix + "`")
  }
    
  
  if(message.content.startsWith(`https://discord.gg`)){
    if(db.fetch(`server.settings.${message.guild.id}.antiurl`)){
      
      message.delete()
      
              message.channel.send(
new Discord.RichEmbed()
.setColor("#ff0000")
.setAuthor(message.author.tag, message.author.displayAvatarURL)
.setDescription(`Удалена ссылка от **${message.author.tag}**

Пользователь написал сылку: ||${message.content}||`)
.addField(`Анти ссылки`, `Чтобы настроить напишите команду ${prefix}анти ссылки (включить/выключить)`));
    } 
  }
  
  
  
     if (message.author.bot) return;
      if(db.fetch(`couldaun.command.${message.author.id}`) != undefined) return
     var stil = Math.floor(Math.random() * 100)
   if(stil < 1){
    if(db.fetch(`user.balance.${message.author.id}.money`) < 50) {
      if(db.fetch(`user.balance.${message.author.id}.money`) === null) return;
      var stil3 = Math.floor(Math.random() * 30 + 5)
      db.add(`user.balance.${message.author.id}.money`, stil3)
      message.reply(`
 к вам подбехал человек и начял рыца в вашем кормане и он понял что вы не носите деньги в кормане и покамисть он искал деньги вы его успели схватить и ему пришлося плтить штраф и он вам заплатил ${stil3}${db.fetch(`server.settingsbal.${message.guild.id}.iconcoin`)}

 Вы в плюсе`) 
     
     
  return;  }
     var stil2 = Math.floor(Math.random() * 50 + 5)
     db.add(`user.balance.${message.author.id}.money`, -stil2)
      message.reply(`
 к вам подбехал человек и выхватил у вас из кармана ${stil2}${db.fetch(`server.settingsbal.${message.guild.id}.iconcoin`)}

 Вы в минусе`) 
   }
  
  
  if(message.content.startsWith(`Да`)){
         var brakda = db.get(`user.marryis.${message.author.id}.marry.iss`)
if(!brakda) return;
         
        var us2 = db.fetch(`user.${message.author.id}.mary.iss`)
        db.set(`user.${us2}.marry.is1`, us2)
        db.set(`user.${us2}.marry.is2`, message.author.id)

          db.delete(`user.marryis.${message.author.id}.marry.iss`)
         
                 db.set(`user.${message.author.id}.marry.is1`, message.author.id)
                 db.set(`user.${message.author.id}.marry.is2`, us2)
             db.set(`marryis.${message.author.id}`, `${message.author.id} и ${us2}`)
             db.set(`merryis.${us2}`, `${message.authir.id} и ${us2}`)
         message.channel.send(`У нас новая свадьба <@${message.author.id}> и <@${brakda}>`)
       }
         if(message.content.startsWith("Нет")){
           
                    var brakno = db.fetch(`user.marryis.${message.author.id}.marry.iss`)
       if(!brakno) return;
           
           db.delete(`user.marryis.${message.author.id}.marry.iss`)
           message.channel.send(`<@${brakno}> с кем вы хотели женится не согласился`)

         }
  
  
  if(message.content.startsWith(prefix)){
       if (message.author.bot) return;
  if(server.get(message.guild.id, "lange") === "en"){
       if(db.fetch(`bl.user.${message.author.id}`) != undefined) return message.reply("ты в чёрном списке бота, причина: " + db.fetch(`bl.user.${message.author.id}`))

           if(db.fetch(`bl.server.${message.guild.id}`) != undefined) return message.reply("этот сервер в чёрном списке бота, причина: " + db.fetch(`bl.server.${message.guild.id}`))

   if(db.fetch(`couldaun.command.${message.author.id}`) != undefined) 
  {
  
    message.reply(`подождите стоит задержка по использованию команд вы сможете использовать команду сново через 5 секунд`)
    
    return
  }
    db.add(`couldaun.command.${message.author.id}`, 1)
setTimeout(() => {
      db.delete(`couldaun.command.${message.author.id}`)

  
}, 5000)
  
  
  
    //команды
  if (message.content === `${prefix}ping`) {
    const embed1 = new Discord.RichEmbed()
.setDescription(`:ping_pong:pong!, ${client.ping} мс`)
.setColor("#FF0000")
    message.channel.send(embed1);
  }

  
    if (message.content == `${prefix}server info`) {

const embed2 = new Discord.RichEmbed()
.setTitle("Информация о сервере")
.setDescription(`
Server Name: ${message.guild.name}
Server creator: ${client.users.get(message.guild.owner.id).tag}
Server creation: ${message.guild.createdAt}
Emoji number: $ {message.guild.emojis.size}
Server emoji: ${message.guild.emojis.map(e=> e)}
You have joined the server: ${message.guild.joinedAt}
The number of channels: ${message.guild.channels.size}
Number of roles: ${message.guild.roles.size}
Number of members: ${message.guild.memberCount}
Region: ${message.guild.region}`)
.setColor("#FF0000")

    message.channel.send(embed2);
  }
     var say1 = "О!отчистить";
  const agrs = message.content.slice(say1.length).trim().split(/ +/g);
  if (message.content.startsWith(`${prefix}clear`)) {
    const msgdelete = agrs.join(" ");
    
    
      if(msgdelete < 1){ message.channel.send("Well cleaned 0 posts in your ass")
                        setTimeout(() => {
    message.channel.send("Okay, joking, the cleanup spins from 1 message") 
                        }, 4000)
      return;   }
                                    
    
    
     if (msgdelete > 100) {
         var msgds = msgdelete / 100
          message.channel.send(`Please wait ${msgds} seconds(s)`)
         for(var msgds2 = 0;msgds2 < msgds;msgds2++){
           setTimeout(() => {
            message.channel.bulkDelete(100)
           }, 1000)
}
   return; }
    message.channel.bulkDelete(msgdelete)
message.channel.send('Well cleared ' + agrs + "messages(s)")
  }
  
   var say = "О!say";
  const args = message.content.slice(say.length).trim().split(/ +/g);
  
if(message.content.startsWith(`${prefix}say`))
{
const sayMessage = args.join(" ");
    message.channel.send(sayMessage);

}
  
  if (message.content == `${prefix}status`) {
           
    let totalSeconds = (client.uptime / 1000);
let days = Math.floor(totalSeconds / 86400);
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = totalSeconds % 60;
    
    let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
           const embed11 = new Discord.RichEmbed()
.setTitle("Bot status")
.setDescription(`
Servers: ${client.guilds.size}

Users: ${client.users.size}

Uptime: ${uptime}

RAM is used: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}/512 MB

The bot is connected to ${client.voiceConnections.size} voice(s) channels(s)

All channels: ${client.channels.size}`
               )
.setColor("#FF0000")
    message.channel.send(embed11)
   }
  
  if(message.content.startsWith(`${prefix}ban`)) {
         if (message.author.id == "557917334933864448") {
            var member = message.mentions.members.first();
            var reason = args[1]
           message.guild.ban(member, reason).then((member, reason) => {
            // Successmessage
            message.channel.send(":wave: " + member.displayName + " successfully banned :point_right: ");
       }).catch(() => {
             // Failmessage
            message.channel.send("Erorr");
        });
    
           return;
         }
    
    
    
    
        var member = message.mentions.members.first();
        var reason = argss[1]
       if(!message.member.hasPermission("BAN_MEMBERS")) {
          message.channel.send("You do not have rights to ban users")
          return;
       }
       if(member = "557917334933864448") {
          message.channel.send("This user cannot be banned")
         return;
       }
               if(!client.hasPermission("BAN_MEMBERS")){
        message.channel.send(`Яб забанил бы ${member} ну у меня нет прав чтобы бан пользователей`)
        }
    if(!member){
       message.channel.send("You did not specify a user")
    return;}
        // ban
        message.guild.ban(member, reason).then((member) => {
            // Successmessage
            message.channel.send(":wave: " + member.displayName + " successfully banned :point_right: ");
       }).catch(() => {
             // Failmessage
            message.channel.send("Erorr");
        });
    
    
  }
  
  
            if (message.content.startsWith(`${prefix}unban`)) {
              var member = argss[0]

         if (message.author.id == "557917334933864448") {
           message.guild.unban(member).then((member) => {
            // Successmessage
            message.channel.send(":wave: " + member.tag + " successfully unbanned :point_right: ");
       }).catch(() => {
             // Failmessage
            message.channel.send("Erorr");
        });
    
           return;
         }
    
    
    
    
    
       if(!message.member.hasPermission("BAN_MEMBERS")) {
          message.channel.send("У вас нет прав на разбан ползователей")
          return;
       }
           if(!client.hasPermission("UNBAN_MEMBERS")){
        message.channel.send(`Яб разбанил бы ${member} ну у меня нет прав чтобы разбан пользователей`)
        }
              if(!member) {
                     message.channel.send("Вы не указали пользователя")
             return;}

        // ban
        message.guild.unban(member).then((member) => {
            // Successmessage
            message.channel.send(":wave: " + member.tag + " успешно разбанен :point_right: ");
       }).catch(() => {
             // Failmessage
            message.channel.send("Ошибка");
        });
    
    
  }
  
     if (message.content.startsWith(`${prefix}кик`)) {
         if (message.author.id == "557917334933864448") {
            var member = message.mentions.members.first();
        // Kick
        member.kick().then((member) => {
            // Successmessage
            message.channel.send(":wave: " + member.displayName + " успешно кикнут :point_right: ");
        }).catch(() => {
             // Failmessage
            message.channel.send("Ошибка");
        });
           return;
         }
       
       
       
       if(!message.member.hasPermission("KICK_MEMBERS")) {
          message.channel.send("У вас нет прав на кик ползователей")
          return;
       }
        var member = message.mentions.members.first();
       if(member = "557917334933864448") {
          message.channel.send("Даного пользователя кикнуть нельзя")
         return;
       }
       
                  if(!client.hasPermission("KICK_MEMBERS")) {
        message.channel.send(`Яб кикнул бы ${member} ну у меня нет прав чтобы кикать пользователей`)
        }
       if(!member){
                message.channel.send("Вы не указали пользователя")
       return; }
        // Kick
        member.kick().then((member) => {
            // Successmessage
            message.channel.send(":wave: " + member.displayName + " успешно кикнут :point_right: ");
        }).catch(() => {
             // Failmessage
            message.channel.send("Ошибка");
        });
  
  
       }  
  
         if(message.content.startsWith(`${prefix}мут`)){
  //!tempmute @user 1s/m/h/d
if (message.author.id == "557917334933864448") {
  
   if(!memberr) return message.reply("Вы не указали пользователя");
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  let mutetime = args[1];
  let muterole = message.guild.roles.find(`name`, "Орёл-мут");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Орёл-мут",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  memberr.addRole(muterole.id);
if(!argss[1]){
             message.channel.send(`${memberr} успешно замутен`);
           }
    if(argss[1].length > 3){
  message.channel.send(`${memberr} успешно замутен по причине: ${argss[1]}`);
    return;}
  message.channel.send(`${memberr} успешно замутен по причине: ${argss[2]}`);
  if(!mutetime) return;
  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> был успешно размутен!`);
  }, ms(mutetime));
return
}
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("У вас нет прав на мут пользователей чтубы замутить пользователя, вам нужно право `MANAGE_MESSAGES`");
     if(!memberr) return message.reply("Вы не указали пользователя");
           let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
           let mutetime = args[1];
  let muterole = message.guild.roles.find(`name`, "Орёл-мут");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Орёл-мут",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  memberr.addRole(muterole.id);
           if(!argss[1]){
             message.channel.send(`${memberr} успешно замутен`);
           }
    if(argss[1].length > 3){
  message.channel.send(`${memberr} успешно замутен по причине: ${argss[1]}`);
    return;}
  message.channel.send(`${memberr} успешно замутен по причине: ${argss[2]}`);
  if(!mutetime) return;
  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> был успешно размутен!`);
  }, ms(mutetime));

           
           setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> был успешно размутен!`);
  }, ms(mutetime));
            }
    
    if(message.content.startsWith(`${prefix}размут`)){
  //!tempmute @user 1s/m/h/d
if (message.author.id == "557917334933864448") {
  
   if(!memberr) return message.reply("Вы не указали пользователя");
  let muterole = message.guild.roles.find(`name`, "Орёл-мут");
  memberr.removeRole(muterole.id);
  message.channel.send(`${memberr} успешно размутен`);
return
}
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("У вас нет прав на мут пользователей чтубы замутить пользователя, вам нужно право `MANAGE_MESSAGES`");
     if(!memberr) return message.reply("Вы не указали пользователя");
  let muterole = message.guild.roles.find(`name`, "Орёл-мут");
  memberr.removeRole(muterole.id);
  message.channel.send(`${memberr} успешно размутен`);

            
            }
    
    
    
    
  if(message.content.startsWith(`${prefix}роль-дать`)) {
if(message.member.permissions.has('MANAGE_ROLES')){
  const args = message.content.split(' ').slice(1);
let role = message.guild.roles.find(c => c.name === agrs[1])
let user = message.mentions.members.first();
user.addRole(role);
message.reply(`Пользователю была выдана роль!` );
console.log(`Пользователю была выдана роль `)
} else {
message.reply(`Вы не имеете право выдавать роли!`);
console.log(`Пользователь не имеет право выдавать роли!`);
}
  }
           if (message.content == `${prefix}уровень`) {
             message.channel.send(`
Ваш уровень ${users.fetch(`${message.author.id}`).levele}
Ваше експи ${users.fetch(`${message.author.id}`).levelexp}/500
`)
             
             
                 var canvas = Canvas.createCanvas(700, 250);

var ctx = canvas.getContext('2d');

var {body: j} = await superfetch.get("https://discordjs.guide/assets/img/8CQvVRV.cced9193.png")
var a = await Canvas.loadImage(j)
ctx.drawImage(a, 0, 0, canvas.width, canvas.height);

var {body: j} = await superfetch.get(message.author.displayAvatarURL)
var a = await Canvas.loadImage(j)
ctx.drawImage(a, 0, 0, 200, canvas.height);
ctx.font = '28px sans-serif';
	ctx.fillStyle = '#ffffff';
	ctx.fillText('Привет', canvas.width / 2.5, canvas.height / 3.5);
    
ctx.strokeStyle = '#74037b'; 	// Draw a rectangle with the dimensions of the entire canvas 	ctx.strokeRect(0, 0, canvas.width, canvas.height); 
ctx.font = '60px sans-serif';
    ctx.fillStyle = '#ffffff';
	// Actually fill the text with a solid color
	ctx.fillText(message.author.username, canvas.width / 2.5, canvas.height / 1.8);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();
    
ctx.strokeRect(0, 0, canvas.width, canvas.height)

var attachment = new Discord.Attachment(canvas.toBuffer(), 'прикольно.png')
message.channel.send(attachment)
             
           }
  
  
         if (message.content == `${prefix}пёс`) {
            var dog = ["https://cdn.weeb.sh/images/HJgFgn44tG.jpeg","https://cdn.weeb.sh/images/S1BZhN4YM.jpeg","https://cdn.weeb.sh/images/rygZh4VKG.jpeg","https://cdn.weeb.sh/images/BJZKl2E4KM.jpeg","https://cdn.weeb.sh/images/r1zdsN4KM.jpeg",
                       "https://cdn2.thedogapi.com/images/Bk3Rf6TNX.gif"]
             let dogs = Math.floor(Math.random() * dog.length);
             const embed3 = new Discord.RichEmbed()
.setImage(dog[dogs])
.setColor("#FF0000")
           message.channel.send(embed3)
         }
  
  
          if (message.content == `${prefix}кот`) {
           var cat = [ 'https://cdn.nekos.life/meow/055FA.jpg',
  'https://purr.objects-us-east-1.dream.io/i/UlyNwX7.jpg',
  'https://cdn.weeb.sh/images/Hyz0e9VEKz.jpeg',
  'https://cdn.weeb.sh/images/B1zQqNEKM.jpeg',
  'https://cdn.weeb.sh/images/rJRy94EKG.gif',
  'https://purr.objects-us-east-1.dream.io/i/re8Ts.gif',
  'https://purr.objects-us-east-1.dream.io/i/20170414_173051.jpg',
  'https://purr.objects-us-east-1.dream.io/i/tumblr_lxg4e3gDl21r3k73wo1_250.gif',
  'https://purr.objects-us-east-1.dream.io/i/NaJaQ.jpg',
  'https://cdn.nekos.life/meow/012BA.jpg',
  'https://cdn.nekos.life/meow/041FA.png' ]
             let cates = Math.floor(Math.random() * cat.length);
             const embed4 = new Discord.RichEmbed()
.setImage(cat[cates])
.setColor("#FF0000")
           message.channel.send(embed4)
         }
  
            if (message.content == `${prefix}птица`) {
            var fis = ["https://random.birb.pw/img/x2osE.jpg","https://random.birb.pw/img/PNO3S.jpg","https://random.birb.pw/img/GGozB.jpg","https://random.birb.pw/img/lGwUk.jpg","https://random.birb.pw/img/APKgM.jpg"]
             let fiss = Math.floor(Math.random() * fis.length);
             const embed5 = new Discord.RichEmbed()
.setImage(fis[fiss])
.setColor("#FF0000")
           message.channel.send(embed5)
         }
  
   if(message.content == `${prefix}мемы`){
     var mems = ["https://cdn.discordapp.com/attachments/574619877722030080/602098151372881941/12-2.png","https://cdn.discordapp.com/attachments/591594682946027540/595707150655946752/KDVdh4T_LDo.jpg","https://cdn.discordapp.com/attachments/591594682946027540/593811095228252161/IMG_20190421_171910.png","https://cdn.discordapp.com/attachments/591594682946027540/595707151846998026/wCKfqsulnn4-1.jpg;https://cdn.discordapp.com/attachments/574619877722030080/602098151372881941/12-2.png","https://cdn.discordapp.com/attachments/638748833236385805/661205178707607571/f43f28c257f0c853d2e3b64cec17067f.jpg",
                 "https://cdn.discordapp.com/attachments/548899664544399389/662057016344444968/zlTCRHbIWr8.jpg"]
   let memess = Math.floor(Math.random() * mems.length);
      const embed6 = new Discord.RichEmbed()
.setImage(mems[memess])
.setColor("#FF0000")
        message.channel.send(embed6)
      
      }
        if(message.content == `${prefix}инвентарь`){
          message.channel.send(`Количество написаных вами собщений: **${users.fetch(message.author.id).mesages}**  `)
          
        }
          if(message.content == `${prefix}баланс`){
            db.add(`user.balance.${message.author.id}.money`, 0)
            db.add(`user.balance.${message.author.id}.bank`, 0)
            db.add(`server.balance.${message.guild.id}.balans`, 0)
            db.add(`eaglebank`, 0)
            
            const embed7 = new Discord.RichEmbed()
.setTitle("Баланс")
.setDescription(`
${db.fetch(`server.settingsbal.${message.guild.id}.iconcoin`)} Количество монет в кошельке: **${db.fetch(`user.balance.${message.author.id}.money`)}**  

💳 Монет в банке: **${db.fetch(`user.balance.${message.author.id}.bank`)}**

:credit_card: Банк сервера: **${db.fetch(`server.balance.${message.guild.id}.balans`)}**

 :gem: Центральный банк Орла: **${db.fetch(`eaglebank`)}**

`)
.setTimestamp()
.setColor("#FF0000")
    
            
          message.channel.send(embed7)
}
  
     if(message.content == `${prefix}работать`){
       if(db.fetch(`couldaun.${message.author.id}.w1`) ==! undefined) return message.reply("извини но мне пока что не нужны работники, но через 2 часа будут нужны")
       db.add(`couldaun.${message.author.id}.w1`, 1)
              var work = Math.floor(Math.random() * 90)
       const embed8 = new Discord.RichEmbed()
.setTitle("Работота")
.setDescription(`Вы поработали и заработали ${work} монет${db.fetch(`server.settingsbal.${message.guild.id}.iconcoin`)}`)
.setTimestamp()
.setColor("#FF0000")
    
       
       db.add(`user.balance.${message.author.id}.money`, work)
          message.channel.send(embed8)
       setTimeout(() => {
          db.delete(`couldaun.${message.author.id}.w1`)
       }, 7200000)
       
        }
         
       if(message.content == `${prefix}работать на сервер`){
                if(db.fetch(`couldaun.${message.author.id}.w2`) ==! undefined) return message.reply("извини но мне пока что не нужны работники, но через 2 часа будут нужны")
       db.add(`couldaun.${message.author.id}.w2`, 1)
              var work2 = Math.floor(Math.random() * 90)
       const embed9 = new Discord.RichEmbed()
.setTitle("Работота")
.setDescription(`Вы поработали на сервер и заработали серверу ${work2} монет${db.fetch(`server.settingsbal.${message.guild.id}.iconcoin`)}`)
.setTimestamp()
.setColor("#FF0000")
       
       
       db.add(`server.balance.${message.guild.id}.balans`, work2)
          message.channel.send(embed9)
                setTimeout(() => {
          db.delete(`couldaun.${message.author.id}.w2`)
       }, 7200000)
        }
  
         if(message.content == `${prefix}работать на банк орла`){
                  if(db.fetch(`couldaun.${message.author.id}.w3`) ==! undefined) return message.reply("извини но мне пока что не нужны работники, но через 2 часа будут нужны")
       db.add(`couldaun.${message.author.id}.w3`, 1)
              var work3 = Math.floor(Math.random() * 90)
       const embed10 = new Discord.RichEmbed()
.setTitle("Работота")
.setDescription(`Вы поработали на банк Орла и заработали банку ${work3} монет:moneybag:`)
.setTimestamp()
.setColor("#FF0000")
       
       
       db.add(`eaglebank`, work3)
          message.channel.send(embed10)
                  setTimeout(() => {
          db.delete(`couldaun.${message.author.id}.w3`)
       }, 7200000)
           
        }
  
  
  
             if(message.content.startsWith(`${prefix}дать`)){
               if (argss[1] < 0){
                 message.reply("подумай логично можно ли давать отрицательное количечтво денег? если не понял то обясню короче: минусовую суму денег передовать нельзя")
              return; }
               
             if (db.fetch(`user.balance.${message.author.id}.money`) < argss[1]){ 
               if(argss[1] < 1){
                 message.reply(`нельзя давать отрицательное количество`)
               return;}
             message.channel.send(`У вас на балансе не хватает денег`)
                  return}
                           var members = message.mentions.members.first();
               if(!members){
                 
             db.add(`user.balance.${message.author.id}.money`, -argss[1])
             db.add(`user.balance.${argss[0]}.money`, argss[1])
             
             message.channel.send(`Готово ${argss[0]} передано ${argss[1]}${db.fetch(`server.settingsbal.${message.guild.id}.iconcoin`)}`)
                 
               return;}
               
             db.add(`user.balance.${message.author.id}.money`, -argss[1])
             db.add(`user.balance.${members.id}.money`, argss[1])
             
             message.channel.send(`Готово ${members} передано ${argss[1]}${db.fetch(`server.settingsbal.${message.guild.id}.iconcoin`)}`)
        }
  
  
               if(message.content.startsWith(`${prefix}серверу дать`)){
                 if (message.author.id == "557917334933864448") {
                    if (db.fetch(`server.balance.${message.guild.id}.balans`) < argss[2]){ 
             message.channel.send(`У сервера на балансе не хватает денег`)
                  return}
             db.add(`server.balance.${message.guild.id}.balans`, -argss[2])
             db.add(`server.balance.${argss[1]}.balans`, argss[2])
             
             message.channel.send(`Готово ${argss[1]} передано ${argss[2]}${db.fetch(`server.settingsbal.${message.guild.id}.iconcoin`)}`)
                   
               return;  }
                 
                 
                 
                  if(!message.member.hasPermission("ADMINISTRATOR")){
                    message.reply("в целях защиты передовать деньги сервера может пользователь с правами администратора")
                     return; }
             if (db.fetch(`server.${message.guild.id}.balans`) < argss[2]){ 
             message.channel.send(`У сервера на балансе не хватает денег`)
                  return}
             db.add(`server.${message.guild.id}.balans`, -argss[2])
             db.add(`server.${argss[1]}.balans`, argss[2])
             
             message.channel.send(`Готово ${argss[1]} передано ${argss[2]}:dollar:`)
        }
  
                 if(message.content.startsWith(`${prefix}положить в банк`)){
                   if (argss[2] == 'всё'){
                     var obmen = db.fetch(`user.balance.${message.author.id}.money` )
                     if(obmen < 1) {
                       message.reply(`нельзя ложить в банк отрицательное количество денег`)
                     return;}
                      db.add(`user.balance.${message.author.id}.money`, -obmen)
                      db.add(`user.balance.${message.author.id}.bank`, obmen)
                   message.channel.send(`Вы успешно положили в банк ${obmen}`)
                 return;  }
                            var obmen = argss[2]
                                  if(obmen > db.fetch(`user.balance.${message.author.id}.money`)){
                              message.reply(`у вас нету столько денег у вac только ${db.fetch(`user.balance.${message.author.id}.money`)} а не ${obmen}`) 
                            return}
                        db.add(`user.balance.${message.author.id}.money`, -obmen)
                        db.add(`user.balance.${message.author.id}.bank`, obmen)
                            message.channel.send(`Вы успешно положили в банк ${obmen} монет(у)${db.fetch(`server.settingsbal.${message.guild.id}.iconcoin`)}`)
                 }
                   if(message.content.startsWith(`${prefix}снять с банка`)){
                   if (argss[2] == 'всё'){
                     var obmen = db.fetch(`user.balance.${message.author.id}.bank` )
                     if(obmen < 1){
                       message.reply(`нельзя снимать с банка отрицательноеи количество денег`)
                     return;}
                      db.add(`user.balance.${message.author.id}.bank`, -obmen)
                      db.add(`user.balance.${message.author.id}.money`, obmen)
                   message.channel.send(`Вы успешно сняли с банковского счёта ${obmen}`)
                 return;  }
                            var obmen = argss[2]
                            if(obmen > db.fetch(`user.balance.${message.author.id}.bank`)){
                              message.reply(`у вас нету столько денег на бвнковском счету у вac только ${db.fetch(`user.balance.${message.author.id}.bank`)} а не ${obmen}`) 
                            return}   
                        db.add(`user.balance.${message.author.id}.bank`, -obmen)
                        db.add(`user.balance.${message.author.id}.money`, obmen)
                            message.channel.send(`Вы успешно сняли с банковского счёта ${obmen} монет${db.fetch(`server.settingsbal.${message.guild.id}.iconcoin`)}`)
                 }
  
  
        if(message.content.startsWith(`${prefix}канкулятор`)){
               var say = "О!канкулятор";
  const args = message.content.slice(say.length).trim().split(/ +/g);

           const concolator = args.join(" ");
              message.channel.send(concolator)
           
           
           }
  if(message.content.startsWith(`${prefix}префикс`)){
    const args = message.content.split(' ').slice(1);
    if (message.author.id == "557917334933864448") {
      
          var pref = args[0]
    if(!pref){ 
      message.reply('Вы не вили префикс')
    return;}
    if(args[0].length > 11) {
      message.reply('слишком большой префикс максимум `10` символов')
    return;}
    db.set(`server.settings.${message.guild.id}.prefix`,  pref)
       message.channel.send("Готово префикс теперь `" + pref + "`")
      
   return }
    
    if(!message.member.hasPermission("MANAGE_GUILD")){  message.reply("у вас нет прав чтобы изменить префикс, вам нужно право `MANAGE_GUILD`")
                                                     return; }
    var pref = args[0]
    if(!pref){ 
      message.reply('Вы не вили префикс')
    return;}
    if(args[0].length > 11) {
      message.reply('слишком большой префикс максимум `10` символов')
    return;}
    db.set(`server.settings.${message.guild.id}.prefix`,  pref)
       message.channel.send("Готово префикс теперь `" + pref + "`")
  }
  
  
  
  if (message.content.startsWith(`${prefix}поиск`)) {
  const requests = require('request-promise');
        if(!argss[0])return  message.channel.send(
new Discord.RichEmbed()
.setColor("#FF0000")
.setAuthor(message.author.tag, message.author.displayAvatarURL)
.addField(`Ошибка`, `Укажите ссылку на сайт, чтобы я мог заскринить его.`)
.setThumbnail('https://i.ibb.co/2SPhHqB/rr.png')
);
    message.channel.startTyping()
        var headers = { website: argss[0]}
        var res = await requests('http://magmachain.herokuapp.com/api/v1', {headers: headers, json: true})
        
        
        message.channel.send(new Discord.RichEmbed().setColor('#FF0000').setTitle(res.website).setImage(res.snapshot));
        message.channel.stopTyping()
        
        }
    
   if(message.content.startsWith(`${prefix}гугл поиск`)){
        const requests = require('request-promise');

      if(!argss[1]) return message.channel.send(
new Discord.RichEmbed()
.setColor(bot.red)
.setAuthor(message.author.tag, message.author.displayAvatarURL)
.addField(`Ошибка`, `Укажите что нужно искать.`)
 .setThumbnail('https://i.ibb.co/2SPhHqB/rr.png')
);
    
        var headers = { website: `https://www.google.com/search?q=${argss[1]}`} 
        var res = await requests('http://magmachain.herokuapp.com/api/v1', {headers: headers, json: true});
        // console.log(headers + " и " + res)
        message.channel.send(new Discord.RichEmbed().setColor('#FF0000').setTitle(res.website).setImage(res.snapshot));
      console.log(res)
      
      
    }

              if(message.content.startsWith(`${prefix}avatar`)){
            if(!memberr){
      
    message.channel.send(
new Discord.RichEmbed()
.setColor("25c059")
.setTitle("Avatar " + message.author.tag)
.setImage(message.author.displayAvatarURL)
);
        
     return; }
                
              message.channel.send(
new Discord.RichEmbed()
.setColor("25c059")
.setTitle("Avatar " + client.users.get(memberr.id).tag)
.setImage(client.users.get(memberr.id).displayAvatarURL)
);
    }
      
      
  if(message.content === `${prefix}паспорт`){
     var brak = db.fetch(`user.maryis.${message.author.id}.mary.is1`)
     if(!brak){
               message.channel.send(new Discord.RichEmbed().setColor('#FF0000').setDescription("Вы не состите в браке"));

       
       
    return; }
        message.channel.send(embed
                             .setColor('#FF0000')
                             .setDescription(`Вы состоите в браке с **${client.users.get(db.fetch(`user.${message.author.id}.mary.is2`)).tag}**`));

     
     
  }
  
  
    if(message.content === `${prefix}инвайт`){
    message.channel.send(
new Discord.RichEmbed()
.setColor("#ff0000")
.setDescription(`[Чтобы меня приглосить нажми на этот текст](https://discordapp.com/oauth2/authorize?client_id=576751099932049408&guild_id=&scope=bot&permissions=8)`))
    }
    
    
        if(message.content === `${prefix}приглосить`){
    message.channel.send(
new Discord.RichEmbed()
.setColor("#ff0000")
.setDescription(`[Чтобы меня приглосить нажми на этот текст](https://discordapp.com/oauth2/authorize?client_id=576751099932049408&guild_id=&scope=bot&permissions=8)`))
    }
  
  if(message.content.startsWith(`${prefix}преды`))
     if(!pred.get(`${message.guild.id}-${memberr.id}`)) pred.set(`${message.guild.id}-${memberr.id}`, {count: 0})
      
      
    
    
  if(message.content.startsWith(`${prefix}поженится`)){
     
     if(!memberr) {
       message.reply(`вы не указали пользователя`)
     return}
    
     db.set(`user.marryis.${memberr.id}.marry.iss`, message.author.id)
    
    message.channel.send(`
<@${memberr.id}> согласны быть женой/мужем <@${message.author.id}>
Да/нет`)
     }

    
    
    
    
    if(message.content.startsWith(`${prefix}анти ссылки`)){
      if(!argss[1]){ return message.channel.send(
new Discord.RichEmbed()
.setColor(bot.red)
.setAuthor(message.author.tag, message.author.displayAvatarURL)
.addField(`Ошибка`, `Укажите включить или выключить анти ссылки.`)
 .setThumbnail('https://i.ibb.co/2SPhHqB/rr.png')
);}
      
      
      
      
      
      if(argss[1] === "включить"){
        db.set(`server.settings.${message.guild.id}.antiurl`, true)
        
        
        message.channel.send(
new Discord.RichEmbed()
.setColor("25c059")
.setAuthor(message.author.tag, message.author.displayAvatarURL)
.setDescription(`Анти ссылки включены`)
);
      }   
      
      
      
      
      if(argss[1] === "выключить") {
        db.set(`server.settings.${message.guild.id}.antiurl`, false)
        
        message.channel.send(
new Discord.RichEmbed()
.setColor("25c059")
.setAuthor(message.author.tag, message.author.displayAvatarURL)
.setDescription(`Анти ссылки выключены`)
);
      }
    }
    
    
    
    
  const embedComandXelp = new Discord.RichEmbed()
.setTitle("Help")
.setDescription(`
Hello i am eagle
How can I help you?

My developer
@Артём.#2700

My main commands
${prefix}commands (and you will recognize all my commands)`)
.setColor("#FF0000")
     
      if (message.content === `${prefix}help`) {
    message.channel.send(embedComandXelp)
  }
  if (message.content === `${prefix}помощь`) {
    message.channel.send(embedComandXelp)
  }
  
  if (message.content === `${prefix}commands`) {
    message.channel.send(embed
                         .setColor("#ff0000")   
                         .setDescription(`Click on the reactions below to find out all my commands`)
).then(m => {
   db.set(`comand.mid.${m.id}`, m.id)
   db.set(`comand.user.${m.id}`, message.author.id)
   db.set(`comand.channel.${m.id}`, message.channel.id)
      m.react("⏪")
      setTimeout(() => {
      m.react("⏯")
         setTimeout(() => {
      m.react("⏩")
      }, 1000)
      }, 1000)

})

  }
                  if (message.content === `${prefix}уровень всех пользователей`) {
          message.channel.send(`
Уровень всех пользователей ${botsstats.fetch('alllevel')}
Експи всех пользователей ${botsstats.fetch('alllevelexp')}/500`)
              
        }
    
    
    if(message.content.startsWith(`${prefix}lange`)){
      if (!argss[0]){ message.reply("use: " + "`" + prefix + "lange ru - to change bot language to Russian`")
                return; }
      if(argss[0] === "ru"){ server.set(message.guild.id, "ru",  "lange")
      message.channel.send("Bot lange seted `"+ argss[0] +"`")
      }
    }
    }
  }

  
  });

/*

client.on('guildMemberAdd', member => {
// Отправляет сообщение по назначенному каналу на сервере
const channel = member.guild.channels.find(ch => ch.name === db.fetch(`server.${member.guild.id}.newuser`));
// Не реагировать, если канал не найден на этом сервере
if (!channel) return;
// Отправить сообщение с упоминанием участника
channel.send(`Добро пожаловать на сервер, ${member}`);
});

*/

client.on("message", message => { 
  
  
     if(!users.get(message.author.id)) users.set(message.author.id, {
     mesages: 0, 
     levelexp: 0,
     levele: 0
      })
  
  if(!server.get(message.guild.id)) server.set(message.guild.id, {
    balance: 0,
    lange: "ru"
  })
  
  botsstats.math('alllevelexp', "+", 5)
  if(botsstats.fetch('alllevelexp') > "500") {
     botsstats.math('alllevel', "+", 1)
     botsstats.math('alllevelexp', "-", 500)
     }
  
  
  
  users.inc(message.author.id, "mesages", 1)
  botsstats.math(`all.messages`, "+", 1)
  
  
 
  users.math(message.author.id, "+", Math.floor(Math.random() * 5), "levelexp")
    if(users.fetch(message.author.id).levelexp > "500") {
        users.inc(message.author.id, "levele", 1)
      users.math(message.author.id, "-", 500, "levelexp")
        message.channel.send(`У вас новый уровень ${users.fetch(message.author.id).levele}`)
    }
});


/*
  client.on("message", message => {
    if (db.get(`server.settings.${message.guild.id}.dialog`) < 1) {
      return;}
    
     if (message.author.id == "576751099932049408") return;
  if (message.content.startsWith(`Привет`)) {
    message.channel.send("Привет <@" + message.author.id + ">");
    message.channel.send("А у тебя как дела?");
    
  }
   
  if (message.content.startsWith(`Как дела?`)) {
    message.channel.send("Нормально");
    message.channel.send("А у тебя как дела?");
    
  }
    
    if (message.content.startsWith(`Нормально`)) {
    message.channel.send("Это хорошо!!!");
    message.channel.send("Хочешь поговорить со мной? <@" + message.author.id + ">");
      
  }
    
    if (message.content.startsWith(`Хорошо`)) {
    message.channel.send("Это хорошо!!!");
    message.channel.send("Хочешь поговорить со мной? <@" + message.author.id + ">");
      
  }
    
  if (message.content.startsWith(`Да`)) { // надо изменить на базу даных
    message.channel.send("Хорошо");
    }
  
});*/




/*
module.exports.run = async (client, message, args) => {
// здесь весь код команды
  message.raply("тест");
}
module.exports.help = {
name: "тест"
}
*/

// fs.readdir("./commands", (err, files) => {
//     if (err) console.log(err);

//     let jsfile = files.filter(f => f.split(".").pop() === 'js');
//     if(jsfile.length <= 0) console.log("Нет команд!");
//     console.log(`Загружено ${jsfile.length} команд.`);

//     jsfile.forEach((f, i) => {
//       let props = require(`./commands/${f}`);
//       console.log(`${i+1}. Загружен ${f}.`);
//       client.commands.set(props.help.name, props);
//         });
//       })
client.on("ready", async () => { /*setInterval (() => {
client.channels.get("660531333042405386").send("//botinfo")
//client.channels.get("660531333042405386").send("//clear 99")
}, 1000)*/
  console.log("я помагаю");
      client.user.setActivity(db.fetch(`clst.na`), {type: db.fetch(`clst.is`)});
  setInterval(() => {
      
client.user.setActivity('О!хелп', {type: "WATCHING"});
setTimeout(() => {
  client.user.setActivity(`${client.guilds.size} серверов`, {type: "WATCHING"});
// setTimeout(() => {
//     client.user.setActivity(`${db.fetch(`clst.na`)}`, {type: db.fetch(`clst.is`)});

  
// }, 10000)
}, 10000)

    
}, 20000)
});
/*
client.on("ready", async () => {
  console.log("я помагаю");
let statuses = [`${client.guilds.size} серверов`, 'О!команды']
let rstatus = Math.floor(Math.random() * statuses.length);
setInterval(() => {
client.user.setActivity(statuses[rstatus], {type: "WATCHING"})
}, 10000)
});
*/

// let comanafile = bot.commanas.get(cmd.slice(pefix.));
// if(comanafile) comanafile.run(bot.message,args);

/*client.on("message", message => {

      
  var prefix = db.fetch(`server.settings.${message.guild.id}.prefix`)
  
    if(message.content.startsWith(prefix)){
   if(db.fetch(`couldaun.command.${message.author.id}`) != undefined) 
  {
  
    
    return
  }
    db.add(`couldaun.command.${message.author.id}`, 1)
    
  }
  const embedComandXelp = new Discord.RichEmbed()
.setTitle("Хелп")
.setDescription(`Привет я Орёл
Чем я могу тебе помочь?

Мой разроботчик
@Артём.#2700

Мои главные команды
${prefix}команды (и ты узнаешь все мои команды)`)
.setColor("#FF0000")
  
  
  const embedComand = new Discord.RichEmbed()
.setTitle("Список команд")
.setDescription(`
${prefix}пинг
${prefix}сервер инфо
${prefix}уровень всех пользователей
${prefix}скажи
${prefix}статус
${prefix}мут (@пользователь)
${prefix}бан (@пользователь) (причина)
${prefix}кик
${prefix}отчистить (количество сообщений) - и я отчищю сообщения сколько нужно
${prefix}плей (ссылка)
${prefix}скип
${prefix}стоп
${prefix}пёс
${prefix}кот
${prefix}птица
${prefix}мемы
${prefix}дать-роль (@пользователь) (имя роли без "@") - бот даст роль упомянутому пользователю
${prefix}инвентарь
${prefix}уровень
${prefix}баланс
${prefix}положить в банк (количиство/всё) - чтобы положыть деньги в банк
${prefix}снять с банка (количиство/всё) - чтобы снять деньги с банковского счёта
${prefix}работать - чтобы заработать монеты
${prefix}работать на сервер - чтобы работать на сервер
${prefix}работать на банк орла - чтобы работать на центральный банк орла
${prefix}дать (айди пользователя) (сума) - чтобы дать деньги пользователю
${prefix}серверу дать (айди сервера) (сума) - чтобы дать деньги серверу
${prefix}префикс (новый префикс) - устанавливает префикс бота
${prefix}поиск (сылка) - бот откроет вашу сылку и покажет скрин сайта`)
.setTimestamp()
.setColor("#ff0000")
  
  
  
 
  if (message.author.bot) return;
  if (message.content === `${prefix}хелп`) {
    message.channel.send(embedComandXelp)
  }
  if (message.content === `${prefix}помощь`) {
    message.channel.send(embedComandXelp)
  }
  
  if (message.content === `${prefix}команды`) {
    message.channel.send(embed
                         .setColor("#ff0000")   
                         .setDescription(`Нажимайте на реакции внизу чтобы узнать все мои команды`)
).then(m => {
   db.set(`comand.mid`, m.id)
      m.react("⏪")
      setTimeout(() => {
      m.react("⏯")
         setTimeout(() => {
      m.react("⏩")
      }, 1000)
      }, 1000)

})
    
   db.set(`comand.user`, message.author.id)
   db.set(`comand.channel`, message.channel.id)
  }
  if (message.content === `<@576751099932049408>`) {
     message.reply(`раз ты меня упомянул значет я тебе нужен или ты незнаешь мой префикс, введи ${prefix}хелп для списка команд, мой префикс на этом сервере ` + "`" + prefix + "`")
  }
});*/

client.on("message", async message => {  
  const args = message.content.split(" ");
  const command = args.shift().toLowerCase();
let idd = ['557917334933864448',"670671759753740330"]
  if (message.content.startsWith(`О!евал`)) {
    if(!idd.includes(message.author.id)) return message.reply(`ты не создатель бота
Даную команду может использовать только создатель и те пользоватили у которых есть разришение от создателя бота`);
    let evaled;
    try {
      evaled = await eval(args.join(" "));
      message.channel.send(inspect(evaled));
      console.log(inspect(evaled));
      message.react("✅")
    } catch(err) {
      message.channel.send('Произошла ошибка');
      message.channel.send(err, {code: 'js'})
      message.react("❎")
    }
  }
    const argss = message.content.split("  ");

  if(message.content.startsWith(`О!статусс`)){
        if(!idd.includes(message.author.id)) return message.reply(`ты не создатель бота`)
    db.set(`clst.na`, argss[0])

message.reply(`готово`)
    db.set(`clst.is`, argss[1])
  }
})


let spam = "0";
client.on("message", message => {
  let user = message.author;
  if (message.author.bot) return;
  if (user === message.author.id) {
    spam++;
    if (spam = 4) {
      message.reply("Хватит спамить!!!");
    }

    setInterval(() => {
      spam = "0";
    }, 5000);
  }
});



var messageId = "669545982522032138";
/*
client.on("ready", () => {
	// первый попавшийся канал от метода channels.first() вернул голосовой
	// Давай лучше подключимся к нужному нам каналу напрямую!?
  //client.guilds.first().channels.get("539101775567781913").send("Hello World!");
  
  // client.guilds.find(i => i.id > 0)
  
 client.channels.get("").send("смотри").then(m => {
      m.react(":white_check_mark:");
setTimeout(() => {
m.edit("П")


setTimeout(() => {
m.edit("Пр")

setTimeout(() => {
m.edit("При")
setTimeout(() => {
m.edit("Прив")
setTimeout(() => {
m.edit("Приве")
setTimeout(() => {
m.edit("Привет")
setTimeout(() => {
m.edit("Привет,")
setTimeout(() => {
m.edit("Привет, к")
setTimeout(() => {
m.edit("Привет, ка")
setTimeout(() => {
m.edit("Привет, как")
setTimeout(() => {
m.edit("Привет, как д")
setTimeout(() => {
m.edit("Привет, как де")
setTimeout(() => {
m.edit("Привет, как дел")
setTimeout(() => {
m.edit("Привет, как дела")
setTimeout(() => {
m.edit("Привет, как дела?")
setTimeout(() => {
m.edit(".")
setTimeout(() => {
m.edit("С")
setTimeout(() => {
m.edit("Сп")
setTimeout(() => {
m.edit("Спа")
setTimeout(() => {
m.edit("Спас")
setTimeout(() => {
m.edit("Спаси")
setTimeout(() => {
m.edit("Спасиб")
setTimeout(() => {
m.edit("Спасибо")
setTimeout(() => {
m.edit("Спасибо в")
setTimeout(() => {
m.edit("Спасибо вс")
setTimeout(() => {
m.edit("Спасибо все")
setTimeout(() => {
m.edit("Спасибо всем")
setTimeout(() => {
m.edit("Спасибо всем х")
setTimeout(() => {
m.edit("Спасибо всем хт")
setTimeout(() => {
m.edit("Спасибо всем хто")
}, 400)
}, 400)
}, 400)
}, 400)
}, 400)
}, 400)
}, 1000)
}, 400)
}, 400)
}, 400)
}, 400)
}, 400)
}, 400)
}, 400)
}, 400)
}, 4000)
}, 400)
}, 400)
}, 400)
}, 400)
}, 400)
}, 400)
}, 400)
}, 400)
}, 400)
}, 400)
}, 400)
}, 400)
}, 400)


}, 10000)
    });
});*/
const events = {
	MESSAGE_REACTION_ADD: 'messageReactionAdd',
	MESSAGE_REACTION_REMOVE: 'messageReactionRemove',
};
client.on('raw', async event => {
  if (!events.hasOwnProperty(event.t)) return;
  const { d: data } = event;
  const user = client.users.get(data.user_id);
  const channel = client.channels.get(data.channel_id) || await user.createDM();
  if (channel.messages.has(data.message_id)) return;
  const message = await channel.fetchMessage(data.message_id);
  const emojiKey = (data.emoji.id) ? `${data.emoji.name}:${data.emoji.id}` : data.emoji.name;
  const reaction = message.reactions.get(emojiKey);
  client.emit(events[event.t], reaction, user);
});

client.on('messageReactionAdd', (reaction, user) => {
  
  if(server.get(reaction.message.guild.id, "lange") === "ru"){
    
    
     if(db.fetch(`comand.user.${reaction.message.id}`) == user.id){
       if (reaction.emoji.name === "⏯"){
               let channel = client.channels.get(db.fetch(`comand.channel.${reaction.message.id}`));
 let message = channel.fetchMessage(db.fetch(`comand.mid.${reaction.message.id}`)).then(m => {
m.delete()
 });
       }
       if (reaction.emoji.name === "⏪"){
        let channel = client.channels.get(db.fetch(`comand.channel.${reaction.message.id}`));
 let message = channel.fetchMessage(db.fetch(`comand.mid.${reaction.message.id}`)).then(m => {
m.edit(embed
                         .setColor("#ff0000")   
                         .setDescription(`Нажимайте на реакции внизу чтобы узнать все мои команды`))
});
       }
       
       if (reaction.emoji.name === "⏩"){
       
      var prefix = db.fetch(`server.settings.${reaction.message.guild.id}.prefix`);
       
       const embedComand = new Discord.RichEmbed()
.setTitle("Список команд")
.setDescription(`
${prefix}пинг
${prefix}сервер инфо
${prefix}уровень всех пользователей
${prefix}скажи
${prefix}статус
${prefix}статус2 - статистика второго сервера бота
${prefix}мут (@пользователь)
${prefix}бан (@пользователь) (причина)
${prefix}кик
${prefix}анти сcылки (включить/выключить) - бот будет удалят ссылки на другие сервера
${prefix}отчистить (количество сообщений) - и я отчищю сообщения сколько нужно
${prefix}плей (ссылка)
${prefix}скип
${prefix}стоп
${prefix}аватар (@пользователь)
${prefix}инвайт - чтобы приглосить меня
${prefix}приглосить - чтобы приглосить меня
${prefix}ссылки
${prefix}пёс
${prefix}кот
${prefix}птица
${prefix}мемы
${prefix}дать-роль (@пользователь) (имя роли без "@") - бот даст роль упомянутому пользователю
${prefix}инвентарь
${prefix}уровень
${prefix}баланс
${prefix}положить в банк (количиство/всё) - чтобы положыть деньги в банк
${prefix}снять с банка (количиство/всё) - чтобы снять деньги с банковского счёта
${prefix}работать - чтобы заработать монеты
${prefix}работать на сервер - чтобы работать на сервер
${prefix}работать на банк орла - чтобы работать на центральный банк орла
${prefix}дать (@пользователь / айди пользователя) (сума) - чтобы дать деньги пользователю
${prefix}серверу дать (айди сервера) (сума) - чтобы дать деньги серверу
${prefix}префикс (новый префикс) - устанавливает префикс бота
${prefix}поиск (сылка) - бот откроет вашу сылку и покажет скрин сайта
${prefix}поженится (@пользователь) - чтобы поженится
${prefix}паспорт`)
.setTimestamp()
.setColor("#FF0000")
      // client.channels.get("664533215108661269").send('Test')
 let channel = client.channels.get(db.fetch(`comand.channel.${reaction.message.id}`));
 let message = channel.fetchMessage(db.fetch(`comand.mid.${reaction.message.id}`)).then(m => {
m.edit(embedComand)
});
       }
     }
  }
  
  if(server.get(reaction.message.guild.id, "lange") === "en"){
    
  if(db.fetch(`comand.user.${reaction.message.id}`) == user.id){
       if (reaction.emoji.name === "⏯"){
               let channel = client.channels.get(db.fetch(`comand.channel.${reaction.message.id}`));
 let message = channel.fetchMessage(db.fetch(`comand.mid.${reaction.message.id}`)).then(m => {
m.delete()
 });
       }
       if (reaction.emoji.name === "⏪"){
        let channel = client.channels.get(db.fetch(`comand.channel.${reaction.message.id}`));
 let message = channel.fetchMessage(db.fetch(`comand.mid.${reaction.message.id}`)).then(m => {
m.edit(embed
                         .setColor("#ff0000")   
                         .setDescription(`Нажимайте на реакции внизу чтобы узнать все мои команды`))
});
       }
       
       if (reaction.emoji.name === "⏩"){
       
      var prefix = db.fetch(`server.settings.${reaction.message.guild.id}.prefix`);
       
       const embedComand = new Discord.RichEmbed()
.setTitle("Список команд")
.setDescription(`
${prefix}ping
${prefix}server info
${prefix}уровень всех пользователей
${prefix}say
${prefix}status
${prefix}статус2 - статистика второго сервера бота
${prefix}мут (@пользователь)
${prefix}ban (@пользователь) (причина)
${prefix}кик
${prefix}анти сcылки (включить/выключить) - бот будет удалят ссылки на другие сервера
${prefix}отчистить (количество сообщений) - и я отчищю сообщения сколько нужно
${prefix}плей (ссылка)
${prefix}скип
${prefix}стоп
${prefix}avatar  (@user)
${prefix}инвайт - чтобы приглосить меня
${prefix}приглосить - чтобы приглосить меня
${prefix}ссылки
${prefix}пёс
${prefix}кот
${prefix}птица
${prefix}мемы
${prefix}дать-роль (@пользователь) (имя роли без "@") - бот даст роль упомянутому пользователю
${prefix}инвентарь
${prefix}уровень
${prefix}баланс
${prefix}положить в банк (количиство/всё) - чтобы положыть деньги в банк
${prefix}снять с банка (количиство/всё) - чтобы снять деньги с банковского счёта
${prefix}работать - чтобы заработать монеты
${prefix}работать на сервер - чтобы работать на сервер
${prefix}работать на банк орла - чтобы работать на центральный банк орла
${prefix}дать (@пользователь / айди пользователя) (сума) - чтобы дать деньги пользователю
${prefix}серверу дать (айди сервера) (сума) - чтобы дать деньги серверу
${prefix}префикс (новый префикс) - устанавливает префикс бота
${prefix}поиск (сылка) - бот откроет вашу сылку и покажет скрин сайта
${prefix}поженится (@пользователь) - чтобы поженится
${prefix}паспорт`)
.setTimestamp()
.setColor("#FF0000")
      // client.channels.get("664533215108661269").send('Test')
 let channel = client.channels.get(db.fetch(`comand.channel.${reaction.message.id}`));
 let message = channel.fetchMessage(db.fetch(`comand.mid.${reaction.message.id}`)).then(m => {
m.edit(embedComand)
});
       }
     }
    
  }
  
})

client.on('messageReactionRemove', (reaction, user) => {
  
})

/*
 client.on("ready", async () => {
    client.guilds.first().channels.get("662269359305261072").send(`Чтобы попасть на сервер пройдите верефикацыю нажав на рякцыю под этим сообщением

Для чего это зделано? 
Для защиты от спам ботов`)
       var member= "557917334933864448";
        // ban
        member.utban().then((member) => {
        });
 });*/

