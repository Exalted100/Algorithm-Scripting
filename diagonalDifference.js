/*
Problem: https://www.hackerrank.com/challenges/diagonal-difference/problem

Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix arr is shown below:

1 2 3
4 5 6
9 8 9  
The left-to-right diagonal = 1 + 5 + 9 = 15. The right to left diagonal = 3 + 5 + 9 = 17. Their absolute difference is 15 - 17 = 2.

Function description

Complete the diagonalDifference function in the editor below.
*/

function diagonalDifference(arr) {
    // Write your code here
    let difference = (arr[0][0] + arr [1][1] + arr[2][2]) - (arr[0][2] + arr[1][1] + arr[2][0])
    return Math.abs(difference)
}