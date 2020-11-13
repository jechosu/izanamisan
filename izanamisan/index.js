const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();
const ytdl = require('ytdl-core');
const escapeRegex = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const PORT = process.env.PORT || 3000;
    console.log(`App is running on port ${ PORT }`);

client.on('ready', () => {
client.user.setPresence({ activity: { name: 'Testing' }, status: 'dnd' });
});

client.on('message', message => {
const user = message.mentions.users.first();
client.users.cache.get('<id>');
mention = message.mentions.users.first();
	
	if (message.content === `hi izanami`) {
	message.channel.send('hello <@${member.id}>');
} else if (message.content === `morning!`) {
	message.channel.send('its a nice day today');
} else if (message.content === `go out with me!`) {
	message.channel.send('im sorry. I cant do that .');
} else if (message.content === `I love you.`) {
	message.channel.send('I cant accept your confession.');
} else if (message.content === `stfu`) {
	message.channel.send('please be a little more nice...teehee :)');
} else if (message.content === `fuck`) {
	message.channel.send('i dont want to be mean, but dont curse so much, ok? (if you can, censor it)');
} else if (message.content === `shit`) {
	message.channel.send('i dont want to be mean, but dont curse so much, ok? (if you can, censor it)');
} else if (message.content === `are you ok?`) {
	message.channel.send('I-im fine..');
} else if (message.content === `||fuck||`) {
	message.channel.send('i dont want to be mean, but dont curse so much, ok? (if you can, censor it)');
} else if (message.content === `you are so cute`) {
	message.channel.send(':relaxed: ありがとうございます!');
} else if (message.content === `ur ugly`) {
	message.channel.send('youre such a meanie');
} else if (message.content === `what can i say`) {
	message.member.send('you can say the following:\n "hi izanami"\n"morning"\n"go out with me!"\n"I love you."\n"stfu"\n"fuck"\n"shit"\n"you are so cute"\n"are you ok?"\n"ur ugly"\nAny of these phrases or words will give a response.');
}
	
});

client.login('Nzc1Mzc1OTc5NjkwMTk3MDUy.X6lbJw.uNM4yav6ibwyycw2a-Fpjrss7aA');

client.on('debug', console.log);