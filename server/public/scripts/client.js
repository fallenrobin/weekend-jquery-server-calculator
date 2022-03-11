$(handleReady);

function handleReady() {
    console.log('jQ ready to roll!');
    $('#submitButton').on('click', handleSubmit);
    // $('#add').on('click', doAddition);
    // $('#subtract').on('click', doSubtraction);
    // $('#multiply').on('click', do);
    // $('#divide').on('click', );
    // $('#clearButton').on('click', );

}

function handleSubmit () {//POST a set of numbers to server
    let firstNumber = $('#firstNumber').val();
    let operator = '+'; //placeholder
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
    // getGuesses();
    $('input').val('');
}).catch(function (error) {
    console.log(error);
})
}