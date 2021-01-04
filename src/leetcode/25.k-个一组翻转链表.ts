/*
 * @lc app=leetcode.cn id=25 lang=typescript
 *
 * [25] K 个一组翻转链表
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

function reverseList(head: ListNode | null): ListNode | null {
  if (!head) return head;
  let pre = null;
  let current = head;
  while (current) {
    const next = current.next;
    current.next = pre;
    pre = current;
    current = next;
  }
  return pre;
}

// 拼接两个list
// 返回拼接后的尾指针
function concatList(nodeA: ListNode, nodeB: ListNode): ListNode {
  let current = nodeA;
  while (current.next) {
    current = current.next;
  }
  current.next = nodeB;
  while (current.next) {
    current = current.next;
  }
  return current;
}

// 先将list以k为大小，拆分为若干个子list
// 对这些子list进行反转
// 最后将反转后的子list进行合并
// 在拆分的过程中需要一个计数器，因为如果最有一个子list的长度小于k，那么就不需要反转了
function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  if (!head) return head;
  // 拆分
  // 一个数组，数组中存储每个子列表的head
  const lists = [];
  let current = head;
  let pre = null;
  let count = 0;
  while (current) {
    if (count === 0) {
      lists.push(current);
    }
    count++;
    pre = current;
    current = current.next;

    // 切断
    if (count === k) {
      count = 0;
      pre.next = null;
    }
  }

  // 逐个反转
  for (let i = 0; i < lists.length; i++) {
    if (i !== lists.length - 1) {
      lists[i] = reverseList(lists[i]);
    } else if (count === 0) {
      lists[i] = reverseList(lists[i]);
    }
  }

  //依次拼回来
  lists.reduce((a, b) => {
    return concatList(a, b);
  });

  // 返回新的头指针
  return lists[0];
}
// @lc code=end
