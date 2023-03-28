const express = require('express');
const cors = require('cors');

const app = express();
const corsPort = 8000

const PORT = process.env.PORT || 5555;
app.use(express.static('public'));
app.use(express.json());
app.use(cors());
        
app.get('/', (req, res) => {
  res.status(200).json({info: 'preset text'})
})

app.post('/', (req, res) =>  {
  const { parcel } = req.body
  console.log(parcel)
  if (!parcel) {
    return res.status(400).send({ status: 'failed'})
  }
  res.status(200).send({ status: 'recieved'})
})

app.listen(PORT, () => console.log(`app has started on port: ${PORT}`))
app.listen(corsPort, function () {
  console.log(`CORS-enabled web server listening on ${corsPort}`)
});