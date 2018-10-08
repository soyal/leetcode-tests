/**
 * ## 组合总和2
给定一个数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

candidates 中的每个数字在每个组合中只能使用一次。

说明：
所有数字（包括目标数）都是正整数。
解集不能包含重复的组合。 
示例 1:

输入: candidates = [10,1,2,7,6,1,5], target = 8,
所求解集为:
[
  [1, 7],
  [1, 2, 5],
  [2, 6],
  [1, 1, 6]
]
示例 2:

输入: candidates = [2,5,2,1,2], target = 5,
所求解集为:
[
  [1,2,2],
  [5]
]
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  const result = []
  const nCandidates = candidates.sort((num1, num2) => num1 - num2)

  /**
   * 用于判定是否重复
   */
  const __container = []
  function isMultiple(tempList) {
    const listStr = tempList.join('-')
    if (__container.includes(listStr)) {
      return true
    }

    __container.push(listStr)
    return false
  }
  __combinationSum2(result, [], target, nCandidates, 0, isMultiple)

  return result
}

function __combinationSum2(result, tempList, target, candidates, index, isMultiple) {
  if (target > 0) {
    for (let i = index, len = candidates.length; i < len; i++) {
      const item = candidates[i]
      if (item > target) break

      tempList.push(item)
      __combinationSum2(result, tempList, target - item, candidates, i + 1, isMultiple)
      tempList.pop()
    }
  } else if (target === 0 && !isMultiple(tempList)) {
    result.push(tempList.slice())
  }
}

// test case
const r2 = combinationSum2([1, 1], 1)
console.log('r2', r2)
const r1 = combinationSum2([10, 1, 2, 7, 6, 1, 5], 8)
console.log('r1', r1)
