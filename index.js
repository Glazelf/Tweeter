const Twitter = require('twitter-lite');
const config = require('./config.json');

const client = new Twitter({
    consumer_key: config.consumer_key,
    consumer_secret: config.consumer_secret,
    access_token_key: config.access_token_key,
    access_token_secret: config.access_token_secret,
});

// Set body to an object
let postBody = {
    'status': config.TweetText
};

client.post('statuses/update', postBody).then(result => {
    console.log(`You successfully tweeted this: "${result.text}"`);
}).catch(console.error);

console.log("aa");

return console.log("Success!")