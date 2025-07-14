// for loop
for (let i = 0; i < 3; i++) {
    console.log("For loop", i);
}

// while loop
let i = 0;
while (i < 3) {
    console.log("While loop", i);
    i++;
}

// for-of loop
let arr = [10, 20, 30];
for (let num of arr) {
    console.log("for-of", num);
}

// break & continue
for (let i = 0; i < 5; i++) {
    if (i === 2) continue;
    if (i === 4) break;
    console.log("i is", i);
}
