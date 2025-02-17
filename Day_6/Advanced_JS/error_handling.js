//error handling, using try catch

try{
    let result = someUndefinedValue +10;
    console.log(result);
}catch(error){
    console.log("An Error Occured:",error.message)
}