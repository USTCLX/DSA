/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
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

// function addTwoNumbers(
//   l1: ListNode | null,
//   l2: ListNode | null
// ): ListNode | null {
//   let p1 = l1;
//   let p2 = l2;
//   let head = new ListNode();
//   let p = head;
//   let add = 0;

//   while (p1 || p2 || add) {
//     const v1 = p1 ? p1.val : 0;
//     const v2 = p2 ? p2.val : 0;
//     // current val
//     const v = (v1 + v2 + add) % 10;
//     // next add
//     add = Math.floor((v1 + v2 + add) / 10);

//     p.next = new ListNode(v);
//     p = p.next;
//     p1 = p1 ? p1.next : p1;
//     p2 = p2 ? p2.next : p2;
//   }

//   return head.next;
// }

// 第二遍做啦
function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let head = new ListNode();
  let p = head;
  let add = 0;
  while (l1 || l2 || add) {
    p.next = new ListNode();
    p = p.next;
    const v1 = l1 ? l1.val : 0;
    const v2 = l2 ? l2.val : 0;
    const val = v1 + v2 + add;
    p.val = val % 10;
    add = Math.floor(val / 10);

    l1 = l1 ? l1.next : l1;
    l2 = l2 ? l2.next : l2;
  }

  return head.next;
}

// @lc code=end
