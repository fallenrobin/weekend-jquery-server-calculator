$(handleReady);

function handleReady() {
    console.log('jQ ready to roll!');
    $('#submitButton').on('click', handleSubmit);
    $('.operatorButton').on('click', setOperator);
    $('#clearButton').on('click', clearCalculator);

}

function setOperator() {//grabs the operator button text
    operatorClicked = $(this).text();//sets value of variable to that string
}

let operatorClicked = '';//stores text of which operator button was clicked


function clearCalculator() {//clears the number inputs
    $('input').val('');
}

function handleSubmit() {//POST a set of numbers to server
    let firstNumber = $('#firstNumber').val();
    let operator = operatorClicked; //uses the stored 'click record'
    let secondNumber = $('#secondNumber').val();

    $.ajax({
        url: '/mathResults',
        method: 'POST',
        data: {
            firstNumber: firstNumber,
            operator: operatorClicked,
            secondNumber: secondNumber,
        }
    }).then(function (response) {
        console.log('response');
        getMathResults();
        // $('input').val('');// I purposely whacked this so that inputs do NOT clear 
        // unless cleared/changed manually
    }).catch(function (error) {
        console.log(error);
    })
}

function getMathResults() { //GET so as to append calculation answer to DOM
    console.log('getting math results');

    $.ajax({
        url: '/mathResults',
        method: 'GET'
    }).then(function (response) {
        console.log(response);
        renderAnswer(response);//renders current answer

    }).catch(function (error) {
        console.log(error);
        alert('error in get!')
    })
    $.ajax({// First I had this in a separate function, but realized I could consolidate
        // the second GET request into the same function
        url: '/calculationHistory',
        method: 'GET'
    }).then(function (response) {
        console.log(response);
        renderAnswerHistory(response);//renders each past problem (as prepend)
    })
}

function renderAnswer(response) {//for current answer
    $('#answerSpan').text(`
    ${response[response.length - 1]}
    `);//renders only the most recent answer (last index), as a string
}
function renderAnswerHistory(calculations) {//for history of past calculations
    $('#history').empty();
    for (let calculation of calculations) {//renders each string in the array
        $('#history').prepend(`
                <h2>${calculation}<h2>
            `);
    }
}

