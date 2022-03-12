const express = require('express');
const bodyParser = require('body-parser');
const res = require('express/lib/response');
const app = express();
const PORT = 5000;

let mathArray = [];
let solutionHistory = [];

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({ extended: true }))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

app.post('/mathResults', (req, res) => {
    console.log('POST mathResults', req.body);
    //res.sendStatus(200);//the 200 means "ok"
    res.sendStatus(201);//tells us something was created
    mathArray.push(req.body);
    // console.log(mathArray);
    runCalculation(req.body);
})

app.get('/mathResults', (req, res) => {
    console.log('GET mathResults');
    res.send(solutionHistory);
    //actually need [solutionHistory.length-1]
})

function runCalculation(taco) {
    let inputOne = Number(taco.firstNumber);
    let button = taco.operator;
    let inputTwo = Number(taco.secondNumber);
    switch (button) {
        case '+':
            answer = inputOne + inputTwo;
            solutionHistory.push(answer);
            mathArray.push(`${inputOne}+${button}+${inputTwo}`);
            break;
        case '-':
            answer = (inputOne - inputTwo);
            solutionHistory.push(answer);
            mathArray.push(`${inputOne}+${button}+${inputTwo}`);
            break;
        case '*':
            answer = (inputOne * inputTwo);
            solutionHistory.push(answer);
            mathArray.push(`${inputOne}+${button}+${inputTwo}`);
            break;
        case '/':
            answer = (inputOne / inputTwo);
            solutionHistory.push(answer);
            mathArray.push(`${inputOne}+${button}+${inputTwo}`);
            break;
        default:
            break;
    }
    // solutionHistory.push(answer);
    // mathArray.push(`${inputOne}+${button}+${inputTwo}`);
    console.log(solutionHistory);
    console.log(mathArray);
}





//starts the server 
app.listen(PORT, () => {
    console.log('Server is running on port', PORT)
});