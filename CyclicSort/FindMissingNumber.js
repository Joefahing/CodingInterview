// Question
// We are given an array containing n distinct numbers taken from the range 0 to n. 
// Since the array has only n numbers out of the total n+1 numbers, 
// find the missing number.

// Time complexity is O(n) from sorting and O(n) from finding missing value
// Space complexity if O(1)
const findMissingNumber = (nums) =>  
{
    let i = 0;

    // Sort input
    while (i < nums.length)
    {
        let j = nums[i];
        
        // Only swap if index j is not n because n will be in place of the missing value
        if (j != i  && j < nums.length)
        {
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
        else
        {
            i += 1;
        }
    }

    for (let k = 0; k < nums.length; k++)
    {
        if (nums[k] !== k) return k;
    }

    return -1;
}


let input = [4,0,3,1];
console.log(`missing number is ${findMissingNumber(input)}`);

input = [8, 3, 5, 2, 4, 6, 0, 1];
console.log(`missing number is ${findMissingNumber(input)}`);

