const express = require('express');
const bodyParser = require('body-parser');
const res = require('express/lib/response');
const app = express();
const PORT = 5000;

let calculationHistory = [];
let answerHistory = [];

app.use(bodyParser.urlencoded({ extended: true }))

// Serves up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

//this accepts the user inputs for a calculation
app.post('/mathResults', (req, res) => {
    console.log('POST mathResults', req.body);
    //res.sendStatus(200);//the 200 means "ok"
    res.sendStatus(201);//tells us something was created
    // calculationHistory.push(req.body);
    // console.log(calculationHistory);
    runCalculation(req.body);//this calls the actual math to run
})

app.get('/mathResults', (req, res) => {
    console.log('GET mathResults');
    res.send(answerHistory);
})

app.get('/calculationHistory', (req, res) => {
    console.log('GET calculationHistory');
    res.send(calculationHistory);
})

//this will run the user input through the actual calculations
function runCalculation(taco) {
    let inputOne = Number(taco.firstNumber);
    let button = taco.operator;
    let inputTwo = Number(taco.secondNumber);
    switch (button) {
        case '+':
            answer = inputOne + inputTwo;
            break;
        case '-':
            answer = (inputOne - inputTwo);
        case 'x':
            answer = (inputOne * inputTwo);
            break;
        case '÷':
            answer = (inputOne / inputTwo);
            break;
        default:
            break;
    }
    answerHistory.push(answer);
    calculationHistory.push(`${inputOne}${button}${inputTwo}=${answer}`);
    console.log(answerHistory);
    console.log(calculationHistory);
}





//starts the server 
app.listen(PORT, () => {
    console.log('Server is running on port', PORT)
});