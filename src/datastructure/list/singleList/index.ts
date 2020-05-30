export class ListNode {
  val: number;
  next: ListNode;
  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}

export class SingleList {
  // 头元素 第-1个元素
  private head: ListNode;

  private size: number;

  constructor() {
    this.head = {
      val: null,
      next: null
    };
    this.size = 0;
  }

  getSize(): number {
    return this.size;
  }

  getValArr(): number[] {
    const arr = [];
    let current = this.head.next;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    return arr;
  }

  find(e: ListNode): ListNode {
    let current = this.head.next;
    while (current && current !== e) {
      current = current.next;
    }
    return current;
  }

  // 将e作为头节点插入
  insertAsFirst(e: ListNode) {
    const currentFirst = this.head.next;
    this.head.next = e;
    e.next = currentFirst;
    this.size++;
  }

  insertAsLast(e: ListNode) {
    let current = this.head;
    while (current && current.next !== null) {
      current = current.next;
    }
    current.next = e;
  }

  // 将e节点作为p节点的前驱插入
  insertBefore(p: ListNode, e: ListNode) {
    let current = this.head;
    while (current && current.next !== p) {
      current = current.next;
    }
    if (current) {
      current.next = e;
      e.next = p;
      this.size++;
    }
  }

  // 将e节点删除
  remove(e: ListNode) {
    let current = this.head;
    while (current && current.next === e) {
      current = current.next;
    }
    if (current) {
      current.next = current.next.next;
      this.size--;
    }
  }

  // 反转链表
  reverse() {
    let prev = null;
    let next = null;
    let current = this.head.next;
    while (current) {
      // 保存next节点的引用
      next = current.next;
      // 将current的next指针指向prev.断开current和next节点的联系
      current.next = prev;
      // 将prev移动到当前current的位置
      prev = current;
      // 将current移动到next的位置
      current = next;
    }
    // prev 为最后一个节点
    this.head.next = prev;
  }

  // 遍历
  traverse(cb: (e: ListNode) => {}): void {
    let current = this.head.next;
    while (current) {
      cb(current);
      current = current.next;
    }
  }
}
