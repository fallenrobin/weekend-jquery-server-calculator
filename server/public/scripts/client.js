$(handleReady);

function handleReady() { 
    console.log('jQ ready to roll!');
    $('#submitButton').on('click', handleSubmit);
}