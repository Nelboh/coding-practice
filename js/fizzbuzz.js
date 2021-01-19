// The FizzBuzz challenge is as follows:

// write some code that will output the numbers 1 to 100 in the console
// unless the number is divisible by 3, in which case output "Fizz"
// or the number is divisible by 5, in which case output "Buzz"
// if the number is divisible by 3 and 5, output "FizzBuzz"

let output = "";

for (let i = 1; i <= 100; i += 1) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")
    } else if (i % 5 === 0) {
        console.log("Buzz")
    } else if (i % 3 === 0) {
        console.log("Fizz")
    } else {
        console.log(i);
    }
}
