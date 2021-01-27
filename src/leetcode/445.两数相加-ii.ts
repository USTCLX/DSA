/*
 * @lc app=leetcode.cn id=445 lang=typescript
 *
 * [445] 两数相加 II
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

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

function reverseLink(l: ListNode | null): ListNode | null {
  if (!l) return l;
  let pre = null;
  let cur = l;
  while (cur) {
    const temp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = temp;
  }
  return pre;
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  l1 = reverseLink(l1);
  l2 = reverseLink(l2);

  let head = new ListNode();
  let current = head;
  let add = 0;
  while (l1 || l2 || add) {
    let val = 0;
    if (l1 && l2) {
      val = l1.val + l2.val;
      l1 = l1.next;
      l2 = l2.next;
    } else if (l1) {
      val = l1.val;
      l1 = l1.next;
    } else if (l2) {
      val = l2.val;
      l2 = l2.next;
    }
    val = add + val;
    add = Math.floor(val / 10);
    current.next = new ListNode(val % 10);
    current = current.next;
  }

  const temp = head.next;
  head.next = null;

  return reverseLink(temp);
}
// @lc code=end

export { addTwoNumbers };
