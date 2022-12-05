// The continue statement is used to skip the current iteration of the loop and the control flow of the program goes to the next iteration.

// program to print the value of i
for (let i = 1; i <= 5; i++) {

    // condition to continue    
    if (i == 3) {
        continue;
    }

    console.log(i);
}

// When i is equal to 3, the continue statement skips the third iteration.
// Then, i becomes 4 and the test condition and continue statement is evaluated again.
// Hence, 4 and 5 are printed in the next two iterations.
// The break statement terminates the loop entirely. However, the continue statement only skips the current iteration.