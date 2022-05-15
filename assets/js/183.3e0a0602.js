(window.webpackJsonp=window.webpackJsonp||[]).push([[183],{596:function(t,n,s){"use strict";s.r(n);var v=s(62),_=Object(v.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"动态规划-子序列问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#动态规划-子序列问题"}},[t._v("#")]),t._v(" 动态规划 - 子序列问题")]),t._v(" "),s("p",[t._v("之前说过，遇到求极值的问题我们首先可以考虑是否可以使用动态规划来解。")]),t._v(" "),s("p",[t._v("例如求最长子序列的系列问题。")]),t._v(" "),s("p",[t._v("首先最重要的一步是审题。注意最长"),s("strong",[t._v("子序列")]),t._v("与最长"),s("strong",[t._v("子数组")]),t._v("之间的区分，最长子数组要求连成的序列是"),s("strong",[t._v("连续")]),t._v("的，而子序列是可以跳过子数组中某些元素的。")]),t._v(" "),s("p",[t._v("像这类问题，通常是设 dp[i] 为以 nums[i] 结尾的子序列的最值的求值结果。而既然是求子数组，那么通常 dp 数组就仅与 dp[i-1] 相关。若是求子序列，则dp[i] 的结果可能需要遍历从 0 到 i 中的 dp ，取出其中的最大值来求解。")]),t._v(" "),s("p",[t._v("参考题型：")]),t._v(" "),s("p",[t._v("[300] 最长递增子序列\n[674] 最长连续递增序列\n[718] 最长重复子数组\n[1143] 最长公共子序列\n[647] 回文子串\n[516] 最长回文子序列\n[53] 最大子序和\n[583] 两个字符串的删除操作\n[72] 编辑距离")])])}),[],!1,null,null,null);n.default=_.exports}}]);