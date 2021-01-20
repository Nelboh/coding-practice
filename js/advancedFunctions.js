// A shorter odd/even function

let odd = number => number % 2 !== 0;

let even = number => !odd(number);

console.log(even(1)); // false
console.log(even(2)); // true



// Silly

let times2 = number => number * 2;

let add4 = number => number + 4;

let divideBy6 = number => number / 6;

let silly = number => divideBy6(add4(times2(number)));

console.log(
    silly(10), // 4
    silly(22), // 8
);



// What's the nth prime?

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

let nthPrime = n => {
    let i = 1;
    let count = 0;

    while (count < n) {
        i += 1;

        if (prime(i)) {
            count += 1;
        }
    }

    return i;
}

console.log(
    nthPrime(1), // 2
    nthPrime(2), // 3
    nthPrime(10), // 29
    nthPrime(100), // 541
    nthPrime(1000), // 7919
);

