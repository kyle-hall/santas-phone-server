
const express = require('express')
const MessageResponse = require('twilio').twiml.MessagingResponse

const port = process.env.PORT || 80

const app = express();

app.get('/ping', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.end('Pong')
})

app.post('/sms', (req, res) => {
  const twiml = new MessageResponse()

  twiml.message('Ho ho ho! Merry Christmas, Rowan!')

  res.writeHead(200, { 'Content-Type': 'text/xml' })
  res.end(twiml.toString())
})

app.listen(port, () => {
  console.log('> Listening for messages on port 3000...')
})
