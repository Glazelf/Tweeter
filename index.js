const Twitter = require('twitter-v2');
const config = require('./config.json');

const client = new Twitter({
    consumer_key: config.API,
    consumer_secret: config.APISecret,
    access_token_key: config.AccessToken,
    access_token_secret: config.AccessTokenSecret,
});