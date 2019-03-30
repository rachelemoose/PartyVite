# PartyVite
You’re having a party, and you want to invite all of your friends...but if you start one more group chat, your friends are going to kill you. Enter, PartyVite. 

Use the PartyVite app to send an invitation to all of your friends individually. No group chat. 
They can respond with a Yes, No or Maybe, and an automatic preset response will be send back to them. 

## Technologies Used
```
React Native
Expo
Twilio
Express
Zapier
Datetimepicker
Moment
Firebase
Axios
body-parser
```

### App Pages & How PartyVite Works
**Login** - You have three options on the homepage; sign in, register and sign in with Google account (recommended).

**Invite** - Once you are logged in you will be directed to Create Invitation page. Fill in the form and the invitation will be sent as text message.

**Invitee Side** Once you send the invitation, your friends will receive the texted invitation. They can respond to your texted invitation and PartyVite will respond right back. 

### Database
Your friends' responses to your invitation are stored in Firebase, by a connection fom Twilio to Firebase using Zapier. 
