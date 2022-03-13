$(handleReady);

function handleReady() {
    console.log('jQ ready to roll!');
    $('#submitButton').on('click', handleSubmit);
    $('.operatorButton').on('click', setOperator);
    $('#clearButton').on('click', clearCalculator);

}

function setOperator() {
    operatorClicked = $(this).text();
}

let operatorClicked = '';// this stores which operator button was clicked


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
        $('input').val('');
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
        renderAnswer(response);

    }).catch(function (error) {
        console.log(error);
        alert('error in get!')
    })
    $.ajax({
        url: '/calculationHistory',
        method: 'GET'
    }).then(function (response) {
        console.log(response);
        renderAnswerHistory(response);
    })
}

function getCalculationHistory() {
    $.ajax({
        url: '/calculationHistory',
        method: 'GET'
    }).then(function (response) {
        console.log(response);
        // renderAnswerHistory(response);
    }).catch(function (error) {
        console.log(error);
        alert('error in get!')
    })
}

function renderAnswer(response) {
    $('#answerSpan').text(response[response.length - 1]);
}
function renderAnswerHistory(calculations) {
    $('#history').empty();
    for (let calculation of calculations) {
        $('#history').prepend(`
                <h2>${calculation}<h2>
            `);
    }
}

