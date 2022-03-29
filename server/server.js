const express = require("express");
var connectToMongo = require("./db.js");

connectToMongo();
const app = express()
const port = 6000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})