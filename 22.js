/**
 * ## 22.括号生成
  给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。
  例如，给出 n = 3，生成结果为：
  [
    "((()))",
    "(()())",
    "(())()",
    "()(())",
    "()()()"
  ]
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const list = []
  __generateParenthesis(list, '', 0, 0, n)
  return list
}

/**
 *
 * @param {Array} list
 * @param {number} openNum
 * @param {number} closeNum
 * @param {number} perCount 括号对数
 */
function __generateParenthesis(list, str, openNum, closeNum, perCount) {
  if (str.length === perCount * 2) {
    list.push(str)
    return
  }

  if (openNum < perCount) {
    __generateParenthesis(list, str + '(', openNum + 1, closeNum, perCount)
  }

  if (closeNum < openNum) {
    __generateParenthesis(list, str + ')', openNum, closeNum + 1, perCount)
  }
}

// test case
const list1 = generateParenthesis(3)
console.log(list1)