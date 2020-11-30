// Constants
const readline = require("readline");
const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout 
});

// Rounds a number to the given index
const RoundTo= (num, i) =>{
    
}

// Getting user input
rl.question("How many digits do you want to calculate Pi to? ", function(num){
    // Calls the function to calculate Pi
    let pi = CalculatePi(num);

    // Prints the result
    console.log(`Pi to the ${num}th digit it ${pi}`);
    rl.close();
});

// Calculates pi to the nth digit
// Uses this formula found online 
// http://ajennings.net/blog/a-million-digits-of-pi-in-9-lines-of-javascript.html#:~:text=To%20use%20big%20integers%20in,i%20%2B%3D%202n%3B%20%7D%20console.
function CalculatePi(n){
    let i = 1n;
    let x = 3n * (10n ** 1020n);
    let pi = x;
    while (x > 0){
        x = x * i / (( i + 1n) *4n);
        pi += x / (i + 2n);
        i += 2n;
    }
    //console.log(pi / (10n ** 20n));
    pi = pi.toFixed(n);
    return pi;
}

rl.on("close", function() {
    // Exits the process
    process.exit(0);
});