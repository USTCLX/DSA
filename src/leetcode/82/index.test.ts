import { ListNode } from "../../datastructure/list/singleList";
import { deleteDuplicates } from "./index";

describe("deleteDuplicates", () => {
  test("1->1->1->2->3 ", () => {
    const n1 = new ListNode(1);
    const n2 = new ListNode(1);
    const n3 = new ListNode(1);
    const n4 = new ListNode(2);
    const n5 = new ListNode(3);
    n1.next = n2;
    n2.next = n3;
    n3.next = n4;
    n4.next = n5;

    // expect(n1.toArray()).toEqual([1, 1, 1, 2, 3]);

    expect(deleteDuplicates(n1).toArray()).toEqual([2, 3]);
  });

  test("[1,2,3,3,4,4,5]", () => {
    const n1 = new ListNode(1);
    const n2 = new ListNode(2);
    const n3 = new ListNode(3);
    const n4 = new ListNode(3);
    const n5 = new ListNode(4);
    const n6 = new ListNode(4);
    const n7 = new ListNode(5);
    n1.next = n2;
    n2.next = n3;
    n3.next = n4;
    n4.next = n5;
    n5.next = n6;
    n6.next = n7;

    expect(n1.toArray()).toEqual([1, 2, 3, 3, 4, 4, 5]);
    expect(deleteDuplicates(n1).toArray()).toEqual([1, 2, 5]);
  });

  test("[1,1]", () => {
    const n1 = new ListNode(1);
    const n2 = new ListNode(1);
    n1.next = n2;
    expect(deleteDuplicates(n1)).toEqual(null);
  });
});
