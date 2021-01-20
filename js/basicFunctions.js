// add numbers
let add = function (a, b) {
    return a + b;
};

let onePlusTwo = add(1, 2);
console.log(onePlusTwo);



// add words
let concat = (firstWord, secondWord) => {
    return firstWord + " " + secondWord;
}

console.log(concat("fish", "sticks"));
console.log(concat("hello", "world"));



// divide numbers
let divide3 = function (a, b, c) {
    return (a / b) / c;
}

console.log(divide3(8, 2, 2)); // 2
console.log(divide3(100, 20, 5)); // 1



// no arguments in U2
let helloU2 = () => "Hello Bono and the Edge";

console.log(helloU2());



// weight converter
let stone = function (kg) {
    return kg / 6.35
}

console.log(
    stone(74), // 11.653
    stone(50), // 7.87365
);



// odd or even
let odd = function (x) {
    if (x % 2 === 0) {
        return false;
    } else {
        return true;
    }
}

console.log(odd(1)); // true
console.log(odd(2)); // false



// Which number is the biggest?
let max = function (a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

console.log(
    max(1, 2), // 2
    max(3, -2), // 3
    max(-3, -5), // -3
    max(3, 3), // 3
);

// Lots of Os
let wow = n => {

    let oh = "";

    for (let i = 0; i < n; i += 1) {
        oh += "o";
    }
    return "W" + oh + "w";
}

console.log(wow(12)); // "Woooooooooooow"
console.log(wow(4)); // "Woooow"



// Skip
let skip = (factor, max) => {
    let total = 0;

    for (let i = 1; i <= max; i += 1) {
        if (i % factor !== 0) {
            total += i;
        }
    }

    return total;
}

console.log(
    skip(4, 20), // 1 + 2 + 3 + 5 + 6 + 7 + 9 + 10 + 11 + 13 + 14 + 15 + 17 + 18 + 19 = 150
);




// Primes

let factorOf = (a, b) => b % a === 0;

let prime = (n) => {
    if (n === 1) {
        return false;
    }

    for (let i = 2; i * i <= n; i += 1) {
        if (factorOf(i, n)) {
            return false;
        }
    }
    return true;
}

console.log(
    prime(1), // false
    prime(2), // true
    prime(3), // true
    prime(4), // false
    prime(7), // true
    prime(15), // false
    prime(85), // false
    prime(257), // true
    prime(5119), // true
    prime(5121), // false
    prime(17523), // false
    prime(15487319), // true
);