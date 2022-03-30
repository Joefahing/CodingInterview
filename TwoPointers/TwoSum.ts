/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * 
 * 
 * 
 * @param nums 
 * @param target 
 */

function twoSumBruteForce(nums: number[], target: number): number[] {

    const result: number[] = [];

    for (let i: number = 0; i < nums.length - 1; i++) {
        for (let k: number = i + 1; k < nums.length; k++) {
            if (nums[i] + nums[k] === target) {
                result.push(i);
                result.push(k);
            }
        }
    }

    return result;
};

let nums: number[] = [2, 7, 11, 15];
let target: number = 9;

console.log(`Indexes that adds up to ${target} for [${nums}] is [${twoSumBruteForce(nums, target)}]`);
console.log('The time complexity for this solution is O(n^2) from search generating pairs to find target');
console.log('The space complexity for this solution is O(1) because no variables are created');


function twoSumHashMap(nums: number[], target: number): number[] {
    const result: number[] = [];
    const indexLookup = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const findNum = target - nums[i];
        if (indexLookup.has(findNum)) {
            result.push(i);
            result.push(indexLookup.get(findNum));
            break;
        }
        else {
            indexLookup.set(nums[i], i);
        }
    }

    return result;
}

console.log(`Indexes that adds up to ${target} for [${nums}] is [${twoSumHashMap(nums, target)}]`);
console.log(`The time complexity for this solution is O(n) because we only iterate through 2n times`);
console.log(`The space complexity is O(n) as we trade off space for time by using hasmap to store indexes for faster lookup`);
