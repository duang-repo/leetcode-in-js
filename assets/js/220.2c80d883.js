(window.webpackJsonp=window.webpackJsonp||[]).push([[220],{538:function(v,_,o){"use strict";o.r(_);var e=o(25),t=Object(e.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"动态规划-子序列问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#动态规划-子序列问题"}},[v._v("#")]),v._v(" 动态规划 - 子序列问题")]),v._v(" "),_("p",[v._v("之前说过，遇到求极值的问题我们首先可以考虑是否可以使用动态规划来解。")]),v._v(" "),_("p",[v._v("例如求最长子序列的系列问题。")]),v._v(" "),_("p",[v._v("首先最重要的一步是审题。注意最长"),_("strong",[v._v("子序列")]),v._v("与最长"),_("strong",[v._v("子数组")]),v._v("之间的区分，最长子数组要求连成的序列是"),_("strong",[v._v("连续")]),v._v("的，而子序列是可以跳过子数组中某些元素的。")]),v._v(" "),_("p",[v._v("像这类问题，通常是设 "),_("code",[v._v("dp[i]")]),v._v(" 为以 "),_("code",[v._v("nums[i]")]),v._v(" 结尾的子序列的最值的求值结果。而既然是求子数组，那么通常 dp 数组就仅与 "),_("code",[v._v("dp[i-1]")]),v._v(" 相关。若是求子序列，则 "),_("code",[v._v("dp[i]")]),v._v(" 的结果可能需要遍历从 0 到 i 中的 dp 数组 ，取出其中的最大值来求解。")]),v._v(" "),_("p",[v._v("参考题型：")]),v._v(" "),_("ol",[_("li",[_("code",[v._v("[300] 最长递增子序列")])]),v._v(" "),_("li",[_("code",[v._v("[674] 最长连续递增序列")])]),v._v(" "),_("li",[_("code",[v._v("[718] 最长重复子数组")])]),v._v(" "),_("li",[_("code",[v._v("[1143] 最长公共子序列")])]),v._v(" "),_("li",[_("code",[v._v("[647] 回文子串")])]),v._v(" "),_("li",[_("code",[v._v("[516] 最长回文子序列")])]),v._v(" "),_("li",[_("code",[v._v("[53] 最大子序和")])]),v._v(" "),_("li",[_("code",[v._v("[583] 两个字符串的删除操作")])]),v._v(" "),_("li",[_("code",[v._v("[72] 编辑距离")])])])])}),[],!1,null,null,null);_.default=t.exports}}]);