const express = require("express");
var connectToMongo = require("./db.js");

connectToMongo();
const app = express()
const port = 6000

app.get('/', (req, res) => {
  res.send('index.html')
})
app.use(express.json())
app.use(require("./routes/soc.js"))
app.use(require("./routes/ownerRegister"))
              

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})