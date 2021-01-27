import { addTwoNumbers } from "./445.两数相加-ii";

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function buildLink(arr: number[]): ListNode {
  const head = new ListNode();
  let current = head;
  for (let i = 0; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head.next;
}

function linkToArray(node: ListNode | null): number[] {
  if (!node) return [];
  const res = [];
  while (node) {
    res.push(node.val);
    node = node.next;
  }
  return res;
}

test("1", () => {
  const l1 = buildLink([7, 2, 4, 3]);
  const l2 = buildLink([5, 6, 4]);
  const res = addTwoNumbers(l1, l2);
  expect(linkToArray(res)).toEqual([7, 8, 0, 7]);
});
