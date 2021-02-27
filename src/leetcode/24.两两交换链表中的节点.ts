/*
 * @lc app=leetcode.cn id=24 lang=typescript
 *
 * [24] 两两交换链表中的节点
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

// // 递归
// function swapPairs(head: ListNode | null): ListNode | null {
//   if (!head || !head.next) return head;

//   let next = head.next;

//   head.next = swapPairs(next.next);

//   next.next = head;

//   return next;
// }

// 迭代
function swapPairs(head: ListNode | null): ListNode | null {
  const dummyHead = new ListNode();
  dummyHead.next = head;
  let pre = dummyHead;
  let current = head;

  while (current && current.next) {
    let next = current.next;
    current.next = next.next;
    next.next = current;
    pre.next = next;

    pre = current;
    current = current.next;
  }

  return dummyHead.next;
}

// @lc code=end
