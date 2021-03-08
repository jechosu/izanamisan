const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();
const ytdl = require('ytdl-core');
const escapeRegex = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const PORT = process.env.PORT || 3000;
    console.log(`App is running on port ${ PORT }`);

client.on('ready', () => {
client.user.setPresence({ activity: { name: 'stable build' }, status: 'online' });
});

client.on('message', message => {
const user = message.mentions.users.first();
client.users.cache.get('<id>');
mention = message.mentions.users.first();
	
	if (message.content === `hi izanami`) {
		const user = message.author;
	message.channel.send('hello');
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
	message.member.send('you can say the following:\n "hi izanami"\n"morning!"\n"go out with me!"\n"I love you."\n"stfu"\n"fuck"\n"shit"\n"you are so cute"\n"are you ok?"\n"ur ugly"\n"ur so wierd"\n"you are pretty izanami"\n"shut up"\nAny of these phrases or words will give a response.');
} else if (message.content === 'you are pretty izanami') {
	message.channel.send(':relaxed: ありがとうございます!')
} else if (message.content === 'shut up') {
	message.channel.send('be a little more nice, could you? :relaxed: :pleading_face:')
} else if (message.content === 'ur so weird') {
	message.channel.send('be a little more nice, could you? :relaxed: :pleading_face:')
}

});

client.login('Nzc1Mzc1OTc5NjkwMTk3MDUy.X6lbJw.6_MIgKTkRoHLfi7_NbtEo-wHolI');

client.on('debug', console.log);
