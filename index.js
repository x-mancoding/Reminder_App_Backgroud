const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/create', (req, res) => {
   res.send('Create Reminder!')
  })
  

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})