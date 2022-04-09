/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 *
 * @param nums
 *
 *
 *
 */
// This problem involve operations 
// 1. comparing two indexes of the array and seeing if they are duplicate
// 2, updating the array 
// 3. track number of distinct element 
// Have an index that tracks current element
// Move another point that moves to the right until n[left] !== n[right]
// Have a third pointer that tracks the index we should be updating in num
// Update n[x] = n[right]
// update left to right
// move right 
function removeDuplicates(nums) {
    var slow = 0;
    var fast = 1;
    if (nums.length === 1) {
        return 1;
    }
    for (fast; fast < nums.length; fast++) {
        if (nums[slow] !== nums[fast]) {
            slow++;
            nums[slow] = nums[fast];
        }
    }
    return slow + 1;
}
;
function runRemoveDuplicate() {
    var nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    var distinct = removeDuplicates(nums);
    console.log("[0,0,1,1,1,2,2,3,3,4] will be [" + nums + "] with " + distinct + " distinct");
    console.log("The time complexity for this solution is O(n) from loop through all the numbers");
    console.log("The space complexity for this solution is O(1)");
}
runRemoveDuplicate();
