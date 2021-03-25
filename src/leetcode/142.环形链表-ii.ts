/*
 * @lc app=leetcode.cn id=142 lang=typescript
 *
 * [142] 环形链表 II
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

// function detectCycle(head: ListNode | null): ListNode | null {
//   const set = new Set<ListNode>();
//   let node = head;
//   while (node) {
//     if (set.has(node)) {
//       return node;
//     } else {
//       set.add(node);
//       node = node.next;
//     }
//   }
//   return null;
// }

function detectCycle(head: ListNode | null): ListNode | null {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      break;
    }
  }

  // 没有环
  if (!fast || !fast.next) return null;

  // 有环
  let p = head;
  while (p !== slow) {
    p = p.next;
    slow = slow.next;
  }

  return p;
}

// @lc code=end
