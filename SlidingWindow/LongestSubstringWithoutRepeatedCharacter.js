/**
3. Longest Substring Without Repeating Characters
    
Given a string s, find the length of the longest substring without repeating characters.
*/


const lengthOfLongestSubstringBruteForce = function (s) {
    // two problems
    // 1. Find the all the combinations of substring with different size
    // 2. validating whether the substring contain distinct characters

    if (s.length === 1) {
        return 1;
    }

    let longestLength = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < s.length; j++) {
            let substring = '';
            let substringLength = 0;

            for (let k = i; k <= j; k++) {
                substringLength++;
                substring = substring + s[k];
            }

            const checker = new Set(substring);

            if (checker.size === substringLength) {
                longestLength = Math.max(longestLength, substringLength);
            }
        }
    }

    if (longestLength === Number.NEGATIVE_INFINITY) {
        return 1;
    }

    return longestLength;
}

let s = "pwwkewd";
console.log(`Longest length for ${s} is ${lengthOfLongestSubstringBruteForce(s)}`);
console.log('The time complexity for brute force solution is O(n^3)');
console.log('The space complexity for brute force solution is O(n)');

const lengthOfLongestSubstringOptimal = function (s) {

    if (s.length <= 1) {
        return s.length;
    }

    const seen = new Map();
    let longestSubstring = 1;
    let currentLength = 0;
    let end = 0;
    let start = 0;


    for (end; end < s.length; end++) {
        currentLength++;

        const endChar = s[end];

        if (!seen.has(endChar)) {
            seen.set(endChar, 0);
        }

        let count = seen.get(endChar);
        count++;
        seen.set(endChar, count);

        while (seen.get(endChar) > 1) {
            const startChar = s[start];
            let currentSeen = seen.get(startChar);

            if (currentSeen > 1) {
                currentSeen--;
                seen.set(startChar, currentSeen);
            }
            else {
                seen.delete(startChar);
            }

            start++;
            currentLength--;
        }

        longestSubstring = Math.max(currentLength, longestSubstring);
    }

    return longestSubstring;
}

s = "pwwkewd";
console.log(`Longest length for ${s} is ${lengthOfLongestSubstringOptimal(s)}`);
s = 'bbbbb';
console.log(`Longest length for ${s} is ${lengthOfLongestSubstringOptimal(s)}`);
s = 'tmmzuxt';
console.log(`Longest length for ${s} is ${lengthOfLongestSubstringOptimal(s)}`);


// console.log('The time complexity for brute force solution is O(n^3)');
// console.log('The space complexity for brute force solution is O(n)');

