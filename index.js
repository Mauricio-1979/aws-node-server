var express = require('express');
var cors = require('cors');
var app = express();
 
app.use(cors());
 
var PORT = 5000;

app.get("/", (req, res) => {
    res.send("Hello Hello Word! 😜")
})

app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})
 
app.listen(PORT, () => {
  console.log(`Server runing in port ${PORT}`)
})