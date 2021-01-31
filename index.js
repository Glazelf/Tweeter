const Twitter = require('twitter-lite');
const config = require('./config.json');

const client = new Twitter({
    consumer_key: config.API,
    consumer_secret: config.APISecret,
    access_token_key: config.AccessToken,
    access_token_secret: config.AccessTokenSecret,
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