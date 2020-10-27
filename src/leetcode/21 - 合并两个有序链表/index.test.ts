import { ListNode } from "../../datastructure/list/singleList";
import { mergeTwoLists } from "./index";

describe("merTwoList", () => {
  test("should ", () => {
    const h1 = new ListNode(1);
    h1.next = new ListNode(2);
    h1.next.next = new ListNode(4);

    const h2 = new ListNode(1);
    h2.next = new ListNode(3);
    h2.next.next = new ListNode(4);

    let h = mergeTwoLists(h1, h2);

    const vals = [];
    while (h != null) {
      vals.push(h.val);
      h = h.next;
    }
    expect(vals).toEqual([1, 1, 2, 3, 4, 4]);
  });
});
