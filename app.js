const express = require('express');
const cors = require('cors');

const app = express();
const corsPort = 8000

const PORT = process.env.PORT || 5555;
app.use(cors());
        

app.get("/products/:id", function (req, res, next) {
  res.json({msg: "This is CORS-enabled for all origins!"})
});
app.listen(5555, function () {
  console.log(`CORS-enabled web server listening on ${PORT}`)
});