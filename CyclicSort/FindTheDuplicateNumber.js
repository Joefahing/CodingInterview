/**
 * Question
 * We are given an unsorted array containing ‘n+1’ numbers taken from the range 1 to ‘n’. 
 * The array has only one duplicate but it can be repeated multiple times. Find that duplicate number without using any extra space. You are, 
 * however, allowed to modify the input array.
 */

// Time complexity would be O(n) from sorting / finding the match pair
// Space complexity is O(1)
const findDuplicate = (nums) => {
    let i = 0;

    while (i < nums.length) {
        let j = nums[i] - 1;

        if (i !== j) {
            if (nums[i] == nums[j]) {
                return nums[i];
            }
            else {
                [nums[i], nums[j]] = [nums[j], nums[i]];
            }
        }
        else {
            i += 1;
        }
    }
}

let input = [1, 4, 4, 3, 2];
console.log(`The duplicated number is ${findDuplicate(input)}`);
input = [2, 1, 3, 3, 5, 4];
console.log(`The duplicated number is ${findDuplicate(input)}`);
input = [2, 4, 1, 4, 4];
console.log(`The duplicated number is ${findDuplicate(input)}`);
