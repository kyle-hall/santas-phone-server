
const express = require('express')
const MessageResponse = require('twilio').twiml.MessagingResponse

const app = express();

app.post('/sms', (req, res) => {
  const twiml = new MessageResponse()

  twiml.message('Ho ho ho! Merry Christmas, Rowan!')

  res.writeHead(200, { 'Content-Type': 'text/xml' })
  res.end(twiml.toString())
})

app.listen(3000, () => {
  console.log('> Listening for messages on port 3000...')
})
