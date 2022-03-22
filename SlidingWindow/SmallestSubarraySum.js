/**
 * Given an array of positive numbers and a positive number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. 
 * Return 0 if no such subarray exists.
 */

const smallestSubArraySum = function (arr, s) {
    let smallestLength = Number.POSITIVE_INFINITY;
    let windowEnd = 0;
    let windowStart = 0;
    let sum = 0;

    for (windowEnd; windowEnd < arr.length; windowEnd++) {
        sum += arr[windowEnd];

        // meets the condition we want to start shrinking the window to find the smallest length
        while (sum >= s) {
            smallestLength = Math.min(smallestLength, windowEnd - windowStart + 1);
            sum -= arr[windowStart];
            windowStart++;
        }
    }

    if (smallestLength === Number.POSITIVE_INFINITY) {
        return 0;
    }

    return smallestLength;
}

let arr = [2, 1, 5, 1, 3, 2];
let s = 7

console.log(`Smallest length subarray great than ${s} is ${smallestSubArraySum(arr, s)}`);
console.log(`The time complexity is O(n) from iterating through the array once`);
console.log(`The space complexity is O(1) from constant number of variables`);
