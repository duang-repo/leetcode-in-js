/*
 * @lc app=leetcode.cn id=4 lang=typescript
 *
 * [4] 寻找两个正序数组的中位数
 *
 * https://leetcode.cn/problems/median-of-two-sorted-arrays/description/
 *
 * algorithms
 * Hard (42.32%)
 * Likes:    7147
 * Dislikes: 0
 * Total Accepted:    1.1M
 * Total Submissions: 2.7M
 * Testcase Example:  '[1,3]\n[2]'
 *
 * 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。
 *
 * 算法的时间复杂度应该为 O(log (m+n)) 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums1 = [1,3], nums2 = [2]
 * 输出：2.00000
 * 解释：合并数组 = [1,2,3] ，中位数 2
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums1 = [1,2], nums2 = [3,4]
 * 输出：2.50000
 * 解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5
 *
 *
 *
 *
 *
 *
 * 提示：
 *
 *
 * nums1.length == m
 * nums2.length == n
 * 0 <= m <= 1000
 * 0 <= n <= 1000
 * 1 <= m + n <= 2000
 * -10^6 <= nums1[i], nums2[i] <= 10^6
 *
 *
 */

// @lc code=start
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  let p1 = 0;
  let p2 = 0;
  let p = 0;
  const len1 = nums1.length;
  const len2 = nums2.length;
  const len = len1 + len2;
  const nums: number[] = [];
  while (p1 < len1 && p2 < len2) {
    if (nums1[p1] < nums2[p2]) {
      nums[p] = nums1[p1];
      p1 += 1;
    } else {
      nums[p] = nums2[p2];
      p2 += 1;
    }
    p += 1;
  }
  while (p1 < len1) {
    nums[p] = nums1[p1];
    p1 += 1;
    p += 1;
  }
  while (p2 < len2) {
    nums[p] = nums2[p2];
    p2 += 1;
    p += 1;
  }

  const mid = Math.floor(len / 2);
  if (len % 2 === 0) {
    return (nums[mid - 1] + nums[mid]) / 2;
  }
  return nums[mid];
}
// @lc code=end

const nums1 = [1, 3, 4, 9],
  nums2 = [2, 5, 6, 7, 8];
console.log(findMedianSortedArrays(nums1, nums2));

// function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
//   let p1 = 0;
//   let p2 = 0;
//   let p = 0;
//   const len1 = nums1.length;
//   const len2 = nums2.length;
//   const len = len1 + len2;
//   const nums: number[] = [];
//   while (p1 < len1 && p2 < len2) {
//     if (nums1[p1] < nums2[p2]) {
//       nums[p] = nums1[p1];
//       p1 += 1;
//     } else {
//       nums[p] = nums2[p2];
//       p2 += 1;
//     }
//     p += 1;
//   }
//   while (p1 < len1) {
//     nums[p] = nums1[p1];
//     p1 += 1;
//     p += 1;
//   }
//   while (p2 < len2) {
//     nums[p] = nums2[p2];
//     p2 += 1;
//     p += 1;
//   }

//   const mid = Math.floor(len / 2);
//   if (len % 2 === 0) {
//     return (nums[mid - 1] + nums[mid]) / 2;
//   }
//   return nums[mid];
// }
