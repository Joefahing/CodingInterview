// Given a string and a pattern, find all anagrams of the pattern in the given string.

// Every anagram is a permutation of a string. As we know, when we are not allowed to repeat characters while finding permutations of a string, we get N!
// N!
//  permutations (or anagrams) of a string having N
// N
//  characters. For example, here are the six anagrams of the string “abc”:

// abc
// acb
// bac
// bca
// cab
// cba
// Write a function to return a list of starting indices of the anagrams of the pattern in the given string.

// Space Complexity for this approach is O(1) although map is use because there are constant number of characters
// Time Complexity for this approach is O(n + m) n for iterating through str and m for initalizing pattern
function stringAnagramsSolution(str: string, pattern: string): number[] {

    const start_indices: number[] = [];

    if (pattern.length > str.length) {
        return start_indices;
    }

    let start: number = 0;
    let match: number = 0;
    const seen = new Map<string, number>();

    // Initializing map to keep track of current character count
    for (let i: number = 0; i < pattern.length; i++) {
        let char: string = pattern[i];
        const charCount: number = seen.has(char) ? seen.get(char) : 0;
        seen.set(char, charCount + 1);
    }

    for (let end: number = 0; end < str.length; end++) {
        const endChar: string = str[end];

        // For each character slid to the left, keep track of current matching count 
        if (seen.has(endChar)) {
            const endCharCount: number = seen.get(endChar) - 1;
            seen.set(endChar, endCharCount);

            // If endCharCount = 0 we know current substring includes the char 
            if (endCharCount === 0) {
                match += 1;
            }
        }

        if (match === pattern.length) {
            start_indices.push(end);
        }

        // Shrink end window 
        // [a, a, b, c] a count will have -1 at aab, so after the shift a = 0 again
        if (end >= pattern.length - 1) {
            const startChar: string = str[start];

            if (seen.has(startChar)) {
                const startCharCount: number = seen.get(startChar);
                if (startCharCount === 0) {
                    match -= 1;
                }
                seen.set(startChar, startCharCount + 1);
            }

            start += 1;
        }
    }

    return start_indices;
}

function stringAnagrams() {
    let str: string = "abbcabc";
    let pattern: string = 'abc';

    console.log(`For input ${str} and pattern ${pattern} start indexes are [${stringAnagramsSolution(str, pattern)}]`);
}

stringAnagrams();

