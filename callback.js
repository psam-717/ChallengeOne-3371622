// callback functions
// they are basically functions within a function performing a particular task
 
function callBackExample (callBackFunction){
    console.log("Data accepted");
    callBackFunction();
}

function inputFunction(){
    console.log('Data processed ...')
}

callBackExample(inputFunction)