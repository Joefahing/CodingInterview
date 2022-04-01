/**

Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.
The tests are generated such that there is exactly one solution. You may not use the same element twice.
Your solution must use only constant extra space.

*/
function twoSumSortedBruteForce(num, target) {
    // Finding the correct combination of pair that matches some number
    var match = [];
    for (var i = 0; i < num.length - 1; i++) {
        for (var k = i + 1; k < num.length; k++) {
            var sum = num[i] + num[k];
            if (sum === target) {
                match.push(i + 1, k + 1);
                return match;
            }
        }
    }
    return;
}
function twoSumSortedOptimized(num, target) {
    // A lot of repeative operation on generating combinations for comparison 
    // Utilize sorted input
    // Target has to be within the range of index  0..n
    // if n[i] + n[k] > target, move right pointer to left which will decrease the sum
    // if n[i] + n[k] < target, move left pointer to the right which increase the sum
    var match = [];
    var left = 0;
    var right = num.length - 1;
    while (left < right) {
        var sum = num[left] + num[right];
        if (sum === target) {
            match.push(left + 1, right + 1);
            break;
        }
        else if (sum > target) {
            right--;
        }
        else if (sum < target) {
            left++;
        }
    }
    return match;
}
function twoSumSorted() {
    var numbers = [2, 7, 11, 15];
    var target = 17;
    console.log("The indexes for numbers " + numbers + " with target " + target + " is " + twoSumSortedBruteForce(numbers, target));
    console.log("The time complexity for brute force solution is O(n^2) for running two for loop");
    console.log("The space complexity for brute force solution is O(1) because size of match is always 2");
    console.log("The indexes for numbers " + numbers + " with target " + target + " is " + twoSumSortedOptimized(numbers, target));
    numbers = [-1, 0];
    target = -1;
    console.log("The indexes for numbers " + numbers + " with target " + target + " is " + twoSumSortedOptimized(numbers, target));
}
twoSumSorted();
