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

function handleSubmit() {//POST a set of numbers to server
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
