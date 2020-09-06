export interface ListNodeInterface<T> {
  val: T;
  next: ListNodeInterface<T>;
}

export class ListNode<T> implements ListNodeInterface<T> {
  val: T;
  next: ListNode<T>;
  constructor(val: T) {
    this.val = val;
    this.next = null;
  }
}
