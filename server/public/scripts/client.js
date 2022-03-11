$(handleReady);

function handleReady() { 
    console.log('jQ ready to roll!');
    $('#submit').on('click', handleSubmit);
}