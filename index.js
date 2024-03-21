const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('API rodando no servidor')
})

app.listen(process.env.PORT || 3000)