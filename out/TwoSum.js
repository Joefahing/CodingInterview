/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 *
 *
 *
 * @param nums
 * @param target
 */
function twoSumBruteForce(nums, target) {
    var result = [];
    for (var i = 0; i < nums.length - 1; i++) {
        for (var k = i + 1; k < nums.length; k++) {
            if (nums[i] + nums[k] === target) {
                result.push(i);
                result.push(k);
            }
        }
    }
    return result;
}
;
var nums = [2, 7, 11, 15];
var target = 9;
console.log("Indexes that adds up to " + target + " for [" + nums + "] is [" + twoSumBruteForce(nums, target) + "]");
console.log('The time complexity for this solution is O(n^2) from search generating pairs to find target');
console.log('The space complexity for this solution is O(1) because no variables are created');
function twoSumHashMap(nums, target) {
    var result = [];
    var indexLookup = new Map();
    for (var i = 0; i < nums.length; i++) {
        var findNum = target - nums[i];
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
console.log("Indexes that adds up to " + target + " for [" + nums + "] is [" + twoSumHashMap(nums, target) + "]");
console.log("The time complexity for this solution is O(n) because we only iterate through 2n times");
console.log("The space complexity is O(n) as we trade off space for time by using hasmap to store indexes for faster lookup")