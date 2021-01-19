// Concatenation
let firstPerson = "Bob";
let secondPerson = "Henry";

let greeting = "Hello " + firstPerson + ", how are you?";
let farewell = `Goodbye ${secondPerson}, nice to see you`;

console.log(greeting);
console.log(farewell);

// More concatenation
let number1 = 10;
let number2 = 20;
let number3 = 30;
let number4 = 40;
let number5 = 50;
let total = number1 + number2 + number3 + number4 + number5;

console.log(total);

// Yet more concatenation
let string1 = "I";
let string2 = "like";
let string3 = "to";
let string4 = "boogie";
let string5 = "woogie";

let joinedup = string1 + string2 + string3 + string4 + string5;

console.log(joinedup);

// If statement
let value = 8;
let max = 10;

if (value <= max) {
    console.log("All good, we're under the max");
}

// If/else statement
let username = "donaldtrump";

if (username === "donaldtrump") {
    console.log("Sorry Mr Trump, your Twitter's blocked")
} else {
    console.log("Welcome to Twitter!");
}

// Switch statements
let user = "admin";

switch (user) {
    case "admin": console.log("Welcome, admin!"); break;
    case "Admin": console.log("Welcome, Admin!"); break;
    case "Ellie": console.log("Please make yourself at home. Here's some free cake!"); break;
    default: console.log("Who the heck are you?");
}

// Maths
let quadrillion = Math.pow(10, 15);
console.log(quadrillion);
console.log((quadrillion / 17) - 8);

// More maths
let longNumber = 864197523;
if (longNumber % 7 === 0) {
    console.log("true")
} else {
    console.log("false")
};

// Tricksy maths

// If you had a grid containing 100 items split into 12 columns, what column would the 77th item be in? 

let whichColumn = 77 % 12;
console.log(whichColumn); // 5


