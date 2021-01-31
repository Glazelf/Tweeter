const Twitter = require('twitter-lite');
const config = require('./config.json');

const client = new Twitter(config);

// Set body to an object
let postBody = {
    'status': `twitter api kinda dum`
};

client.post('statuses/update', postBody).then(result => {
    console.log(result);
    console.log(`You successfully tweeted this: "${result.text}"`);
}).catch(console.error);

console.log("aa");

return console.log("Success!")