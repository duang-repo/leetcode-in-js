/*
 * @lc app=leetcode.cn id=712 lang=typescript
 *
 * [712] 两个字符串的最小ASCII删除和
 *
 * https://leetcode-cn.com/problems/minimum-ascii-delete-sum-for-two-strings/description/
 *
 * algorithms
 * Medium (67.57%)
 * Likes:    260
 * Dislikes: 0
 * Total Accepted:    20.2K
 * Total Submissions: 29.8K
 * Testcase Example:  '"sea"\n"eat"'
 *
 * 给定两个字符串s1 和 s2，返回 使两个字符串相等所需删除字符的 ASCII 值的最小和 。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: s1 = "sea", s2 = "eat"
 * 输出: 231
 * 解释: 在 "sea" 中删除 "s" 并将 "s" 的值(115)加入总和。
 * 在 "eat" 中删除 "t" 并将 116 加入总和。
 * 结束时，两个字符串相等，115 + 116 = 231 就是符合条件的最小和。
 *
 *
 * 示例 2:
 *
 *
 * 输入: s1 = "delete", s2 = "leet"
 * 输出: 403
 * 解释: 在 "delete" 中删除 "dee" 字符串变成 "let"，
 * 将 100[d]+101[e]+101[e] 加入总和。在 "leet" 中删除 "e" 将 101[e] 加入总和。
 * 结束时，两个字符串都等于 "let"，结果即为 100+101+101+101 = 403 。
 * 如果改为将两个字符串转换为 "lee" 或 "eet"，我们会得到 433 或 417 的结果，比答案更大。
 *
 *
 *
 *
 * 提示:
 *
 *
 * 0 <= s1.length, s2.length <= 1000
 * s1 和 s2 由小写英文字母组成
 *
 *
 */

// @lc code=start
function minimumDeleteSum(s1: string, s2: string): number {
  const len1 = s1.length;
  const len2 = s2.length;
  const dp = Array(len1 + 1)
    .fill(0)
    .map(x => Array(len2 + 1).fill(Number.MAX_SAFE_INTEGER));
  dp[0][0] = 0;
  for (let i = 1; i <= len1; i++) {
    dp[i][0] = dp[i - 1][0] + s1[i - 1].charCodeAt(0);
  }
  for (let j = 1; j <= len2; j++) {
    dp[0][j] = dp[0][j - 1] + s2[j - 1].charCodeAt(0);
  }

  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      const ch1 = s1[i - 1];
      const ch2 = s2[j - 1];
      if (ch1 === ch2) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j] + ch1.charCodeAt(0), dp[i][j - 1] + ch2.charCodeAt(0));
      }
    }
  }

  return dp[len1][len2];
}
// @lc code=end

(() => {
  const s1 = 'eat',
    s2 = 'sea';
  console.log(minimumDeleteSum(s1, s2));
})();
