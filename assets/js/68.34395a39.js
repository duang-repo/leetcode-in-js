(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{265:function(t,s,a){"use strict";a.r(s);var n=a(0),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_172-阶乘后的零"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_172-阶乘后的零"}},[t._v("#")]),t._v(" [172] 阶乘后的零")]),t._v(" "),a("blockquote",[a("p",[t._v("给定一个整数 n，返回 n! 结果尾数中零的数量。")]),t._v(" "),a("p",[t._v("示例 1:")]),t._v(" "),a("p",[t._v("输入: 3")]),t._v(" "),a("p",[t._v("输出: 0")]),t._v(" "),a("p",[t._v("解释: 3! = 6, 尾数中没有零。")]),t._v(" "),a("p",[t._v("示例 2:")]),t._v(" "),a("p",[t._v("输入: 5")]),t._v(" "),a("p",[t._v("输出: 1")]),t._v(" "),a("p",[t._v("解释: 5! = 120, 尾数中有 1 个零.")]),t._v(" "),a("p",[t._v("说明: 你算法的时间复杂度应为 O(log n) 。")])]),t._v(" "),a("p",[t._v("由于题目要求在O(lgn)的时间下解决，因此无法用O(n)的暴力求解完成。")]),t._v(" "),a("p",[t._v("分析后得出，个位数只有2*5能够得出末尾0，有多少对2和5就有多少个0，而任何数因数分解5的个数永远小于2的个数，")]),t._v(" "),a("p",[t._v("因此题目转化为：求解目标数字因数分解后共含有多少个5。")]),t._v(" "),a("p",[t._v("f(n) = n/5 + n/5^2 + n/5^3 + n/5^4 + n/5^5 + ... + 余数")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("trailingZeroes")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("n")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("floor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);