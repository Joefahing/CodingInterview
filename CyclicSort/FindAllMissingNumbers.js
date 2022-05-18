/**
 * Question
 * We are given an unsorted array containing numbers taken from the range 1 to ‘n’. 
 * The array can have duplicates, which means some numbers will be missing. Find all those missing numbers.
 */

// Time complexity is O(n) from sorting and O(n) for finding missing numbers
// Space complexity is O(1)
const findMissingNumbers = (nums) => {
    const missingNumbers = [];

    let i = 0;

    while (i < nums.length) {
        let j = nums[i] - 1;

        // only swap if the value is out of place and the position we are swaping to is not already in place
        if (i !== j && nums[j] !== nums[i]) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
        else {
            i += 1;
        }
    }

    nums.forEach((value, index) => {
        if ((index + 1) !== value) {
            missingNumbers.push(index + 1);
        }
    });

    return missingNumbers;
}

let input = [2, 3, 1, 8, 2, 3, 5, 1];
console.log(`Missing numbers are [${findMissingNumbers(input)}]`);