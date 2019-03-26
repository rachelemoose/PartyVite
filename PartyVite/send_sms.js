// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const twilioNumber = process.env.TWILIO_PHONE_NUMBER;
const partyHostNumber = process.env.HOST_PHONE_NUMBER;
const messagingService = process.env.TWILIO_MESSAGING_SERVICE_SID;
// this array needs to popoulate with hosts's contacts 


let body = "Rachel Moose has sent you a PartyVite! Send 'Yes' if you can make it, 'No' if you can't attend, and 'Maybe', if you're not sure."

// send one message to one number
// client.messages
//   .create({
//      body: body,
//      from: twilioNumber,
//      to: invitees
//    })
//   .then(message => console.log(message.sid)).catch(err => console.error(err));

Promise.all(
  invitees.map(invitee => {
    return client.messages.create({
      to: invitee,
      from: twilioNumber,
      body: body
    });
  })
)
  .then(messages => {
    console.log('Messages sent!');
  })
  .catch(err => console.error(err));
