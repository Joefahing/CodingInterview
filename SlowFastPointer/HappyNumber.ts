// Problem
// Any number will be called a happy number if, after repeatedly replacing it with a number equal to 
// the sum of the square of all of its digits, leads us to number ‘1’. All other (not-happy) numbers 
// will never reach ‘1’. Instead, they will be stuck in a cycle of numbers which does not include ‘1’.

// Time complexity is O(n) for finding 1 or finding the loop
// Space complexity is O(1);
function happyNumber(num: number): boolean {
    if (num === 1) return true;

    let fast: number = num;
    let slow: number = num;

    do {
        fast = squareOfDigits(squareOfDigits(fast));
        slow = squareOfDigits(slow);

        if (fast === 1) return true;

    } while (fast !== slow)

    return false;
}

function squareOfDigits(num: number): number {

    if (num <= 1) return num;

    let sum: number = 0;
    let current: number = num;

    while (current > 0) {
        const digit = current % 10;
        sum += digit * digit;
        current = Math.floor(current / 10);
    }

    return sum;
}

function happyNumberMain(): void {

    let input: number = 23;
    console.log(`${input} is happy number: ${happyNumber(input)}`);
    input = 12;
    console.log(`${input} is happy number: ${happyNumber(input)}`);
}

happyNumberMain();
