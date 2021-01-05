/*
 * @lc app=leetcode.cn id=19 lang=typescript
 *
 * [19] 删除链表的倒数第N个节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// 快慢指针
// 快指针先走n步，然后慢指针开始走
// 当快指针先到达尾节点时，慢指针删除后面的元素即可
// 特殊case1: [1] 1 => [] 最后返回了空节点
// 特殊case2: [1,2] 2 => [2]。此时应该更新head节点。
// 干脆创建一个辅助节点，该节点的next指向head，slow和fast均从该节点出发.这是完美的方案

// 看完leetcode的讲解
// 原来辅助节点可以称为哑节点（dummy node）
// 同样可以使用栈来解决问题，依次入栈，然后弹出n个，此时的栈顶元素就是所需要的前驱节点
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (!head) return head;
  const dummy = new ListNode(null, head);

  let slow = dummy;
  let fast = dummy;

  // 快指针先走n步
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  // 快慢指针一起前进
  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  // 删除节点
  slow.next = slow.next.next;

  return dummy.next;
}
// @lc code=end
