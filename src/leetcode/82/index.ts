import { ListNode } from "../../datastructure/list/singleList";

export function deleteDuplicates(head: ListNode) {
  const dummy = new ListNode(null);
  dummy.next = head;

  let cur = dummy;
  // we need it to remove next and next.next
  // so we need to make sur cur is the privious node
  while (cur.next && cur.next.next) {
    if (cur.next.val === cur.next.next.val) {
      const val = cur.next.val;
      // if next node's val equals val remove next node one by one
      while (cur.next && val === cur.next.val) {
        cur.next = cur.next.next;
      }
    } else {
      cur = cur.next;
    }
  }

  return dummy.next;
}
