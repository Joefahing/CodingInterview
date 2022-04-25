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
function stringAnagramsSolution(str, pattern) {
    var start_indices = [];
    var start = 0;
    var match = 0;
    var seen = new Map();
    for (var i = 0; i < pattern.length; i++) {
        var char = pattern[i];
        var charCount = seen.has(char) ? seen.get(char) : 0;
        seen.set(char, charCount + 1);
    }
    for (var end = 0; end < str.length; end++) {
        var endChar = str[end];
        if (seen.has(endChar)) {
            var endCharCount = seen.get(endChar) - 1;
            seen.set(endChar, endCharCount);
            if (endCharCount === 0) {
                match += 1;
            }
        }
        console.log("match " + match);
        if (match === pattern.length) {
            start_indices.push(end);
        }
        if (end >= pattern.length - 1) {
            var startChar = str[start];
            if (seen.has(startChar)) {
                var startCharCount = seen.get(startChar);
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
    var str = "abbcabc";
    var pattern = 'abc';
    console.log("For input " + str + " and pattern " + pattern + " start indexes are [" + stringAnagramsSolution(str, pattern) + "]");
}
stringAnagrams();
