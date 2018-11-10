const lib = require('lib')
const MessagingResponse = require('twilio').twiml.MessagingResponse;

module.exports = (context, callback) => {

    const twiml = new MessagingResponse();
    twiml.message(context["params"].Body);

    console.log(context["params"].Body);
    callback(null, twiml.toString());  
};