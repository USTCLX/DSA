import { mergeKLists, ListNode } from "./23.合并k个升序链表";

test("should 1", () => {
  const a = new ListNode(1);
  a.next = new ListNode(4);
  a.next.next = new ListNode(5);

  const b = new ListNode(1);
  b.next = new ListNode(3);
  b.next.next = new ListNode(4);

  const c = new ListNode(2);
  c.next = new ListNode(6);

  expect(mergeKLists([a, b, c])).toBe(1);
});

test("2", () => {
  expect(mergeKLists([null])).toBe(1);
});
