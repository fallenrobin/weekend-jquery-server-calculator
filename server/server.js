const express = require('express');
const bodyParser = require('body-parser');
const res = require('express/lib/response');
const app = express();
const PORT = 5000;

let mathArray = [];

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

app.post('/mathResults',(req, res) => {
    console.log('POST mathResults', req.body);
    //res.sendStatus(200);//the 200 means "ok"
    res.sendStatus(201);//tells us something was created
    mathArray.push(req.body);
})

app.get('/mathResults', (req, res) => {
    console.log('GET mathResults');
    res.send(mathArray);
})





//starts the server 
app.listen(PORT, () => {
    console.log ('Server is running on port', PORT)
  });