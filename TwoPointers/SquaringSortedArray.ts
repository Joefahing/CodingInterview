/**
 * Given a sorted array, 
 * create a new array containing squares of all the numbers of the input array in the sorted order.
 * 
 */

function squareSortedArrayBruteForce(nums: number[]): number[] {
    if (nums.length === 0) {
        return [];
    }

    const squares: number[] = [];
    let sortedSquares: number[];

    for (let index: number = 0; index < nums.length; index++) {
        squares.push(nums[index] * nums[index]);
    }

    sortedSquares = squares.sort((a: number, b: number) => a - b);

    return sortedSquares;
}

function squareSortedArrayOptimized(nums: number[]): number[] {
    const squares: number[] = new Array(nums.length);
    let start = 0;
    let end = nums.length - 1;
    let currentIndex = end;

    while (start <= end) {
        const leftSquare: number = nums[start] * nums[start];
        const rightSquare: number = nums[end] * nums[end];

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

const execSquareSortedArray = function () {
    const nums: number[] = [-2, -1, 0, 2, 3];
    console.log(`The result of bruteforce solution with input [${nums}] is [${squareSortedArrayBruteForce(nums)}]`);
    console.log(`The time complexity is O(nlogn) from sorting`);
    console.log(`The space complexity is O(n) from storing sortedSquares`);

    console.log(`The result of optimized solution with input [${nums}] is [${squareSortedArrayOptimized(nums)}]`);
    console.log(`The time complexity is O(n) from iterating through all the values`);
    console.log(`The space complexity is O(n) from storing sortedSquares`);
}

execSquareSortedArray();