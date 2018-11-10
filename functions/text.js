const lib = require('lib')
const acccountSid = process.env.TWILIO_SID
const authToken = process.env.TWILIO_TOKEN
const client = require('twilio')(acccountSid, authToken)

module.exports = async (context) => {
   let text = context["params"].Body;
   let sender = context["params"].From;

   await client.messages.create({
       to: sender,
       from: '+14318004137',
       body: text
   }).then(msg => console.log(msg.sid))
};