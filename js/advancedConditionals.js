// Write some code that outputs 50 lines, alternating between ☃☃☃ and ❄❄❄

for (let i = 1; i <= 50; i += 1) {
    if (i % 2 === 0) {
        console.log("☃☃☃")
    } else {
        console.log("❄❄❄")
    }
}

// Write some code that outputs a cumulative total of the current line number for 1 to 50 
// e.g. 
// 1 // lines 1
// 3 // lines 1 + 2
// 6 // lines 1 + 2 + 3

let total = 0;

for (let i = 1; i <= 50; i += 1) {
    total += i;

    console.log(total);
}


// Write some code that outputs the sum of the first 117 multiples of either 3 or 7 
// (e.g. 3 + 6 + 7 + 9 + 12 + 14 + ...)

let sum = 0;
let multiples = 0;
let i = 1;

while (multiples < 117) {
    if (i % 3 === 0 || i % 7 === 0) {
        multiples += 1;

        sum += i;
    }

    i += 1;
}

console.log(sum)


