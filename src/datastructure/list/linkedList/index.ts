import { ListNode } from "../listNode";

export default class LinkedList<T> {
  private count: number = 0;
  private head: ListNode<T> = null;

  push(element: T) {
    const node = new ListNode(element);
    if (!this.head) {
      this.head = node;
    } else {
      let cur = this.head;
      while (cur.next) {
        cur = cur.next;
      }
      cur.next = node;
    }
    this.count++;
  }

  getNodeAt(index: number): ListNode<T> {
    if (index > 0 && index < this.count) {
      let cur = this.head;
      for (let i = 0; i < index; i++) {
        cur = cur.next;
      }
      return cur;
    }
    return null;
  }

  insert(element: T, index: number): boolean {
    if (index >= 0 && index <= this.count) {
      const node = new ListNode(element);
      let cur = this.head;
      if (index === 0) {
        node.next = cur;
        this.head = node;
      } else {
        let pre: ListNode<T>;
        for (let i = 0; i < index; i++) {
          pre = cur;
          cur = cur.next;
        }
        pre.next = node;
        node.next = cur;
      }
      this.count++;
      return true;
    }
    return false;
  }

  removeAt(index: number): T {
    if (index >= 0 && index < this.count) {
      let cur = this.head;
      if (index === 0) {
        this.head = cur.next;
      } else {
        let pre: ListNode<T>;
        for (let i = 0; i < index; i++) {
          pre = cur;
          cur = cur.next;
        }
        pre.next = cur.next;
      }
      this.count--;
      return cur.val;
    }
    return null;
  }

  remove(element: T) {}

  indexOf(element: T): number {}

  isEmpty(): boolean {}

  size(): number {}

  toString(): string {}
}
