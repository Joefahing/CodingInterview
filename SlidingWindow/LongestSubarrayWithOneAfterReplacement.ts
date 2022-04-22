/**
 * Question:
 * Given an array containing 0s and 1s, if you are allowed to replace no more than ‘k’ 0s with 1s, find the length of the longest 
 * contiguous subarray having all 1s
 */


function longestOnesAfterReplacement(nums: number[], k: number): number
{

    if (k >= nums.length) return nums.length;

    let maxLength: number = 0;
    let start: number = 0;
    let numberOfZero = 0;

    for (let end: number = 0; end < nums.length; end++)
    {
        if (nums[end] === 0) numberOfZero += 1;

        if (numberOfZero > k)
        {
            if (nums[start] === 0) numberOfZero -= 1;
            start += 1;
        }
        else
        {
            maxLength = Math.max(maxLength, end - start + 1);
        }
    }

    return maxLength;
}

function longestOnesAfterReplacementSolution(): void
{
    let nums = [0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1];
    let k = 2;
    console.log(`for input [${nums}] and k = ${k} output is ${longestOnesAfterReplacement(nums, k)}`);

    nums = [0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1];
    k = 3
    console.log(`for input [${nums}] and k = ${k} output is ${longestOnesAfterReplacement(nums, k)}`);

}

longestOnesAfterReplacementSolution();

