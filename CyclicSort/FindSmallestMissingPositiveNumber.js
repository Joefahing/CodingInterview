// Question
// Given an unsorted array containing numbers, find the smallest missing positive number in it.

// Note: Positive numbers start from ‘1’.

const find_first_smallest_missing_positive = function (nums) {

    if (nums.length === 0) return 1;

    const positiveNums = nums.filter(value => value >= 1);

    let i = 0;
    let n = positiveNums.length;

    while (i < positiveNums.length) {
        let j = positiveNums[i] - 1;

        if (i != j && j < n && positiveNums[i] != positiveNums[j]) {
            [positiveNums[i], positiveNums[j]] = [positiveNums[j], positiveNums[i]];
        }
        else {
            i += 1;
        }
    }

    for (let k = 0; k < n; k++) {
        if ((positiveNums[k] - 1) != k) {
            return k + 1;
        }
    }

    return positiveNums[n - 1] + 1;
};
