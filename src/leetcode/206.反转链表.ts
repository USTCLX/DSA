/*
 * @lc app=leetcode.cn id=206 lang=typescript
 *
 * [206] 反转链表
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

// 迭代反转链表
// function reverseList(head: ListNode | null): ListNode | null {
//   if (!head) return head;

//   let pre = null;
//   let current = head;

//   while (current) {
//     const next = current.next;
//     current.next = pre;
//     pre = current;
//     current = next;
//   }

//   return pre;
// }

// 递归法
function reverseList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;

  // 新的头节点
  const p = reverseList(head.next);

  // 将 n1->n2 这样的链表反转，得到n2->n1
  head.next.next = head;
  // 断开n1->n2 的连接
  head.next = null;

  // 一直返回新的头节点
  return p;
}
// @lc code=end
