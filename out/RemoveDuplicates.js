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
function removeDuplicates(nums) {
    // Have an index that tracks current element
    // Move another point that moves to the right until n[left] !== n[right]
    // Have a third pointer that tracks the index we should be updating in num
    // Update n[x] = n[right]
    // update left to right
    // move right 
    var slow = 0;
    var fast = 1;
    var updatePointer = 1;
    var distinctNum = 1;
    if (nums.length === 1) {
        return distinctNum;
    }
    for (fast; fast < nums.length; fast++) {
        if (nums[slow] === nums[fast]) {
            continue;
        }
        // we have a distinct number
        nums[updatePointer] = nums[fast];
        slow = fast;
        updatePointer++;
        distinctNum++;
    }
    return distinctNum;
}
;
function runRemoveDuplicate() {
    var nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    var distinct = removeDuplicates(nums);
    console.log("[0,0,1,1,1,2,2,3,3,4] will be [" + nums + "] with " + distinct + " distinct");
}
runRemoveDuplicate();
