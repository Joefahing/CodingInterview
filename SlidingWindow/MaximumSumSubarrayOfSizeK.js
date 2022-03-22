/**
 * Question 
 * Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.
 */

const maxSubArrayOfSizeK = function (arr, k) 
{
    let maxSum = Number.NEGATIVE_INFINITY;
    let windowEnd = 0;
    let windowStart = 0;
    let currentSum = 0;

    for(windowEnd; windowEnd < arr.length; windowEnd++)
    {
        currentSum += arr[windowEnd];

        if(windowEnd >= k - 1)
        {
            maxSum = Math.max(maxSum, currentSum);
            currentSum -= arr[windowStart];
            windowStart += 1;
        }
    }

    if(k >= arr.length)
    {
        return currentSum;
    }

    return maxSum;
}

let arr = [2, 1, 5, 1, 3, 2];
let k = 3

console.log(`max sub array of Size k ${maxSubArrayOfSizeK(arr, k)}`);

arr = [2, 1, 5, 1, 3, 2];
k = 7
console.log(`max sub array of Size k ${maxSubArrayOfSizeK(arr, k)}`);

console.log(`Time complexity is O(n) from iterating through the array once`);
console.log(`Space complexity is O(1) from constant number of variables`);