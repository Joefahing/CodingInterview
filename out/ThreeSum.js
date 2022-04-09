// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] 
// such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Brute force approach
function threeSumBruteForce(nums) {
    if (nums.length <= 2) {
        return [];
    }
    var result = [];
    for (var i = 0; i < nums.length - 2; i++) {
        for (var k = i + 1; k < nums.length - 1; k++) {
            for (var j = k + 1; j < nums.length; j++) {
                if ((nums[i] + nums[j] + nums[k]) === 0) {
                    result.push([nums[i], nums[j], nums[k]]);
                }
            }
        }
    }
    return result;
}
;
console.log("The time complexity for brute force approach is O(n^3) from generating all the possible combinations for comparison");
function threeSumOptize(nums) {
    // optimze by first sorting 
    // Use bidirectional to find the other two index we need 
    var result = [];
    var current = 0;
    nums.sort(function (a, b) { return a - b; });
    for (current; current < nums.length - 2; current++) {
        var start = current + 1;
        var end = nums.length - 1;
        if (current === 0 || (current > 0 && nums[current] === nums[current + 1])) {
            // keep moving start and end if nums[start] = nums[start+1] to avoid duplicate result eg [2, -1, -1, 3]
            while (start < end) {
                var target_1 = 0 - nums[current];
                var sum = nums[start] + nums[end];
                if (target_1 === sum) {
                    result.push([nums[current], nums[start], nums[end]]);
                    while (start < end && nums[start] === nums[start + 1])
                        start++;
                    while (start < end && nums[end] === nums[end - 1])
                        end--;
                    start++;
                    end--;
                }
                else if (target_1 < sum) {
                    end--;
                }
                else if (target_1 > sum) {
                    start++;
                }
            }
        }
    }
    return result;
}
var input = [-1, 0, 1, 2, -1, -4];
console.log("output of [" + input + "] is " + threeSumOptize([-1, 0, 1, 2, -1, -4]));
