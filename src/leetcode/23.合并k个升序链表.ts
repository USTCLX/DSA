/*
 * @lc app=leetcode.cn id=23 lang=typescript
 *
 * [23] 合并K个升序链表
 */
export class ListNode {
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

// function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
//   let head = new ListNode(0);
//   let current = head;

//   lists = lists.filter(item => {
//     return item;
//   });

//   while (lists.length) {
//     let minP = null;
//     for (let p of lists) {
//       if (minP == null) {
//         minP = p;
//       } else {
//         if (p.val < minP.val) {
//           minP = p;
//         }
//       }
//     }
//     current.next = minP;
//     current = current.next;
//     const minPIndex = lists.indexOf(minP);
//     lists[minPIndex] = lists[minPIndex].next;

//     if (!lists[minPIndex]) {
//       lists.splice(minPIndex, 1);
//     }
//   }

//   return head.next;
// }

// 把问题简化成合并两个有序链表
// 然后两个两个的合并

function merge2Lists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (!list1 && !list2) return null;
  if (!list1) return list2;
  if (!list2) return list1;

  let head = new ListNode(null);
  let current = head;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  current.next = list1 ? list1 : list2;

  return head.next;
}

// function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
//   if (!lists.length) return null;

//   let ans = lists[0];

//   for (let i = 1; i < lists.length; i++) {
//     ans = merge2Lists(ans, lists[i]);
//   }

//   return ans;
// }

// 还可以采用归并合并的思想
// 两两配对来合并
// 归并就会快很多，毕竟减少了一些比较
// function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
//   if (!lists.length) return null;

//   if (lists.length <= 2) {
//     return merge2Lists(lists[0], lists[1]);
//   } else {
//     const mid = lists.length >> 1;

//     const left = mergeKLists(lists.slice(0, mid + 1));
//     const right = mergeKLists(lists.slice(mid + 1));

//     return merge2Lists(left, right);
//   }
// }

function mergeLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (!l1) return l2;
  if (!l2) return l1;

  const head = new ListNode();
  let cur = head;

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      cur.next = new ListNode(l1.val);
      l1 = l1.next;
    } else {
      cur.next = new ListNode(l2.val);
      l2 = l2.next;
    }
    cur = cur.next;
  }

  if (l1) cur.next = l1;
  if (l2) cur.next = l2;

  return head.next;
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (!lists || !lists.length) return null;
  if (lists.length === 1) return lists[0];

  const mid = lists.length >> 1;

  const left = mergeKLists(lists.slice(0, mid));
  const right = mergeKLists(lists.slice(mid));

  return mergeLists(left, right);
}

// @lc code=end

export { mergeKLists };
