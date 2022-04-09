
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] 
// such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]


// Brute force approach

function threeSumBruteForce(nums: number[]): number[][] {

    if (nums.length <= 2) {
        return [];
    }

    const result: number[][] = [];

    for (let i = 0; i < nums.length - 2; i++) {
        for (let k = i + 1; k < nums.length - 1; k++) {
            for (let j = k + 1; j < nums.length; j++) {
                if ((nums[i] + nums[j] + nums[k]) === 0) {
                    result.push([nums[i], nums[j], nums[k]]);
                }
            }
        }
    }

    return result;
};

console.log(`The time complexity for brute force approach is O(n^3) from generating all the possible combinations for comparison`);


function threeSumOptize(nums: number[]): number[][] {
    // optimze by first sorting 
    // Use bidirectional to find the other two index we need 

    const result: number[][] = [];
    let current = 0;

    nums.sort((a: number, b: number) => a - b);

    for (current; current < nums.length - 2; current++) {
        let start = current + 1;
        let end = nums.length - 1;

        if (current === 0 || (current > 0 && nums[current] === nums[current + 1])) {
            // keep moving start and end if nums[start] = nums[start+1] to avoid duplicate result eg [2, -1, -1, 3]
            while (start < end) {
                let target = 0 - nums[current];
                let sum = nums[start] + nums[end];

                if (target === sum) {
                    result.push([nums[current], nums[start], nums[end]]);

                    while (start < end && nums[start] === nums[start + 1]) start++;
                    while (start < end && nums[end] === nums[end - 1]) end--;

                    start++;
                    end--;
                }
                else if (target < sum) {
                    end--;
                }
                else if (target > sum) {
                    start++;
                }
            }
        }
    }

    return result;
}

const input = [-1, 0, 1, 2, -1, -4];
console.log(`output of [${input}] is ${threeSumOptize([-1, 0, 1, 2, -1, -4])}`);
console.log(`The time complexity for optimize solution is O(n^2) for iterating through all the index and searching match using start and end index`);