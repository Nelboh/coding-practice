// For loops

// 1-100
for (let i = 0; i <= 100; i += 1) {
    console.log(i);
}

// Run until total exceeds 100
let i = 0;
let total = 0;

while (total <= 100) {
    i += 1;
    total += i;
}

console.log(total); // total reached
console.log(i); //how many times it looped to get there

// 100-1

for (let i = 100; i >= 1; i -= 1) {
    console.log(i);
}

// All multiples of 13 up to 1000, using a for loop
for (let i = 0; i <= 1000; i += 13) {
    console.log(i);
}

// All multiples of 13 up to 1000, using a while loop
let count = 13;

while (count <= 1000) {
    console.log(count);

    count += 13;
}

// Any numbers between 1 and 50 that are divisible by 3
for (let i = 0; i <= 50; i += 1) {
    if (i % 3 === 0) {
        console.log(i);
    }
}
