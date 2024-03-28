// Ds/Algorithm
// 1: Find Missing Number
// Question: Given an array of integers from 1 to n with one missing number, find the missing number.
// Explanation:
// One approach is to calculate the sum of integers from 1 to n using the formula (n * (n + 1)) / 2.
// Then, iterate through the given array and calculate the sum of all elements.
// The missing number can be found by subtracting the sum of array elements from the sum of integers
// from 1 to n.

function findMissingNumber(arr) {
    const n = arr.length + 1;
    const totalSum = (n * (n + 1)) / 2;
    const arraySum = arr.reduce((acc, num) => acc + num, 0);
    return totalSum - arraySum;
}

const inputArray1 = [1, 2, 3, 4, 6, 7, 8];
console.log("Missing Number:", findMissingNumber(inputArray1));

// 2: Remove Duplicates
// Question: Given a sorted array, remove the duplicates in-place such that each element appears only
// once and returns the new length.
// Explanation:
// Start with two pointers, i and j, initially pointing to the first two elements of the array.
// Iterate through the array with the pointer j, comparing each element with the element at index i.
// If the element at index j is different from the element at index i, increment i and update the element at
// index i with the element at index j.
// Continue this process until j reaches the end of the array. The length of the array up to index i will be
// the new length without duplicates.

function removeDuplicates(nums) {
    if (nums.length === 0) return 0;
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
}

const inputArray2 = [1, 1, 2, 2, 3, 4, 4, 5];
const newLength = removeDuplicates(inputArray2);
console.log("New Length:", newLength);

// 3. Recursion Question: Factorial
// Question: Write a recursive function to find the factorial of a non-negative integer n.
// Explanation:
// The factorial of a non-negative integer n is the product of all positive integers less than or equal to n.
// Base case: If n is 0 or 1, return 1 (the factorial of 0 and 1 is 1).
// Recursive step: Multiply n by the factorial of n - 1 (i.e., n * factorial(n - 1)).

function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

const n = 5;
console.log("Factorial of", n + ":", factorial(n));


// 4. Rotate Array
// Question: Given an array and an integer k, rotate the array to the right by k steps.
// Explanation:
// Given an array and an integer k, we want to move the last k elements of the array to the front.
// We can achieve this by performing the following steps:
// ● Reverse the entire array.
// ● Reverse the first k elements.
// ● Reverse the remaining elements.

function rotateArray(arr, k) {
    const reverseArray = (start, end) => {
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    };

    const n = arr.length;
    k = k % n; // Handle cases where k is larger than array length
    reverseArray(0, n - 1);
    reverseArray(0, k - 1);
    reverseArray(k, n - 1);
    return arr;
}

const inputArray3 = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
console.log("Rotated Array:", rotateArray(inputArray3, k));
