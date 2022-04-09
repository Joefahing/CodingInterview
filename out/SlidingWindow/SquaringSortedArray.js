/**
 * Given a sorted array,
 * create a new array containing squares of all the numbers of the input array in the sorted order.
 *
 */
function squareSortedArrayBruteForce(nums) {
    if (nums.length === 0) {
        return [];
    }
    var squares = [];
    var sortedSquares;
    for (var index = 0; index < nums.length; index++) {
        squares.push(nums[index] * nums[index]);
    }
    sortedSquares = squares.sort(function (a, b) { return a - b; });
    return sortedSquares;
}
function squareSortedArrayOptimized(nums) {
    var squares = new Array(nums.length);
    var start = 0;
    var end = nums.length - 1;
    var currentIndex = end;
    while (start <= end) {
        var leftSquare = nums[start] * nums[start];
        var rightSquare = nums[end] * nums[end];
        if (leftSquare > rightSquare) {
            squares[currentIndex] = leftSquare;
            start += 1;
        }
        else {
            squares[currentIndex] = rightSquare;
            end -= 1;
        }
        currentIndex--;
    }
    return squares;
}
var execSquareSortedArray = function () {
    var nums = [-2, -1, 0, 2, 3];
    console.log("The result of bruteforce solution with input [" + nums + "] is [" + squareSortedArrayBruteForce(nums) + "]");
    console.log("The time complexity is O(nlogn) from sorting");
    console.log("The space complexity is O(n) from storing sortedSquares");
    console.log("The result of optimized solution with input [" + nums + "] is [" + squareSortedArrayOptimized(nums) + "]");
    console.log("The time complexity is O(n) from iterating through all the values");
    console.log("The space complexity is O(n) from storing sortedSquares");
};
execSquareSortedArray();
