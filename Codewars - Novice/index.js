// 1. Complete the solution so that it reverses the string passed into it.
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str) {
    const splitWord = str.split("") // Split the word in letters, then save them into an Array.
    const reverseOrder = splitWord.reverse() // Reverse the order of the Array.
    const joinLetters = reverseOrder.join("") // Finally, group the letters of the Array, in order to form the reversed word.
    return joinLetters // Return the result (reversed word)
}

solution("world")

// 2. Create a function with two arguments that will return an array of the first n multiples of x.
// Assume both the given number and the number of times to count will be positive numbers greater than 0.
// Return the results as an array or list ( depending on language ).

// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]

function countBy(x, n) {
    let z = [];
    for (i = 1; i <= n; i++)
        z.push(x * i)
    return z
}

countBy(1, 10)
countBy(2, 5)

// 3. Implement a function which convert the given boolean value into its string representation.

// 4. In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
// *The number can be negative already, in which case no change is required.
// *Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

function makeNegative(num) {
    if (num === 0) {
        return 0
    } else {
        const negative = -Math.abs(num)
        return negative
    }
}

makeNegative(42)

// 5. Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// [1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
// [1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
// [] --> []

// You can assume that all values are integers. Do not mutate the input array.

function invert(array) {
    const negativeList = array.map(function (n) { return -n })
    return negativeList
}


