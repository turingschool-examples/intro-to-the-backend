const express = require('express')
const app = express()
const port = 3000

app.get('/welcome', (request, response) => {
  response.send("Here's the info you requested!")
})

app.listen(port, () => console.log(`Listening on port ${port}`))
