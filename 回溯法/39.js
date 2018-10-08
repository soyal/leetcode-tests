/**
 * ## 组合总和
给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
candidates 中的数字可以无限制重复被选取。

说明：
所有数字（包括 target）都是正整数。
解集不能包含重复的组合。 

示例 1:
输入: candidates = [2,3,6,7], target = 7,
所求解集为:
[
  [7],
  [2,2,3]
]

示例 2:
输入: candidates = [2,3,5], target = 8,
所求解集为:
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const result = []
  const __candidates = candidates.sort((num1, num2) => num1 - num2)
  __combinationSum(result, [], target, __candidates, 0)
  return result
}

function __combinationSum(result, tempList, target, candidates, index) {
  if (target > 0) {
    for (let i = index, len = candidates.length; i < len; i++) {
      if (candidates[index] > target) break

      tempList.push(candidates[i])
      __combinationSum(
        result,
        tempList,
        target - candidates[i],
        candidates,
        i
      )
      tempList.pop()
    }
  } else if (target === 0) {
    result.push(tempList.slice())
  }
}

// test case
const list1 = combinationSum([2, 3, 6, 7], 7)
console.log(list1)
