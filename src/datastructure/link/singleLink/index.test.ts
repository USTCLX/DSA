import { SingleLink, LinkNode } from "./index";

describe("SingleLink", () => {
  test("insertAsFirst", () => {
    const link = new SingleLink();
    const node0 = new LinkNode(0);
    link.insertAsFirst(node0);
    expect(link.getSize()).toBe(1);
    expect(link.find(node0)).toBe(node0);
    expect(link.getValArr()).toEqual([0]);
  });

  test("insertBefore ", () => {
    const link = new SingleLink();
    const node0 = new LinkNode(0);
    link.insertAsFirst(node0);
    const node2 = new LinkNode(2);
    link.insertAsLast(node2);
    expect(link.getValArr()).toEqual([0, 2]);

    const node1 = new LinkNode(1);
    link.insertBefore(node2, node1);
    expect(link.getValArr()).toEqual([0, 1, 2]);
  });

  test("insertAsLast", () => {
    const link = new SingleLink();
    const node0 = new LinkNode(0);
    const node1 = new LinkNode(1);
    const node2 = new LinkNode(2);
    link.insertAsLast(node0);
    link.insertAsLast(node1);
    link.insertAsLast(node2);
    expect(link.getValArr()).toEqual([0, 1, 2]);
  });

  test("reverse", () => {
    const link = new SingleLink();
    const node0 = new LinkNode(0);
    const node1 = new LinkNode(1);
    const node2 = new LinkNode(2);
    link.insertAsLast(node0);
    link.insertAsLast(node1);
    link.insertAsLast(node2);
    link.reverse();
    expect(link.getValArr()).toEqual([2, 1, 0]);
  });
});
