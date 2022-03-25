/**
904. Fruit Into Baskets
    You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array fruits where fruits[i] is the type of fruit the ith tree produces.

    You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:

    You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the amount of fruit each basket can hold.
    Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right. The picked fruits must fit in one of your baskets.
    Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
    Given the integer array fruits, return the maximum number of fruits you can pick.
 */

// Brute force solution
const totalFruitBruteForce = function (fruits = []) {

    let maxFruit = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < fruits.length; i++) {
        for (let k = i; k < fruits.length; k++) {
            let currentSize = 0;
            const fruitChecker = new Set();

            for (let j = i; j <= k; j++) {
                currentSize++;
                fruitChecker.add(fruits[j]);
            }

            if (fruitChecker.size <= 2) {
                maxFruit = Math.max(maxFruit, currentSize);
            }
        }
    }
    return maxFruit;
}
const fruit = [3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4];
console.log(`Expected result: 5, Actual result: ${totalFruitBruteForce(fruit)}`);
console.log('Time complexity is O(n^3)');
console.log('Space conplexity is O(n) because I created a set');

//Sliding Window
var totalFruit = function (fruits) {

    if (fruits.length <= 2) {
        return fruits.length;
    }

    const fruitChecker = new Map();
    let start = 0;
    let end = 0;
    let maxFruit = Number.NEGATIVE_INFINITY;


    let currentLength = 0;
    for (end; end < fruits.length; end++) 
    {
        currentLength++;

        const fruitAtEnd = fruits[end];
        if (!fruitChecker.has(fruitAtEnd)) 
        {
            fruitChecker.set(fruitAtEnd, 1);
        }
        else 
        {
            const num = fruitChecker.get(fruitAtEnd);
            fruitChecker.set(fruitAtEnd, num + 1);
        }

        while (fruitChecker.size > 2) {
            
            let fruitAtStart =  fruits[start]

            if (fruitChecker.get(fruitAtStart) === 1) 
            {
                fruitChecker.delete(fruitAtStart)
            }
            else 
            {
                const num = fruitChecker.get(fruitAtStart);
                fruitChecker.set(fruitAtStart, num - 1);
            }

            currentLength--;
            start++;
        }

        maxFruit = Math.max(maxFruit, currentLength);
    }

    return maxFruit;
};

console.log('Time complexity is O(n)');
console.log('Space conplexity is O(n) because I created a Map to check number of distinct fruit');