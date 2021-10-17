console.log('Welcome to the Password Validator Tool');

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("Please Enter Your Password:  ", function(input){
    
    if (input.length >= 10) {
        console.log('Password is strong')
    } else if (input.length <10) {
        console.log('Password is too short!')
    }
    
    // This line closes the connection to the command line interface.
    reader.close()

});