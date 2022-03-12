$(handleReady);

function handleReady() {
    console.log('jQ ready to roll!');
    $('#submitButton').on('click', handleSubmit);
    $('#add').on('click', setAddition);
    $('#subtract').on('click', setSubtraction);
    $('#multiply').on('click', setMultiplication);
    $('#divide').on('click', setDivision);
    $('#clearButton').on('click', clearCalculator);

}

let operatorClicked = '';// this is a variable to store which operator button
//  was clicked so it goes into the object for the server

function setAddition() {
    operatorClicked = '+';
}
function setSubtraction() {
    operatorClicked = '-';

}function setMultiplication() {
    operatorClicked = '*';

}function setDivision() {
    operatorClicked = '/';
}

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
            operator: operator,
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
        //   render(response);
    }).catch(function (error) {
        console.log(error);
        alert('error in get!')
    })
}
