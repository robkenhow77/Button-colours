const express = require('express');
const app = express();
app.use(express.json());

var cors = require('cors')
app.use(cors())
app.options('*', cors())


var colour;

function get(){
  app.get('/', (req, res) => {
    res.send(colour)
  })
}

app.listen(3001 || process.env.PORT, () => {
    console.log("Backend server running on 3001")
  })

app.post('/', (req, res) => {
  console.log(req.body)
  colour = req.body;
  get();
  res.send();
  
})