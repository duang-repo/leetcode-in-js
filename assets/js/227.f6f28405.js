(window.webpackJsonp=window.webpackJsonp||[]).push([[227],{546:function(v,_,t){"use strict";t.r(_);var a=t(25),s=Object(a.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"双指针问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#双指针问题"}},[v._v("#")]),v._v(" 双指针问题")]),v._v(" "),_("p",[v._v("这类题型的涉及面非常广，从原地遍历到二分查询都有着该问题的缩影。")]),v._v(" "),_("p",[v._v("但是这里，我将双指针的类型分为两类，首尾指针和快慢指针。可以通过这两类问题的思路来举一反三，通解这一类题型。")]),v._v(" "),_("h2",{attrs:{id:"快慢指针"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#快慢指针"}},[v._v("#")]),v._v(" 快慢指针")]),v._v(" "),_("p",[v._v("这一题型在链表问题中十分常用。")]),v._v(" "),_("p",[v._v("例如经典的判断链表是否存在环的问题：[141] 环形链表 与 [142] 环形链表 II，实际上就是通过有速度差的快慢指针是否相遇来解决的。")]),v._v(" "),_("p",[v._v("再例如如果要删除链表中的一个节点，那么必然需要两个指针，一个指向被删的前一个节点，一个指向后一个节点。这实际上也是快慢指针的一个用法。")]),v._v(" "),_("p",[v._v("相关题型可见：")]),v._v(" "),_("ol",[_("li",[_("code",[v._v("[141] 环形链表")])]),v._v(" "),_("li",[_("code",[v._v("[142] 环形链表 II")])])]),v._v(" "),_("h2",{attrs:{id:"首尾指针"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#首尾指针"}},[v._v("#")]),v._v(" 首尾指针")]),v._v(" "),_("p",[v._v("首尾指针的应用范围就更广了，例如最经典的二分查找、归并排序算法，其中都是依靠着对每一个部分进行首尾指针相关的操作，来缩小解题范围，最终逼近确定值的过程。")]),v._v(" "),_("p",[v._v("首尾指针的题型有很多，大体可以分为两类，一类是同向双指针问题，一类是反向双指针问题。")]),v._v(" "),_("p",[v._v("同向双指针问题即为滑动窗口问题，指针初始化在窗口的首尾两侧。本质上就是判断一个区间内的元素是否满足某种条件，如果满足则缩小左边界，如果不满足则扩大右边界。我们会单开一个专题来讲解这一类问题。")]),v._v(" "),_("p",[v._v("反向双指针问题其实更符合首尾指针的定义，即指针初始化在数组的两端，然后向中间移动。这类问题一般是求最值问题，例如求最长回文子串、求最小覆盖子串等。")]),v._v(" "),_("ol",[_("li",[_("code",[v._v("[125] 验证回文串")])]),v._v(" "),_("li",[_("code",[v._v("[344] 反转字符串")])])])])}),[],!1,null,null,null);_.default=s.exports}}]);