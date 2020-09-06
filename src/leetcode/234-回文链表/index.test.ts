import { IsPalindromeOfRecursion, IsPalindromeOfTwoPoints } from "./index";
import { ListNode } from "../../datastructure/list/listNode";
describe("IsPalindromeOfRecursion", () => {
  const isPalindromeOfRecursion = new IsPalindromeOfRecursion();
  test("1,2,3,4", () => {
    const a = new ListNode(1);
    const b = new ListNode(2);
    const c = new ListNode(3);
    const d = new ListNode(4);
    a.next = b;
    b.next = c;
    c.next = d;

    expect(isPalindromeOfRecursion.isPalindrome(a)).toBe(false);
  });

  test("1,2,2,1", () => {
    const a = new ListNode(1);
    const b = new ListNode(2);
    const c = new ListNode(2);
    const d = new ListNode(1);
    a.next = b;
    b.next = c;
    c.next = d;

    expect(isPalindromeOfRecursion.isPalindrome(a)).toBe(true);
  });
});

describe("IsPalindromeOfTwoPoints", () => {
  const isPalindromeOfTwoPoints = new IsPalindromeOfTwoPoints();
  test("1,2,3,4", () => {
    const a = new ListNode(1);
    const b = new ListNode(2);
    const c = new ListNode(3);
    const d = new ListNode(4);
    a.next = b;
    b.next = c;
    c.next = d;

    expect(isPalindromeOfTwoPoints.isPalindrome(a)).toBe(false);
  });
  test("1,2,2,1", () => {
    const a = new ListNode(1);
    const b = new ListNode(2);
    const c = new ListNode(2);
    const d = new ListNode(1);
    a.next = b;
    b.next = c;
    c.next = d;

    expect(isPalindromeOfTwoPoints.isPalindrome(a)).toBe(true);
  });
});
