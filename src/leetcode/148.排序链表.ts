/*
 * @lc app=leetcode.cn id=148 lang=typescript
 *
 * [148] 排序链表
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

// 比较容易想到的排序算法就是归并排序了，时间复杂度就是O(nlogn)
// 链表的排序不可以使用快速排序，因为快排涉及到数据的交换，需要数据结构支持随机访问的特性
// 分为三步走
// 1、找到链表的终点，切断链表，将链表分为两部分
// 2、递归的对前后两部分进行切分
// 3、合并切分后的链表，也就是依次合并两个有序链表
// 实现函数，findMiddleNode,mergeTwoList

// function findMiddleNode(head: ListNode | null): ListNode | null {
//   if (head === null || head.next === null) return head;

//   let slow: any = head;
//   // ❗️这里一定要提前走两步
//   let fast: any = head.next.next;

//   while (fast !== null && fast.next !== null) {
//     fast = fast.next.next;
//     slow = slow.next;
//   }
//   return slow;
// }

// function mergeTwoLists(
//   l1: ListNode | null,
//   l2: ListNode | null
// ): ListNode | null {
//   if (!l1) return l2;
//   if (!l2) return l1;

//   let head: any = new ListNode();
//   let current: any = head;
//   while (l1 && l2) {
//     if (l1.val < l2.val) {
//       current.next = l1;
//       l1 = l1.next;
//     } else {
//       current.next = l2;
//       l2 = l2.next;
//     }
//     current = current.next;
//   }

//   if (l1) {
//     current.next = l1;
//   } else {
//     current.next = l2;
//   }
//   return head.next;
// }

// function sortList(head: ListNode | null): ListNode | null {
//   if (head === null || head.next === null) return head;

//   const midNode: any = findMiddleNode(head);
//   const rightNode = midNode.next;
//   // ❗️这里一定要切断
//   midNode.next = null;

//   // ❗️这里一定要记录返回值，并使用返回值进行合并，而不能直接使用head和rightNode。
//   // 因为它们可能已经由于排序而改变了位置;
//   const left = sortList(head);
//   const right = sortList(rightNode);
//   return mergeTwoLists(left, right);
// }

function findMidNode(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;
  let slow = head;
  let fast = head;

  // 这里必须判断到fast.next.next
  // 比如[4,2]这样一个链表，如果只判fast.next
  // 那么mid是2，left是[4,2],right是[],相当于没有切。
  // 期望mid是4，left是[4],right是[2]
  while (fast && fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

function mergeList(p1: ListNode | null, p2: ListNode | null): ListNode | null {
  if (!p1) return p2;
  if (!p2) return p1;

  let head = new ListNode();
  let cur = head;

  while (p1 && p2) {
    if (p1.val <= p2.val) {
      cur.next = p1;
      p1 = p1.next;
    } else {
      cur.next = p2;
      p2 = p2.next;
    }
    cur = cur.next;
  }

  if (p1) cur.next = p1;
  if (p2) cur.next = p2;

  return head.next;
}

// 归并排序
function sortList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;

  const midNode = findMidNode(head);
  let leftHead = head;
  let rightHead = midNode.next;
  // 切断
  midNode.next = null;

  leftHead = sortList(leftHead);
  rightHead = sortList(rightHead);

  const res = mergeList(leftHead, rightHead);

  return res;
}
// @lc code=end

export { sortList, ListNode };
