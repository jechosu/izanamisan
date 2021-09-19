module.exports = {
    name:'hi izanami',
    description: "saying hello to izanami.",
    execute(message, args){

        const user = message.author;
        message.channel.send('hello');
    }
}