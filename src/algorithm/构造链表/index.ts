class Node {
  value: number;
  next: Node;
  constructor(value: number, next: Node = null) {
    this.value = value;
    this.next = next;
  }

  stringify(): string {
    let node: Node = this;
    let res = [];
    while (node) {
      res.push(node.value);
      node = node.next;
    }

    return `[${res.join(",")}]`;
  }
}

export const fromArrToLink = (nums: number[]): Node => {
  if (!nums || !nums.length) return null;

  const head = new Node(null);
  let node = head;
  for (let i = 0; i < nums.length; i++) {
    const next = new Node(nums[i]);
    node.next = next;
    node = node.next;
  }

  return head.next;
};
