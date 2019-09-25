/**
You are given an n x n 2D matrix representing an image.
Rotate the image by 90 degrees (clockwise)

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

Example 1:

Given input matrix = 
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],

rotate the input matrix in-place such that it becomes:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]
Example 2:

Given input matrix =
[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
], 

rotate the input matrix in-place such that it becomes:
[
  [15,13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7,10,11]
]
 */

/**
 * 4x4
 * a[0][0] => a[0][3]
 * a[2][1] => a[1][1]
 * a[3][1] => a[1][0]
 */

// arr[x][y] => arr[y][n - 1 - x]

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  const n = matrix.length
  const result = Array(n)

  for (let i = 0; i < n; i++) {
    result[i] = Array(n)
  }

  matrix.forEach((row, x) => {
    row.forEach((col, y) => {
      result[y][n - 1 - x] = matrix[x][y]
    })
  })

  return result
}

// ************ test case ***************

const case1 = [[1,2,3],[4,5,6],[7,8,9]]

console.log(rotate(case1))
