// Question
// Given a string with lowercase letters only, if you are allowed to replace no more than k letters with any letter, find the length of the longest 
// substring having the same letters after replacement.

const lengthOfLongestSubstring = function (str, k)
{
    if (str.length <= k) return str.length;

    const seenChar = new Map();

    let start = 0;
    let maxLength = -Infinity;
    let maxCharCount = 0;

    for (let end = 0; end < str.length; end++)
    {
        const currentChar = str[end];
        
        let charCount = seenChar.has(currentChar) ? seenChar.get(currentChar) : 0;
        charCount += 1;
        seenChar.set(currentChar, charCount);

        maxCharCount = Math.max(maxCharCount, charCount)

        const tolerance = (end - start + 1) - maxCharCount;
        if (tolerance > k)
        {
            let startChar = str[start];
            let startCharCount = seenChar.get(startChar);
            seenChar.set(startChar, startCharCount - 1);
            start += 1;
        }

        maxLength = Math.max(maxLength, end - start + 1)
    }

    return maxLength;
}

let input = 'aabccbb';
let k = 2;
console.log(`longest repeating substring is ${lengthOfLongestSubstring(input, k)}`);

input = 'abbcb';
k = 1;
console.log(`longest repeating substring is ${lengthOfLongestSubstring(input, k)}`);

input = 'aaabccb';
k = 2;
console.log(`longest repeating substring is ${lengthOfLongestSubstring(input, k)}`);

