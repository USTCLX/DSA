import { sortList, ListNode } from "./148.排序链表";

test("", () => {
  const head = new ListNode(4);
  head.next = new ListNode(2);
  head.next.next = new ListNode(1);
  head.next.next.next = new ListNode(3);

  sortList(head);
});
