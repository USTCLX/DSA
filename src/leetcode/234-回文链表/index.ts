import { ListNode } from "../../datastructure/list/listNode";
type Node = ListNode<number>;

/**
 * 解法1
 * 利用递归
 * 时间复杂度O(n)
 * 空间复杂度O(n) 因为有n层递归
 */
export class IsPalindromeOfRecursion {
  frontPointer: Node;

  recursivelyCheck(currentPointer: Node): boolean {
    if (currentPointer) {
      if (!this.recursivelyCheck(currentPointer.next)) return false;
      if (this.frontPointer.val !== currentPointer.val) return false;
      this.frontPointer = this.frontPointer.next;
    }
    return true;
  }

  isPalindrome(head: Node): boolean {
    this.frontPointer = head;
    return this.recursivelyCheck(head);
  }
}

/**
 * 解法2
 * 1.将链表从中间分开，找到中间点。
 * 2.然后将后半部分反转，并返回新的头(原尾节点)节点
 * 3.然后将前半部分和后半部分比较，验证是否回文。
 * 4.最后将链表恢复，返回结果。
 */
export class IsPalindromeOfTwoPoints {
  // 1.利用双指针找到中间点
  findEndOfStartHalf(head: Node) {
    let slow = head;
    let fast = head;
    while (fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }
  // 2.将后半部分反转，并返回新的头(原尾节点)节点
  reverseLastHalf(head: Node): Node {
    let pre = null;
    let cur = head;
    while (cur) {
      const temp = cur.next;
      cur.next = pre;
      pre = cur;
      cur = temp;
    }
    return pre;
  }

  isPalindrome(head: Node): boolean {
    if (!head) return true;

    let endOfStartHalf = this.findEndOfStartHalf(head);
    let startOfLastHalf = this.reverseLastHalf(endOfStartHalf.next);
    let result = true;
    let a = head;
    let b = startOfLastHalf;
    while (a && b) {
      if (a.val !== b.val) {
        result = false;
        break;
      }
      a = a.next;
      b = b.next;
    }

    endOfStartHalf.next = this.reverseLastHalf(startOfLastHalf);

    return result;
  }
}
